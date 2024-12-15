// Seleksi elemen navigasi atas dan utama
const topNav = document.querySelector('.top-nav');
const mainNav = document.querySelector('.main-nav');

// Event listener untuk scroll
window.addEventListener('scroll', () => {
  if (window.scrollY > 100) {
    // Sembunyikan navigasi atas
    topNav.classList.add('hidden');
    // Navigasi utama menjadi sticky
    mainNav.classList.add('sticky');
  } else {
    // Tampilkan kembali navigasi atas
    topNav.classList.remove('hidden');
    // Navigasi utama kembali ke posisi awal
    mainNav.classList.remove('sticky');
  }
});
