function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }

function scrollToTop() {
  // Check screen width
  if (window.innerWidth > 1200) {
    // Desktop mode
    location.href = '#desktop-nav';
  } else {
    // Mobile mode
    location.href = '#hamburger-nav';
  }
}
