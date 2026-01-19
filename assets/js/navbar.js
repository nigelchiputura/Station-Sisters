import { getImage } from "./utilities.js";

// Back To Top
const backToTop = document.getElementById("back-to-top");
const navLogo = document.getElementById("nav-logo");

$(document).ready(function () {
  // navigation bar toggle
  $("#navbar-toggler").click(function () {
    $(".navbar-collapse").slideToggle(400);
  });

  // navbar bg change
  $(window).scroll(function () {
    let pos = $(window).scrollTop();
    let width = $(window).width();

    if (pos >= 100 && width > 992) {
      $(".navbar").addClass("cng-navbar");
      navLogo.setAttribute("src", getImage("logo-black.png"));
      backToTop.style.opacity = 1;
      backToTop.style.pointerEvents = "all";
    } else if (pos < 100 && width > 992) {
      $(".navbar").removeClass("cng-navbar");
      navLogo.setAttribute("src", getImage("logo-white.png"));
      backToTop.style.opacity = 0;
      backToTop.style.pointerEvents = "none";
    } else {
      navLogo.setAttribute("src", getImage("logo-black.png"));
    }
  });
});

document.querySelectorAll(".dropdown-toggle").forEach((toggle) => {
  toggle.addEventListener("click", function (e) {
    e.preventDefault();

    const parent = this.parentElement;

    // close previously open dropdowns
    document.querySelectorAll(".dropdown.open").forEach((d) => {
      if (d !== parent) d.classList.remove("open");
    });

    // toggle current dropdown
    parent.classList.toggle("open");
  });
});

// Optional: close dropdown when clicking outside
document.addEventListener("click", function (e) {
  if (!e.target.closest(".dropdown")) {
    document
      .querySelectorAll(".dropdown.open")
      .forEach((d) => d.classList.remove("open"));
  }
});
