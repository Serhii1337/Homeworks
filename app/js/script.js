$('.js-slider').slick({
  slidesToShow: 1.5,
  slidesToScroll: 1,
  infinite: false,
  arrows: false,
});

$('.js-slider-man').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  infinite: false,
  arrows: false,
  dots: true,
  dotsClass: 'slider-man__dots',
});

document.addEventListener('DOMContentLoaded', function () {
  const header = document.querySelector('.header');
  const btn = document.querySelector('.header__btn');
  const menuList = document.querySelector('.header__list');
  let scrollPosition = 0;

  btn.addEventListener('click', function (e) {
    e.stopPropagation();

    if (!header.classList.contains('active')) {
      scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
      document.body.style.top = `-${scrollPosition}px`;
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
      document.body.classList.add('menu-open');
    } else {
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      window.scrollTo(0, scrollPosition);
      document.body.classList.remove('menu-open');
    }

    header.classList.toggle('active');
  });
  document.addEventListener('click', function (e) {
    const isClickInside = header.contains(e.target);
    if (!isClickInside && header.classList.contains('active')) {
      header.classList.remove('active');
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      window.scrollTo(0, scrollPosition);
      document.body.classList.remove('menu-open');
    }
  });
  menuList.addEventListener('click', function (e) {
    e.stopPropagation();
  });
});