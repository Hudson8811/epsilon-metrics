function forms() {
  const forms = document.querySelectorAll('.form'),
    emptyGroup = document.createElement('div');

  emptyGroup.classList.add('form__group', 'empty');

  forms.forEach(item => {
    // item.addEventListener('click', e => {
    //   const selects = item.querySelectorAll('.form__select');

    //   if (e.target.tagName.toLowerCase() === 'select') {
    //     const parent = e.target.closest('.form__select');

    //     if (parent.classList.contains('active')) {
    //       parent.classList.remove('active');
    //     } else {
    //       parent.classList.add('active');
    //     }
    //   } else {
    //     selects.forEach(item => item.classList.remove('active'));
    //   }
    // });

    if (item.querySelectorAll('.form__group').length % 3 === 2) {
      item.querySelector('.form-wrapper').appendChild(emptyGroup);
    }
  });
}
