$(document).ready(() => {
    let isOpen = false;
    $("#menu-toggler").click(() =>{
        if (isOpen) {
            $(".small-screen-nav").css("transform", "translateY(-130%)");
            $("#menu-toggler").removeClass("menu-active")
            isOpen = !isOpen;
        } else {
            $(".small-screen-nav").css("transform", "translateY(0%)");
            $("#menu-toggler").addClass("menu-active")
            isOpen = !isOpen;
        }
    })
    $(window).on("resize", () => {
        if ($(window).width() > 768){
            $(".small-screen-nav").css("transform", "translateY(-130%)");
            isOpen = false;
        }
    })
})