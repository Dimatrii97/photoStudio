let circle = document.querySelector('.circle__white');
let spans = document.querySelector('.circle__list');
let container = document.querySelector('.main__container');
let userBox = document.querySelector('.user__box');
let spanMaps = [{
    offset: 1256,
    bg: "./img/img-1.jpg",
    top: 100
  },
  {
    offset: 1004,
    bg: "./img/img-2.jpg",
    top: -350
  },
  {
    offset: 753,
    bg: "./img/img-3.jpg",
    top: -800
  },
  {
    offset: 502,
    bg: "./img/img-4.jpg",
    top: -1250
  },
  {
    offset: 251,
    bg: "./img/img-5.jpg",
    top: -1700
  },
  
];

spans.addEventListener('click', function (e) {
  circle.style.strokeDashoffset = spanMaps[e.target.dataset.span].offset;
  container.style.backgroundImage = `url(${spanMaps[e.target.dataset.span].bg})`
  userBox.style.top = spanMaps[e.target.dataset.span].top+'px'
});