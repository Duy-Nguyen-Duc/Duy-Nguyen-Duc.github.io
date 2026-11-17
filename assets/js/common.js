document.addEventListener("DOMContentLoaded", function () {
  // Theme toggle button in the navbar.
  const toggle = document.getElementById("light-toggle");
  if (toggle) {
    toggle.addEventListener("click", function () {
      toggleTheme(localStorage.getItem("theme"));
    });
  }

  // Collapse the mobile navbar after following an in-page link.
  document.querySelectorAll("#navbarNav .nav-link").forEach((link) => {
    link.addEventListener("click", () => {
      const nav = document.getElementById("navbarNav");
      if (nav && nav.classList.contains("show") && window.jQuery) {
        window.jQuery(nav).collapse("hide");
      }
    });
  });

  // Footer year.
  const year = document.getElementById("year");
  if (year) year.textContent = String(new Date().getFullYear());
});
