(async function ($) {
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


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 45) {
            $('.navbar').addClass('sticky-top shadow-sm');
        } else {
            $('.navbar').removeClass('sticky-top shadow-sm');
        }
    });
    
    
    // Dropdown on mouse hover
    const $dropdown = $(".dropdown");
    const $dropdownToggle = $(".dropdown-toggle");
    const $dropdownMenu = $(".dropdown-menu");
    const showClass = "show";
    
    $(window).on("load resize", function() {
        if (this.matchMedia("(min-width: 992px)").matches) {
            $dropdown.hover(
            function() {
                const $this = $(this);
                $this.addClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "true");
                $this.find($dropdownMenu).addClass(showClass);
            },
            function() {
                const $this = $(this);
                $this.removeClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "false");
                $this.find($dropdownMenu).removeClass(showClass);
            }
            );
        } else {
            $dropdown.off("mouseenter mouseleave");
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        center: true,
        margin: 24,
        dots: true,
        loop: true,
        nav : false,
        responsive: {
            0:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });
    
    
})(jQuery);

const tourParentDiv = document.querySelector(".tour_parent")
    fetch("https://script.googleusercontent.com/macros/echo?user_content_key=AehSKLghlAg7IDywlehA_vtod9_bpCHI8wpu3eNDSw43fH_G7H2WAoISmDnSNkdAntmA4vnSD61-jd1j7DV6NMbssBlndWOFrTQ9m3HVCNlqs6YWVrike0JWXKdvF0o5sutvWkDLrYuGuVdhorEk2edNxzBY8lxTQGVIBnfA6KV88qkPtMtKk18zvH8N4YlFwv4fq5i0AQOTW_44Z-C0-Ho4WLtjrVKRs0wEscf-pN4bmc6MBJo6ZLWGP6mLwcf4_LyemqY9D0SrWZdW2HhTaekkMNH9Wd1jYw&lib=MEzPn6McDjeS6TPJ-uaAyToDf-NdZZQvd")
    .then(res=>res.json())
    .then(data=>{
        const database = data.data
        const filtereDatabase = database.filter(element=> element.City!=="")
        filtereDatabase.forEach(element => {
            const newDiv = document.createElement('div')
            newDiv.classList.add("col-lg-4", "col-md-6", "wow", "fadeInUp");
            newDiv.setAttribute("data-wow-delay", '0.1s')
            newDiv.innerHTML = `<div class="package-item">
                        <div class="overflow-hidden">
                            <img class="img-fluid" src="img/logo.png" alt="">
                        </div>
                        <div class="d-flex border-bottom">
                            <small class="flex-fill text-center border-end py-2"><i class="fa fa-map-marker-alt text-primary me-2"></i>${element.City}</small>
                            <small class="flex-fill text-center border-end py-2"><i class="fa fa-calendar-alt text-primary me-2"></i>${element.Days} дней</small>
                            <small class="flex-fill text-center py-2"><i class="fa fa-user text-primary me-2"></i>${element.Transport}</small>
                        </div>
                        <div class="text-center p-4">
                            <h3 class="mb-0">$${element.Cost}</h3>
                            
                            <p>${element.About} </p>
                            <div class="d-flex justify-content-center mb-2">
                                <a class="btn btn-outline-light btn-social btn-dark" style="border-radius:  30px 0 0 30px;" href="https://www.instagram.com/travel_mukhiba_?igsh=MTYzdWhtZTFjZXcyeA%3D%3D&utm_source=qr"><i class="fab fa-instagram"></i></a>
                                <a href="#" class="btn btn-sm btn-primary px-3 btn-dark" >Бронировать</a>
                                <a class="btn btn-outline-light btn-social btn-dark" style="border-radius: 0 30px 30px 0;" href="https://t.me/m_traveltour"><i class="fab fa-telegram"></i></a>
                            </div>
                        </div>
                    </div>`
            tourParentDiv.append(newDiv)
        });
        
    })