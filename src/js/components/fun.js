const heroBtn = document.querySelector('.hero__btn')
heroBtn.addEventListener('click', function () {
  let heroText = document.querySelector('.hero__text')
  heroText.classList.add('hero__text--active')
  heroBtn.classList.add('hero__btn--active')
});
