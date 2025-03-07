import "./navbar.js";
import "./cv.js";
import "./carousel.js";

document.addEventListener("DOMContentLoaded", function () {
    document.body.classList.add("loaded");

    document.querySelectorAll("a").forEach(link => {
        if (link.hostname === window.location.hostname) {
            link.addEventListener("click", function (event) {
                event.preventDefault();
                const href = this.href;
                document.body.classList.remove("loaded");
                setTimeout(() => {
                    window.location.href = href;
                }, 200);
            });
        }
    });
});
