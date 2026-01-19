const toggle = document.getElementById("themeToggle");
const root = document.documentElement;
const icon = toggle.querySelector("i");

// Load saved preference
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
  root.setAttribute("data-theme", "dark");
  icon.classList.replace("fa-moon", "fa-sun");
}

// Toggle on click
toggle.addEventListener("click", () => {
  const isDark = root.getAttribute("data-theme") === "dark";

  if (isDark) {
    root.removeAttribute("data-theme");
    localStorage.removeItem("theme");
    icon.classList.replace("fa-sun", "fa-moon");
  } else {
    root.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
    icon.classList.replace("fa-moon", "fa-sun");
  }
});
