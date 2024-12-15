// Ambil elemen hamburger dan main-nav
const hamburgerMenu = document.querySelector('.hamburger-menu');
const mainNav = document.querySelector('.main-nav');

// Tambahkan event listener untuk hamburger menu
hamburgerMenu.addEventListener('click', () => {
  // Toggle kelas active pada main-nav
  mainNav.classList.toggle('active');
});