document.addEventListener('DOMContentLoaded', function () {
    Fancybox.bind('[data-fancybox]', {
        animated: true,
        compact: false,
        idle: false,
        showClass: false,
        hideClass: false,
        dragToClose: false,
    });


    let hrefs = document.querySelectorAll('.menu__items a')
    hrefs.forEach(href => {
        href.addEventListener('click', (e) => {
            e.preventDefault();
            let id = e.target.getAttribute('href').slice(1)
            console.log(id);
            let scrollTarget = document.getElementById(id);
            let topOffset = 0;
            let elementPosition = scrollTarget.getBoundingClientRect().top;
            let offsetPosition = elementPosition - topOffset;
            if (mobile) {
                mobile.classList.remove('active')
                burger.classList.remove('active')
                document.body.style.overflow = "visible"
            }
            window.scrollBy({
                top: offsetPosition,
                behavior: 'smooth'
            });
        })
    });

    let servicesButtons = document.querySelectorAll('.services-card__button');
    let servicesInput = document.getElementById('service');
    let heroButton = document.querySelector('.hero__button');

    if (servicesButtons) {
        servicesButtons.forEach(servicesButton => {
            servicesButton.addEventListener('click', () => {
                servicesInput.value = servicesButton.parentNode.querySelector('.services-card__title').innerText
            })
        })
    }

    if (heroButton) {
        heroButton.addEventListener('click', () => {
            servicesInput.value = '';
        })
    }

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

// показ окошек с благодарностью после отправки форм
// показ окошек с благодарностью после отправки форм
let form = document.querySelectorAll('.wpcf7-form'),
    thanksModal = document.querySelector('.thanks'),
    thanksModalClose = document.querySelector('.thanks__close');

form.forEach(item => {
    item.addEventListener('wpcf7mailsent', function (event) {
        Fancybox.close();
        thanksModal.classList.add('thanks--active');
        setTimeout(function () {
            thanksModal.classList.remove('thanks--active');
        }, 2500);
    }, false);
});

thanksModalClose.addEventListener('click', ()=>{
    thanksModal.classList.remove('thanks--active');
})



let phoneInputs = document.querySelectorAll('input[type="tel"]');

if (phoneInputs) {
    phoneInputs.forEach(item => {
        item.setAttribute('onkeypress', 'maskPhone(event)');
        item.setAttribute('onpaste', 'onPastePhone(event)');
    });
}

function maskPhone(e) {
    const mask = /\+7 \(\d{3}\) \d{3} \d{2} \d{2}/;
    var valSize = e.target.value.trim().replace(/\D/g, "").length;
    e = e || window.event;
    var key = e.keyCode || e.which;
    key = String.fromCharCode(key);
    var regex = /[0-9]|\+/;
    if (!regex.test(key)) {
        e.returnValue = false;
        if (e.preventDefault) e.preventDefault();
    } else {
        if (valSize !== 0 && key === "+") {
            e.returnValue = false;
            return;
        }
        if (valSize === 0) {
            if (key === "8" || key === "7") {
                e.target.value = "+7";
                e.returnValue = false;
            } else if (key === "9") {
                e.target.value = "+7 (9";
                e.returnValue = false;
            } else if (key !== "+") {
                e.target.value = "+7 (9";
            } else if (key === "+" && e.target.value === "+") {
                e.returnValue = false;
            }
        } else if (valSize === 1) {
            e.target.value = "+7 (9";
            if (key === "9") {
                e.returnValue = false;
            }
        } else if (valSize === 4) {
            if (e.target.value.slice(-1) === ")") {
                e.target.value = e.target.value.trim() + " ";
            } else if (e.target.value.slice(-1) === " ") {
                return;
            } else e.target.value = e.target.value.trim() + ") ";
        } else if (valSize === 7 || valSize === 9) {
            if (e.target.value.slice(-1) === " ") {
                return;
            } else e.target.value = e.target.value.trim() + " ";
        } else if (valSize === 11) {
            e.returnValue = false;
        }
    }
}

function onPastePhone(e) {
    e.preventDefault();
    const mask = /(7|8)(9\d{2})(\d{3})(\d{2})(\d{2})/;
    var phone = e.clipboardData.getData('text/plain').replace(/\D/g, "");
    if (!mask.test(phone)) {
        e.returnValue = false;
        return;
    }
    var matched = phone.match(mask);
    e.target.value = "+7 (" + matched[2] + ") " + matched[3] + " " + matched[4] + " " + matched[5];
    e.returnValue = false;
}
