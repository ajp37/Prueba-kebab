// HEADER SCROLL
const header = document.getElementById("header");

window.addEventListener("scroll", () => {
  if(window.scrollY > 80){
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

// MOBILE MENU
const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");

menuToggle.addEventListener("click", () => {
  nav.classList.toggle("active");
});

// REVEAL ON SCROLL
const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add("active");
    }
  });
}, {
  threshold: 0.2
});

reveals.forEach(el => observer.observe(el));