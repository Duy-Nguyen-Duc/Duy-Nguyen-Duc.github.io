// Light/dark theme switch. Adapted from al-folio's assets/js/theme.js:
// the theme is stored in localStorage and applied as html[data-theme="dark"],
// which is the selector the vendored main.css keys its dark palette off.

const toggleTheme = (theme) => {
  setTheme(theme === "dark" ? "light" : "dark");
};

const setTheme = (theme) => {
  transTheme();
  if (theme) {
    document.documentElement.setAttribute("data-theme", theme);
  } else {
    document.documentElement.removeAttribute("data-theme");
  }
  localStorage.setItem("theme", theme);
};

// Brief all-property transition so the palette swap fades instead of snapping.
const transTheme = () => {
  document.documentElement.classList.add("transition");
  window.setTimeout(() => {
    document.documentElement.classList.remove("transition");
  }, 500);
};

const initTheme = (theme) => {
  if (theme == null || theme === "null") {
    theme = "light";
  }
  setTheme(theme);
};

initTheme(localStorage.getItem("theme"));
