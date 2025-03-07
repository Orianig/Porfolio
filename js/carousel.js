document.addEventListener("DOMContentLoaded", function () {
    function setupCarousel(carouselId, slideClass, prevBtnId, nextBtnId) {
        const carousel = document.getElementById(carouselId);
        const slides = document.querySelectorAll(`.${slideClass}`);
        const prevBtn = document.getElementById(prevBtnId);
        const nextBtn = document.getElementById(nextBtnId);

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
    }

    // Inicializa los dos carruseles
    setupCarousel("carousel-previo", "carousel-previo-slide", "prev-slide-previo", "next-slide-previo");
    setupCarousel("carousel-nueva", "carousel-nueva-slide", "prev-slide-nueva", "next-slide-nueva");
});
