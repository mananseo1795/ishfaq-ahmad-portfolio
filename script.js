document.addEventListener("DOMContentLoaded", function () {

    console.log("Portfolio Website Loaded Successfully");

    const button = document.querySelector(".btn");

    if (button) {
        button.addEventListener("mouseover", function () {
            button.style.transform = "scale(1.05)";
            button.style.transition = "0.3s";
        });

        button.addEventListener("mouseout", function () {
            button.style.transform = "scale(1)";
        });
    }

});
