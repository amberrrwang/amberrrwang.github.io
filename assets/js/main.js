document.addEventListener("DOMContentLoaded", function () {
  var nav = document.querySelector(".site-nav");
  var navList = document.querySelector(".site-nav ul");
  var toggle = document.querySelector(".nav-toggle");

  if (toggle && navList) {
    toggle.addEventListener("click", function () {
      navList.classList.toggle("is-open");
    });
    navList.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        navList.classList.remove("is-open");
      });
    });
  }

  var onScroll = function () {
    if (nav) {
      nav.classList.toggle("is-scrolled", window.scrollY > 8);
    }
  };
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  var sections = document.querySelectorAll("[data-nav-section]");
  var navLinks = document.querySelectorAll(".nav-link[data-nav-target]");
  if (sections.length && navLinks.length && "IntersectionObserver" in window) {
    var sectionObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            var id = entry.target.getAttribute("data-nav-section");
            navLinks.forEach(function (link) {
              link.classList.toggle("is-active", link.getAttribute("data-nav-target") === id);
            });
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    sections.forEach(function (section) {
      sectionObserver.observe(section);
    });
  }

  var revealEls = document.querySelectorAll(".reveal");
  if (revealEls.length && "IntersectionObserver" in window) {
    var revealObserver = new IntersectionObserver(
      function (entries, observer) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0, rootMargin: "0px 0px -10% 0px" }
    );
    revealEls.forEach(function (el) {
      revealObserver.observe(el);
    });
  } else {
    revealEls.forEach(function (el) {
      el.classList.add("is-visible");
    });
  }
});
