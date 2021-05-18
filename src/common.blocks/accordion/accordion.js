const DESKTOP_WIDTH = 1440;
const accordions = document.querySelectorAll('.accordion');
const accordionTriggers = document.querySelectorAll('.accordion__trigger');
const accordionItems = document.querySelectorAll('.accordion__item');
let isInit = false;

function onAccordionTrigger() {
  const currentAccordionTrigger = this;
  const currentAccordionItem = currentAccordionTrigger.parentNode;
  const currentAccordionContent = currentAccordionTrigger.nextElementSibling;

  if (currentAccordionItem.dataset.open === 'false') {
    currentAccordionItem.dataset.open = 'true';
    currentAccordionItem.classList.add('accordion__item--show');
    currentAccordionContent.style.maxHeight = `${currentAccordionContent.scrollHeight}px`;
  } else {
    currentAccordionItem.dataset.open = 'false';
    currentAccordionItem.classList.remove('accordion__item--show');
    currentAccordionContent.style.maxHeight = null;
  }
}


function accordionsInit() {
  if (!isInit) {
    isInit = true;

    accordions.forEach((item) => {
      item.classList.add('accordion--active');
    });

    accordionTriggers.forEach((trigger) => {
      trigger.addEventListener('click', onAccordionTrigger);
    });

    accordionItems.forEach((item) => {
      if (item.dataset.open === 'true') {
        item.classList.add('accordion__item--show');
      }
    });
  }
}

function accordionsDestroy() {
  if (isInit) {
    isInit = false;

    accordions.forEach((item) => {
      item.classList.remove('accordion--active');
    });

    accordionTriggers.forEach((trigger) => {
      trigger.classList.remove('accordion__trigger--active');
      trigger.removeEventListener('click', onAccordionTrigger);
    });
  }
}

document.addEventListener('DOMContentLoaded', () => {
  if (window.innerWidth < DESKTOP_WIDTH) {
    accordionsInit();
  }
});

window.addEventListener('resize', () => {
  if (window.innerWidth < DESKTOP_WIDTH) {
    accordionsInit();
  }

  if (window.innerWidth >= DESKTOP_WIDTH) {
    accordionsDestroy();
  }
});
