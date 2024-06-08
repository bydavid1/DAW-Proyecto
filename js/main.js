(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();


    // Initiate the wowjs
    new WOW().init();


    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 1500, 'easeInOutExpo');
        return false;
    });


    // Team carousel
    $(".team-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        center: false,
        dots: false,
        loop: true,
        margin: 50,
        nav: true,
        navText: [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            }
        }
    });


    // Testimonial carousel

    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        center: true,
        dots: true,
        loop: true,
        margin: 0,
        nav: true,
        navText: false,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            }
        }
    });


    // Fact Counter

    $(document).ready(function () {
        $('.counter-value').each(function () {
            $(this).prop('Counter', 0).animate({
                Counter: $(this).text()
            }, {
                duration: 2000,
                easing: 'easeInQuad',
                step: function (now) {
                    $(this).text(Math.ceil(now));
                }
            });
        });
    });


    // Iniciar servicio de emailjs
    emailjs.init({
        publicKey: "Wqu8VbmDTQF_TE95E",
    });

})(jQuery);

function sendEmail() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // validar campos
    if (name === "" || email === "" || message === "") {
        alert("Por favor, llena todos los campos.")
        return;
    }
    console.log("sendEmail")

    emailjs.send("service_5ubet2j", "template_8i2bxxf", {
        from_name: name,
        from_email: email,
        message: message,
    }).then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        alert("Mensaje enviado correctamente.")
        clearForm();
    }, ).catch((error) => {
        console.log('FAILED...', error);
        alert("Ocurrió un error al enviar el mensaje.")
    });
}

function clearForm() {
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";
}