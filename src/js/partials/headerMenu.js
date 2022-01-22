function headerMenu() {
  const burger = document.querySelector('.burger'),
    nav = document.querySelector('.header-nav');

  burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    nav.classList.toggle('active');
    document.body.classList.toggle('no-scroll');
  });

  nav.addEventListener('click', e => {
    if (e.target.tagName.toLowerCase() === 'a') {
      burger.classList.remove('active');
      nav.classList.remove('active');
      document.body.classList.remove('no-scroll');
    }
  });
}
