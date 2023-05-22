document.addEventListener('DOMContentLoaded', function () {
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

// функция для модалки

    function calcScroll() {
        let div = document.createElement('div');

        div.style.width = '50px';
        div.style.height = '50px';
        div.style.overflowY = 'scroll';
        div.style.visibility = 'hidden';

        document.body.appendChild(div);
        let scarollWidth = div.offsetWidth - div.clientWidth;
        div.remove();

        return scarollWidth;
    }

    let scrollWidth = calcScroll();

    function modal(modal, modalActiveClass, triggers, modalClose) {
        const triggers_ = document.querySelectorAll(triggers),
            modal_ = document.querySelector(modal),
            modalClose_ = document.querySelector(modalClose);

        if (triggers_.length > 0) {
            triggers_.forEach(item => {
                item.addEventListener('click', () => {
                    modal_.classList.add(modalActiveClass);
                    document.body.style.overflow = 'hidden';
                    document.body.style.marginRight = `${scrollWidth}px`;
                });
            });

            modalClose_.addEventListener('click', () => {
                modal_.classList.remove(modalActiveClass);
                document.body.style.overflow = '';
                document.body.style.marginRight = '0px';
            });

            modal_.addEventListener('click', (e) => {
                if (e.target.classList.contains('modal__container')) {
                    modal_.classList.remove(modalActiveClass);
                    document.body.style.overflow = '';
                    document.body.style.marginRight = '0px';
                }
            });
        }
    }

    modal('.modal', 'modal--active', '[data-modal-auth]', '.modal__close');

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
});
