//Evento cada vez que realicemos un Scroll para la aminacion de la barra
$(window).on("scroll", function () {

    if ($(".navbar").offset().top > 40) {
        $(".navbar").addClass("navbar-fixed");

    } else {
        $("navbar").removeClass("navbar-fixed");

    }

    if ($(".navbar").offset().top == 0) {
        $(".navbar").addClass("navbar-fixedremove");

    } else {
        $(".navbar").removeClass("navbar-fixedremove");
    }

}
)
