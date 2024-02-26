import SmoothScroll from 'smooth-scroll';
const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1200,
  easing: 'easeInOutCubic',
  offset: 300,
});

