document.addEventListener("DOMContentLoaded", function () {
    const currentPath = window.location.pathname;

    document.querySelectorAll(".nav-link").forEach(link => {
        if (currentPath.includes(link.dataset.active)) {
            link.classList.add("text-accent", "underline", "font-bold");
        }
    });

    const dropdownBtn = document.getElementById("dropdown-btn");
    const dropdownMenu = document.getElementById("dropdown-menu");

    if (dropdownBtn && dropdownMenu) {
        dropdownBtn.addEventListener("click", function (event) {
            event.stopPropagation();
            dropdownMenu.classList.toggle("hidden");
        });

        document.addEventListener("click", function (event) {
            if (!dropdownBtn.contains(event.target) && !dropdownMenu.contains(event.target)) {
                dropdownMenu.classList.add("hidden");
            }
        });

        dropdownMenu.querySelectorAll("a").forEach(link => {
            link.addEventListener("click", function () {
                dropdownMenu.classList.add("hidden");
            });
        });
    }
});
