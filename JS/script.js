//Evento cada vez que realicemos un Scroll para la aminacion de la barra
$(window).on("scroll", function () {

    if ($(".navbar").offset().top > 40) {
        $(".navbar").addClass("navbar-fixed");
        $(".go-top").show(); //Mostrar show
    } else {
        $("navbar").removeClass("navbar-fixed");
        $(".go-top").hide(); //ocultar
    }

    if ($(".navbar").offset().top == 0) {
        $(".navbar").addClass("navbar-fixedremove");

    } else {
        $(".navbar").removeClass("navbar-fixedremove");
    };

}
)

//implementacion de isotope

$(document).ready(function () {
    var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item'
    });

    $('#portfolio-filters li').on('click', function () {
        $("#portfolio-filters li").removeClass('filter-active');
        $(this).addClass('filter-active');

        portfolioIsotope.isotope({
            filter: $(this).data('filter')
        })
    });
});

//Inicializar plugin magnifigpopup
//modificacion

$('.popup-image').magnificPopup({
    type: 'image',
    colseOnContentClick: true,
    gallery: {
        enabled: true,
        navigateByImgClick: true
    }
});
