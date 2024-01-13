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

$("#navbarNav").on('show.bs.collapse', function () {
    $(".navbar").addClass("navbar-fixed");
    $('a.nav-link, a.btn-custom').click(function () {
        $("#navbarNav").collapse('hide');
    });
});


//descargar una imagen por id de la misma en html


function descargarImagen() {
    //  referencia a la imagen
    var imagen = document.getElementById('IDIMG');

    //elemento "a" para el enlace de descarga
    var enlaceDescarga = document.createElement('a');

    // enlace de descarga con la URL de la imagen
    enlaceDescarga.href = imagen.src;

    // Asigna un nombre de archivo para la descarga (puedes cambiarlo según tus necesidades)
    enlaceDescarga.download = 'CV_AlexNocua.png';

    // Simula un clic en el enlace para iniciar la descarga
    enlaceDescarga.click();
}

function toggleAccordion(sectionId) {
    var section = document.getElementById(sectionId);
    var accordionItem = section.parentElement;

    if (accordionItem.classList.contains('active')) {
        accordionItem.classList.remove('active');
    } else {
        accordionItem.classList.add('active');
    }
}


function aplicarStyle1() {
    // Aplicar el primer estilo (rotación)
    var icono = document.getElementById('icono');
    icono.style.transform = "rotate(0deg)";
  }

  function aplicarStyle2() {
    // Aplicar el segundo estilo (volver al estado original)
    var icono = document.getElementById('icono');
    icono.style.transform = "rotate(180deg)";
  }
