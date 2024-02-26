document.addEventListener('DOMContentLoaded', () => {
  const item = document.querySelectorAll(".facts__box")
  item.forEach(el => {
    el.addEventListener('click', (e) => {
      const self = e.currentTarget;
      const btn = self.querySelector(".facts__btn")
      const text = self.querySelector(".facts__text--acardion")
      text.classList.toggle('facts__text--active')
      btn.classList.toggle('facts__btn--active')

      if (text.classList.contains('facts__text--active')) {
        text.style.maxHeight = text.scrollHeight + 'px';
      } else {
        text.style.maxHeight = null;
      }

      if (btn.classList.contains('facts__btn--active')) {
        btn.textContent = 'Скрыть описание';
      } else {
        btn.textContent = 'Читать описание';


      }

    });
  });



});
