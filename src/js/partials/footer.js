function footer() {
  const MAX = 6,
    SIZES = {
      'sm': 767,
      'lg': 1279,
    };

  const sections = document.querySelectorAll('.footer-nav__section'),
    longSections = [];

  const setGridPosition = item => {
    // console.log(window.getComputedStyle(item).gridRowEnd);
    item.style.cssText = `
      grid-row: ${+item.dataset.row} / ${+item.dataset.row + 2};
      grid-column: ${+item.dataset.column} / ${+item.dataset.column + 1};
    `;
  };

  sections.forEach(item => {
    const list = item.querySelectorAll('.footer-nav__item');

    if (list.length > MAX) {
      longSections.push(item);
      setGridPosition(item);
    }
  });

  // window.addEventListener('resize', () => {
  //   if (window.matchMedia(`(max-width: ${SIZES.sm}px)`).matches) {
  //     console.log('sm');
  //   }
  // });
}
