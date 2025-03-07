document.addEventListener("DOMContentLoaded", function () {
    function setupCarousel(carouselId, slideClass, indicatorClass) {
        const slides = document.querySelectorAll(`.${slideClass}`);
        const indicators = document.querySelectorAll(`.${indicatorClass}`);
        let currentSlide = 0;

        function updateCarousel() {
            slides.forEach((slide, index) => {
                slide.classList.toggle("hidden", index !== currentSlide);
            });

            indicators.forEach((indicator, index) => {
                indicator.classList.toggle("bg-secondary", index === currentSlide);
                indicator.classList.toggle("bg-gray-500", index !== currentSlide);
            });
        }

        function goToSlide(index) {
            currentSlide = index;
            updateCarousel();
        }

        indicators.forEach((indicator, index) => {
            indicator.addEventListener("click", () => goToSlide(index));
        });

        function autoAdvance() {
            currentSlide = (currentSlide + 1) % slides.length;
            updateCarousel();
        }

        setInterval(autoAdvance, 5000);
        updateCarousel();
    }

    setupCarousel("carousel-prev", "carousel-prev-slide", "carousel-prev-indicator");
    setupCarousel("carousel-new", "carousel-new-slide", "carousel-new-indicator");
});
