document.querySelectorAll(".menu-fechado").forEach(function(element) {
    element.addEventListener("click", () =>{
        document.querySelector(".menuOpcoes").classList.toggle("show-menu")
    })
})