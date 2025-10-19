let menuToggleOpen = document.querySelector(".header-mobile-toggle.open");
let menuToggleClose = document.querySelector(".header-mobile-toggle.close");

let menuWrapper = document.querySelector(".header-mobile-wrapper");

function openMenu() {
  menuWrapper.style.display = "flex";
  menuToggleOpen.style.display = "none";
  menuToggleClose.style.display = "flex";
}

function closeMenu() {
  menuWrapper.style.display = "none";
  menuToggleOpen.style.display = "flex";
  menuToggleClose.style.display = "none";
}

menuToggleOpen.addEventListener("click", openMenu);
menuToggleClose.addEventListener("click", closeMenu);
