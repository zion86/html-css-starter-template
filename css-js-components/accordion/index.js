'use strict';

const accordion = () => {
  const accordionListElem = document.querySelector('.accordion-list');
  const accordionListItemElems = document.querySelectorAll('.accordion-list__item');

  const open = (btn, content) => {
    closeAll();
    btn.classList.add('accordion-list__btn--active');
    content.classList.add('accordion-list__content--active');
    content.style.height = `${content.scrollHeight}px`;
  };

  const close = (btn, content) => {
    btn.classList.remove('accordion-list__btn--active');
    content.classList.remove('accordion-list__content--active');
    content.style.height = '';
  };

  const closeAll = () => {
    accordionListItemElems.forEach((item) => {
      close(item.children[0], item.children[1]);
    });
  };

  accordionListElem.addEventListener('click', (event) => {
    const { target } = event;

    if (target.closest('.accordion-list__btn')) {
      const parent = target.parentElement;
      const btn = parent.querySelector('.accordion-list__btn');
      const content = parent.querySelector('.accordion-list__content');

      btn.classList.contains('accordion-list__btn--active')
        ? close(btn, content)
        : open(btn, content);
    }
  });

  document.addEventListener('click', (event) => {
    const { target } = event;

    if (!target.closest('.accordion-list__btn') && !target.closest('.accordion-list__content')) {
      closeAll();
    }
  });

  window.addEventListener('resize', () => {
    const activeBtn = document.querySelector('.accordion-list__btn--active');

    if (activeBtn) {
      closeAll();
    }
  });
};

accordion();