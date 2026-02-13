/**
 * RepairPro - Electronics Repair Service Template
 * Main JS File (Vanilla JS Version)
 */

(function () {
    "use strict";

    /**
     * Preloader
     */
    const preloader = document.querySelector('#preloader');
    if (preloader) {
        window.addEventListener('load', () => {
            setTimeout(() => {
                preloader.style.opacity = '0';
                preloader.style.transition = 'opacity 0.5s ease-out';
                setTimeout(() => {
                    preloader.remove();
                }, 500);
            }, 500);
        });
    }

    /**
     * Sticky Header & Scroll Top
     */
    const selectHeader = document.querySelector('.navbar');
    const scrollTop = document.querySelector('.scroll-top');

    if (selectHeader) {
        document.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                selectHeader.classList.add('header-sticky');
            } else {
                selectHeader.classList.remove('header-sticky');
            }
        });
    }

    /* Scroll Top Button Logic */
    if (scrollTop) {
        const toggleScrollTop = () => {
            if (window.scrollY > 100) {
                scrollTop.classList.add('active');
            } else {
                scrollTop.classList.remove('active');
            }
        };

        window.addEventListener('load', toggleScrollTop);
        document.addEventListener('scroll', toggleScrollTop);

        scrollTop.addEventListener('click', (e) => {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    /**
     * Animation on scroll function and init
     */
    function aosInit() {
        if (typeof AOS !== 'undefined') {
            AOS.init({
                duration: 1000,
                once: true,
                mirror: false
            });
        }
    }
    window.addEventListener('load', aosInit);

    /**
     * Hero Swiper
     */
    const heroSwiperElement = document.querySelector('.hero-slider .swiper');
    if (heroSwiperElement && typeof Swiper !== 'undefined') {
        new Swiper(heroSwiperElement, {
            loop: true,
            speed: 1000,
            autoplay: {
                delay: 5000,
                disableOnInteraction: false,
            },
            effect: 'fade',
            fadeEffect: {
                crossFade: true
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });
    }

})();
