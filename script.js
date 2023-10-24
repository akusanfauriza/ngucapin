// Mendapatkan semua elemen slide
const slides = document.querySelectorAll('.slide-0, .slide-1, .slide-2, .slide-3, .slide-4, .slide-5, .slide-6, .slide-7, .slide-8');

let currentSlideIndex = 0;

// Fungsi untuk menampilkan slide tertentu
function showSlide(index) {
    slides.forEach((slide, i) => {
        if (i === index) {
            slide.style.display = 'block';
        } else {
            slide.style.display = 'none';
        }
    });
}

// Fungsi untuk menampilkan slide berikutnya
function nextSlide() {
    currentSlideIndex = (currentSlideIndex + 1) % slides.length;
    showSlide(currentSlideIndex);
}

// Fungsi untuk menjalankan animasi slide secara otomatis
function autoSlide() {
    nextSlide();
    setTimeout(autoSlide, 2700); // (2700 milidetik)
}

// Memulai animasi slide otomatis
autoSlide();
