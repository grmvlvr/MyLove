// Слайдер
const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
let currentSlide = 0;

// Функция для показа текущего слайда
function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
    });
    currentSlide = index;
}

// Показать следующий слайд
nextBtn.addEventListener('click', () => {
    let nextSlide = (currentSlide + 1) % slides.length;
    showSlide(nextSlide);
});

// Показать предыдущий слайд
prevBtn.addEventListener('click', () => {
    let prevSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(prevSlide);
});

// Автоматическое переключение слайдов (опционально)
setInterval(() => {
    let nextSlide = (currentSlide + 1) % slides.length;
    showSlide(nextSlide);
}, 5000);
