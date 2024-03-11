const navbarNav = document.querySelector('.navbar-nav');
const hamburgerMenu = document.querySelector('#hamburger-menu');

hamburgerMenu.onclick = (event) => {
  event.preventDefault();
  navbarNav.classList.toggle('active');
};

const hm = document.querySelector('#hamburger-menu');
document.addEventListener('click', function (e) {
  if (!hm.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove('active');
  }
});