"use strict";

import { generateTemplate } from "./templateGenerator.js";
import { generateTeamItemTemplate } from "./templateGenerator.js";
import { generateInventoryItemTemplate } from "./templateGenerator.js";
import { generateGalleryItemTemplate } from "./templateGenerator.js";
import { generateTestimonialItemTemplate } from "./templateGenerator.js";

// Item Containers
const servicesContainer = document.getElementById("service-container");
const aboutItemContainerRight = document.getElementById(
  "about-item-container-right"
);
const aboutItemContainerLeft = document.getElementById(
  "about-item-container-left"
);

$(document).ready(function () {
  // team carousel
  $(".team .owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    autoplay: true,
    dots: true,
    nav: false,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  });

  // faq accordion
  $(".faq-head").each(function () {
    $(this).click(function () {
      $(this).next().toggleClass("show-faq-content");

      let icon = $(this).children("span").children("i").attr("class");

      if (icon == "fas fa-plus") {
        $(this).children("span").html("<i class = 'fas fa-minus'></i>");
      } else {
        $(this).children("span").html("<i class = 'fas fa-plus'></i>");
      }
    });
  });

  // testimonial carousel
  $(".testimonial .owl-carousel").owlCarousel({
    loop: true,
    autoplay: true,
    dots: true,
    nav: false,
    items: 1,
  });
});

// Testimonials Content

generateTestimonialItemTemplate(
  "testimonials/profile (2).jpg",
  "Professional, fast, and affordable. Took my laptop in for repairs and it was good as new within a day. Highly recommend them!",
  "Tinashe M.",
  "Marondera"
);

generateTestimonialItemTemplate(
  "testimonials/profile (2).jpg",
  "I bought a second-hand laptop for school, and it works perfectly. The team was very honest and helped me choose based on my budget.",
  "Memory D.",
  "UZ Student"
);

generateTestimonialItemTemplate(
  "testimonials/profile (2).jpg",
  "They helped me fix my desktop and set up all the software I needed for my office. Great customer service and attention to detail.",
  "Mr. Nyandoro",
  "Local Business Owner"
);

// End Testimonials Content

// Team Content

generateTeamItemTemplate(
  "team/profile (2).jpg",
  "Nigel Chiputura",
  "Backend Developer",
  "https://www.linkedin.com/in/nigel-chiputura-7a4a95375/",
  "https://wa.me/263771987200",
  "https://www.linkedin.com/in/nigel-chiputura-7a4a95375/"
);

generateTeamItemTemplate(
  "team/profile (1).jpg",
  "Nigel Chiputura",
  "Backend Developer",
  "https://www.linkedin.com/in/nigel-chiputura-7a4a95375/",
  "https://wa.me/263771987200",
  "https://www.linkedin.com/in/nigel-chiputura-7a4a95375/"
);

// End Team Content

// Services Content

generateTemplate(
  servicesContainer,
  "detail-item",
  "fas",
  "fa-code",
  "Website Development",
  "Professional websites built to be fast, responsive, and easy to maintain. From simple static sites to dynamic, database-driven platforms with PHP backends, designed to represent your brand professionally online.",
  [],
  "coding-1.png"
);

generateTemplate(
  servicesContainer,
  "detail-item",
  "fab",
  "fa-android",
  "Mobile App Development",
  "Custom mobile applications built to support your business or service. From data-driven apps to API-powered solutions, designed for reliability, scalability, and smooth user experience.",
  [],
  "coding-2.png"
);

generateTemplate(
  servicesContainer,
  "detail-item",
  "fas",
  "fa-plug",
  "Backend & API Development",
  "Secure and scalable backend systems that power modern applications. Built using Django, FastAPI, or PHP to handle data, authentication, and integrations efficiently.",
  [],
  "server.png"
);

generateTemplate(
  servicesContainer,
  "detail-item",
  "fas",
  "fa-laptop-code",
  "Custom Systems Development",
  "Tailor-made systems designed to automate workflows and improve efficiency. Ideal for institutions and businesses that need solutions such as school portals, management systems, or internal tools.",
  [],
  "data-storage.png"
);

generateTemplate(
  servicesContainer,
  "detail-item",
  "fas",
  "fa-desktop",
  "Custom Systems Development",
  "Custom desktop software built for performance and reliability. Ideal for internal tools and standalone applications that require stability and long-term support.",
  [],
  "desktop.png"
);

generateTemplate(
  servicesContainer,
  "detail-item",
  "fas",
  "fa-tools",
  "Maintenance & Support",
  "Ongoing support to keep your systems secure and running smoothly. Includes updates, bug fixes, performance improvements, and feature enhancements.",
  [],
  "security.png"
);

// End Services Content

// About Content

generateTemplate(
  aboutItemContainerRight,
  "about-item",
  "fas",
  "fa-book-open",
  "Our Story",
  "CodeWithNigey was founded with a simple goal: to build software solutions that are practical, reliable, and easy to maintain. What started as a passion for problem-solving through code has grown into a service focused on helping businesses, institutions, and individuals turn ideas into functional digital products.",
  [],
  "",
  "With experience across web development, backend systems, APIs, and custom applications, each project is approached with careful planning, clean architecture, and long-term usability in mind. The focus has always been on building systems that do more than just work — systems that support real operations and real growth.",
  "At CodeWithNigey, technology is used as a tool to simplify workflows, improve efficiency, and help clients operate with confidence in a digital world."
);

generateTemplate(
  aboutItemContainerLeft,
  "about-item",
  "fas",
  "fa-lightbulb",
  "Our Mission",
  "Our mission is to design and develop software solutions that solve real-world problems through thoughtful engineering and clear communication. We aim to deliver systems that are secure, scalable, and built with the future in mind, while keeping the development process transparent and collaborative."
);

generateTemplate(
  aboutItemContainerLeft,
  "about-item",
  "fas",
  "fa-star",
  "Why Choose Us",
  "",
  [
    "Reliable Solutions",
    "Client-Focused Approach",
    "Flexible Technology Choices",
    "Fast turnaround times",
    "Personalized service",
    "Competitive prices",
  ]
);

// End About Content

const teamItemContainer = document.getElementById("team-item-container");
const testimonialItemContainer = document.getElementById(
  "testimonial-item-container"
);

// Remove extra child in owl carousel
teamItemContainer.removeChild(teamItemContainer.children[0]);
testimonialItemContainer.removeChild(testimonialItemContainer.children[0]);

// Portfolio Content

fetch("portfolio.json")
  .then((response) => response.json())
  .then((data) => {
    const portfolio = data;
    for (let i = 0; i < 3; i++) {
      const portfolioDetails = portfolio[i];
      console.log(portfolioDetails.demo);

      generateGalleryItemTemplate(
        portfolioDetails.imagePath,
        portfolioDetails.name,
        portfolioDetails.description,
        portfolioDetails.features,
        portfolioDetails.gallery,
        portfolioDetails.demo
      );
    }
  });

// End Portfolio Content
