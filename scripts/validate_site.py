"""Validate static publication files without third-party dependencies."""
from pathlib import Path
from html.parser import HTMLParser
from urllib.parse import urlparse
import json
import xml.etree.ElementTree as ET

ROOT = Path(__file__).resolve().parents[1]
BASE = 'https://clinica-maila-portes.vercel.app'
VOID = set('area base br col embed hr img input link meta param source track wbr'.split())
class Page(HTMLParser):
    def __init__(self, path):
        super().__init__(convert_charrefs=True)
        self.path, self.tags, self.stack, self.ids = path, [], [], set()
        self.feed(path.read_text())
        assert not self.stack, (path.name, self.stack)
    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        self.tags.append((tag, attrs))
        if 'id' in attrs:
            assert attrs['id'] not in self.ids, (self.path, 'duplicate id')
            self.ids.add(attrs['id'])
        if tag not in VOID: self.stack.append(tag)
    def handle_startendtag(self, tag, attrs):
        self.handle_starttag(tag, attrs)
        if tag not in VOID: self.handle_endtag(tag)
    def handle_endtag(self, tag):
        assert self.stack and self.stack[-1] == tag, (self.path.name, tag, self.stack[-3:])
        self.stack.pop()

pages = {p.name: Page(p) for p in ROOT.glob('*.html')}
titles, descriptions = set(), set()
for name, page in pages.items():
    import re
    source = page.path.read_text()
    title = re.search(r'<title>(.*?)</title>', source).group(1)
    desc = next(a['content'] for t,a in page.tags if t=='meta' and a.get('name')=='description')
    assert title not in titles and desc not in descriptions, name
    titles.add(title); descriptions.add(desc)
    assert sum(t=='h1' for t,a in page.tags)==1, name
    assert sum(t=='main' for t,a in page.tags)==1, name
    canonical = [a['href'] for t,a in page.tags if t=='link' and a.get('rel')=='canonical']
    assert canonical == [BASE + ('/' if name=='index.html' else '/'+name)], name
    for tag, a in page.tags:
        if tag=='img': assert 'alt' in a, name
        if a.get('target')=='_blank': assert 'noopener' in a.get('rel',''), name
        for attr in ('href','src'):
            if attr not in a: continue
            link=urlparse(a[attr])
            if link.scheme or link.netloc: continue
            file=(ROOT/link.path.lstrip('/')) if link.path else page.path
            if file.is_dir(): file=file/'index.html'
            assert file.exists(), (name,a[attr])
            if link.fragment: assert link.fragment in pages[file.name].ids, (name,a[attr])
    for block in re.findall(r'<script type="application/ld\+json">(.*?)</script>',source,re.S): json.loads(block)
    if name in ('404.html','obrigado.html'):
        assert any(t=='meta' and a.get('name')=='robots' and 'noindex' in a.get('content','') for t,a in page.tags), name
assert sum(t=='details' for t,a in pages['index.html'].tags)==5
locs=[el.text for el in ET.parse(ROOT/'sitemap.xml').iter() if el.tag.endswith('}loc')]
assert set(locs)=={BASE+'/',BASE+'/privacidade.html'}
assert BASE+'/sitemap.xml' in (ROOT/'robots.txt').read_text()
config=json.loads((ROOT/'vercel.json').read_text())
assert config['routes'][-1]['status']==404 and config['routes'][-1]['dest']=='/404.html'
assert config['routes'][-2]=={'handle':'filesystem'}
print('PASS: 4 páginas, estrutura HTML, links locais, âncoras, imagens, metadados únicos, JSON-LD, FAQ, sitemap, robots e configuração 404.')
