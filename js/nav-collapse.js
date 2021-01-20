$(document).ready(() => {
    let isOpen = false;
    $("#menu-toggler").click(() =>{
        if (isOpen) {
            $(".small-screen-nav").css("transform", "translateY(-130%)");
            $("#menu-toggler").removeClass("menu-active")
            isOpen = !isOpen;
            var html = jQuery('html');
            var scrollPosition = html.data('scroll-position');
            html.css('overflow', html.data('previous-overflow'));
            window.scrollTo(scrollPosition[0], scrollPosition[1])
        } else {
            $(".small-screen-nav").css("transform", "translateY(0%)");
            $("#menu-toggler").addClass("menu-active")
            isOpen = !isOpen;
            var scrollPosition = [
                self.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft,
                self.pageYOffset || document.documentElement.scrollTop  || document.body.scrollTop
              ];
              var html = jQuery('html'); // it would make more sense to apply this to body, but IE7 won't have that
              html.data('scroll-position', scrollPosition);
              html.data('previous-overflow', html.css('overflow'));
              html.css('overflow', 'hidden');
              window.scrollTo(scrollPosition[0], scrollPosition[1]);
        }
    })
    $(window).on("resize", () => {
        if ($(window).width() > 768){
            $(".small-screen-nav").css("transform", "translateY(-130%)");
            isOpen = false;
            var html = jQuery('html');
var scrollPosition = html.data('scroll-position');
html.css('overflow', html.data('previous-overflow'));
window.scrollTo(scrollPosition[0], scrollPosition[1])
        }
    })
})