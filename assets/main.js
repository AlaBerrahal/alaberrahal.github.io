"use strict";
document.documentElement.classList.add("js");
const menuButton = document.querySelector(".menu-button");
const navigation = document.querySelector(".main-nav");
if (menuButton && navigation) {
  menuButton.hidden = false;
  menuButton.addEventListener("click", () => {
    const opened = menuButton.getAttribute("aria-expanded") !== "true";
    menuButton.setAttribute("aria-expanded", String(opened));
    navigation.classList.toggle("is-open", opened);
  });
  navigation.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
    menuButton.setAttribute("aria-expanded", "false");
    navigation.classList.remove("is-open");
  }));
  document.addEventListener("keydown", event => {
    if (event.key === "Escape" && menuButton.getAttribute("aria-expanded") === "true") {
      menuButton.setAttribute("aria-expanded", "false");
      navigation.classList.remove("is-open");
      menuButton.focus();
    }
  });
}
if ("IntersectionObserver" in window) {
  const links = [...document.querySelectorAll(".main-nav a")];
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        links.forEach(link => {
          if (link.hash === "#" + entry.target.id) link.setAttribute("aria-current", "location");
          else link.removeAttribute("aria-current");
        });
      }
    });
  }, {rootMargin: "-15% 0px -60% 0px"});
  document.querySelectorAll("main section[id]").forEach(section => observer.observe(section));
}
