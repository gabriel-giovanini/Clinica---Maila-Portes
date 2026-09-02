/**
 * MAILA PORTES ODONTOLOGIA — LUXURY EDITORIAL JAVASCRIPT
 * Interações refinadas e leves: Menu Mobile, Sticky Header e Scroll Reveal
 */

document.addEventListener("DOMContentLoaded", () => {
  // 1. STICKY HEADER
  const header = document.querySelector(".site-header");
  
  const handleScroll = () => {
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
  const mobileLinks = document.querySelectorAll(".mobile-link");

  if (mobileToggle && mobileMenu) {
    const toggleMobileMenu = () => {
      const isOpen = mobileMenu.classList.contains("active");
      mobileToggle.classList.toggle("active", !isOpen);
      mobileMenu.classList.toggle("active", !isOpen);
      document.body.style.overflow = !isOpen ? "hidden" : "";
    };

    mobileToggle.addEventListener("click", toggleMobileMenu);

    mobileLinks.forEach((link) => {
      link.addEventListener("click", () => {
        mobileToggle.classList.remove("active");
        mobileMenu.classList.remove("active");
        document.body.style.overflow = "";
      });
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
