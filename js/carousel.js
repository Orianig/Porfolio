document.addEventListener("DOMContentLoaded", function () {
    const carousel = document.getElementById("carousel");
    const slides = document.querySelectorAll(".carousel-slide");
    const prevBtn = document.getElementById("prev-slide");
    const nextBtn = document.getElementById("next-slide");

    let currentSlide = 0;

    function updateCarousel() {
        slides.forEach((slide, index) => {
            slide.classList.toggle("hidden", index !== currentSlide);
        });
    }

    if (nextBtn && prevBtn) {
        nextBtn.addEventListener("click", function () {
            currentSlide = (currentSlide + 1) % slides.length;
            updateCarousel();
        });

        prevBtn.addEventListener("click", function () {
            currentSlide = (currentSlide - 1 + slides.length) % slides.length;
            updateCarousel();
        });
    }

    updateCarousel();
});
