document.addEventListener('DOMContentLoaded', function () {
    Fancybox.bind('[data-fancybox]', {
        animated: true,
        compact: false,
        idle: false,
        showClass: false,
        hideClass: false,
        dragToClose: false,
    });

    let galleryImgs = [];
    let imgs = document.querySelectorAll('.contacts__certificate');

    imgs.forEach(img => {
        let src = img.getAttribute('src');
        let item = {src: src}
        galleryImgs.push(item);
    });

    let certificatesBtn = document.querySelector('.contacts__notice');

    certificatesBtn.addEventListener('click', (e) => {
        e.preventDefault();
        Fancybox.show(galleryImgs, {});
    })

    let burger = document.querySelector('.hamburger');
    let mobile = document.querySelector('.mobile');
    burger.addEventListener('click', () => {
        if (burger.classList.contains('active')) {
            burger.classList.remove('active');
            mobile.classList.remove('active');
            document.body.style.overflow = "visible";
        } else {
            burger.classList.add('active');
            mobile.classList.add('active');
            document.body.style.overflow = "hidden";
        }
    });

    if (window.innerWidth < 993) {
        const servicesSlider = new Swiper('.services-cards', {
            slidesPerView: 3,
            grid: {
                rows: 2,
                fill: "row",
            },
            spaceBetween: 10,
            pagination: {
                el: '.services-cards__pagination',
                clickable: true
            },
            navigation: {
                nextEl: '.services-cards__arrow--next',
                prevEl: '.services-cards__arrow--prev',
            },
            breakpoints: {
                300: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                    grid: {
                        rows: 2,
                        fill: "row"
                    },
                },
                576: {
                    slidesPerView: 2,
                    grid: {
                        rows: 2,
                        fill: "row"
                    },
                },
                768: {
                    slidesPerView: 3,
                    grid: {
                        rows: 2,
                        fill: "row"
                    },
                },
            }
        });
    }
    const partnersSlider = new Swiper('.partners-slider', {
        slidesPerView: 'auto',
        spaceBetween: 80,
        loop: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.partners-slider__pagination',
            clickable: true
        },
        navigation: {
            nextEl: '.partners-slider__arrow--next',
            prevEl: '.partners-slider__arrow--prev',
        },
        breakpoints: {
            300: {
                spaceBetween: 50,
            },
            992: {
                spaceBetween: 80,
            },
        }
    });
    if (window.innerWidth < 769) {
        const diplomasSlider = new Swiper('.diplomas-slider', {
            slidesPerView: 'auto',
            spaceBetween: 10,
            pagination: {
                el: '.diplomas-slider__pagination',
                clickable: true
            },
            navigation: {
                nextEl: '.diplomas-slider__arrow--next',
                prevEl: '.diplomas-slider__arrow--prev',
            },
        });
    }

    const portfolioSlider = new Swiper('.portfolio-slider', {
        slidesPerView: 3,
        grid: {
            rows: 3,
            fill: "row",
        },
        spaceBetween: 20,
        pagination: {
            el: '.portfolio-slider__pagination',
            clickable: true
        },
        navigation: {
            nextEl: '.portfolio-slider__arrow--next',
            prevEl: '.portfolio-slider__arrow--prev',
        },
        breakpoints: {
            300: {
                slidesPerView: 1,
                spaceBetween: 10,
                grid: {
                    rows: 3,
                    fill: "row"
                },
            },
            576: {
                slidesPerView: 2,
                grid: {
                    rows: 3,
                    fill: "row"
                },
            },
            769: {
                slidesPerView: 3,
                grid: {
                    rows: 3,
                    fill: "row"
                },
            },
        }
    });

    let galleries = document.querySelectorAll('.popup-slider');

    if (galleries) {
        galleries.forEach(gallery => {
            let galleryThumbs = gallery.parentNode.parentNode.querySelector('.portfolio-popup__thumbs').querySelector('.popup-thumbs')

            let sliderThumbs = new Swiper(galleryThumbs, {
                loop: false,
                spaceBetween: 20,
                slidesPerView: 'auto',
                navigation: {
                    nextEl: ".popup-thumbs__arrow--next",
                    prevEl: ".popup-thumbs__arrow--prev",
                },
            });
            let slider = new Swiper(gallery, {
                loop: false,
                spaceBetween: 10,
                navigation: {
                    nextEl: ".popup-thumbs__arrow--next",
                    prevEl: ".popup-thumbs__arrow--prev",
                },
                thumbs: {
                    swiper: sliderThumbs,
                },
            });
        })
    }
});
