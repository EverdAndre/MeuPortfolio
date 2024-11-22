document.querySelectorAll(".Close-menu").forEach(function(element) {
    element.addEventListener("click", () => {
        document.querySelector(".container").classList.toggle("show-menu");
    });
});
