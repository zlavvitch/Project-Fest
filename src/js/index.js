'use strict';

import '../scss/style.scss';
import '../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
// import bootstrap from 'bootstrap';
// import '../../node_modules/bootstrap/js/dist/util.js';
// import '../../node_modules/bootstrap/js/dist/modal.js';

// const carousel = new bootstrap.Carousel('#myCarousel');

let myCarousel = document.querySelector('#myCarousel');
let carousel = new bootstrap.Carousel(myCarousel, {
  interval: 2000,
  wrap: false,
  visibleItems: 4,
  itemsToScroll: 1,
});
