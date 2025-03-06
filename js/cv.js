document.addEventListener("DOMContentLoaded", function () {
    const downloadCVBtn = document.getElementById("download-cv");

    if (downloadCVBtn) {
        downloadCVBtn.addEventListener("click", function () {
            const cvUrl = "assets/pdf/OrianaInfante_CV.pdf";
            const link = document.createElement("a");
            link.href = cvUrl;
            link.download = "OrianaInfante_CV.pdf";
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        });
    }
});
