// PRELOADER CODE 
var overlay = document.getElementById("overlay");

window.addEventListener('load', function () {
    overlay.style.display = 'none';
})

// AOS.init({ offset: 300, duration: 800 }); AOS ANIMATION INITIALIZER
$(function () {
    AOS.init({ offset: 300, duration: 1000, easing: "ease-out-quad", once: 0 });
    window.addEventListener('load', AOS.refresh);
});

// NAVBAR COLLAPSE ON CLICK 
$(document).on("click", ".navbar-collapse", function (e) {
    if ($(e.target).is("a")) {
        $(this).collapse("hide");
    }
});