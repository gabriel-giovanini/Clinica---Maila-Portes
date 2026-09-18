/**
 * MAILA PORTES ODONTOLOGIA — LUXURY EDITORIAL JAVASCRIPT
 * Interações refinadas e leves: Menu Mobile, Sticky Header e Scroll Reveal
 */

document.addEventListener("DOMContentLoaded", () => {
  // 1. STICKY HEADER
  const header = document.querySelector(".site-header");
  
  const handleScroll = () => {
    if (!header) return;
    if (window.scrollY > 30) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  };
  
  window.addEventListener("scroll", handleScroll, { passive: true });
  handleScroll();

  // 2. MENU MOBILE
  const mobileToggle = document.querySelector(".mobile-nav-toggle");
  const mobileMenu = document.querySelector(".mobile-nav-menu");
  const mobileClose = document.querySelector(".mobile-menu-close");
  const mobileLinks = document.querySelectorAll(".mobile-link");

  if (mobileToggle && mobileMenu) {
    const closeMenu = () => {
      mobileToggle.classList.remove("active");
      mobileMenu.classList.remove("active");
      mobileMenu.setAttribute("aria-hidden", "true");
      mobileMenu.inert = true;
      mobileToggle.setAttribute("aria-expanded", "false");
      mobileToggle.focus();
      document.body.classList.remove("menu-open");
      if (header) header.classList.remove("menu-open");
      document.body.style.overflow = "";
    };

    const toggleMobileMenu = () => {
      const isOpen = mobileMenu.classList.contains("active");
      if (isOpen) {
        closeMenu();
      } else {
        mobileToggle.classList.add("active");
        mobileMenu.classList.add("active");
        mobileMenu.setAttribute("aria-hidden", "false");
        mobileMenu.inert = false;
        mobileToggle.setAttribute("aria-expanded", "true");
        mobileClose?.focus();
        document.body.classList.add("menu-open");
        if (header) header.classList.add("menu-open");
        document.body.style.overflow = "hidden";
      }
    };

    document.addEventListener("keydown", (event) => {
      if (!mobileMenu.classList.contains("active")) return;
      if (event.key === "Escape") closeMenu();
      if (event.key === "Tab") {
        const focusable = [...mobileMenu.querySelectorAll("a[href], button")];
        const first = focusable[0], last = focusable[focusable.length - 1];
        if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
        else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
      }
    });
    mobileToggle.addEventListener("click", toggleMobileMenu);
    if (mobileClose) {
      mobileClose.addEventListener("click", closeMenu);
    }

    mobileLinks.forEach((link) => {
      link.addEventListener("click", closeMenu);
    });
  }

  // 3. SCROLL REVEAL (INTERSECTION OBSERVER)
  const reveals = document.querySelectorAll(".reveal");

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
            obs.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    reveals.forEach((el) => observer.observe(el));
  } else {
    reveals.forEach((el) => el.classList.add("active"));
  }

  // 4. AUTOPLAY SEGURO DO VÍDEO NO HERO
  const heroVideo = document.querySelector(".hero-video");
  if (heroVideo) {
    heroVideo.play().catch(() => {});
  }
});
