const ESC_KEYCODE = 27;
const DELAY = 100;
const filter = document.querySelector('.main__filter');
const filterBody = document.querySelector('.main__filter-body');
const filterOpen = document.querySelector('.main__filter-open');
const filterClose = document.querySelector('.main__filter-close');

function onEscPress(evt) {
  if (evt.keyCode === ESC_KEYCODE) {
    filterBody.classList.remove('main__filter-body--active');
    setTimeout(() => {
      filter.classList.remove('main__filter--active');
    }, DELAY);

    if (document.querySelector('body').classList.contains('lock')) {
      document.querySelector('body').classList.remove('lock');
    }

    document.removeEventListener('keydown', onEscPress);
  }
}

function openFilter() {
  filter.classList.add('main__filter--active');
  setTimeout(() => {
    filterBody.classList.add('main__filter-body--active');
  }, DELAY);
  if (!document.querySelector('body').classList.contains('lock')) {
    document.querySelector('body').classList.add('lock');
  }

  filter.scrollTop = 0;

  document.addEventListener('keydown', onEscPress);
}

function closeFilter() {
  filterBody.classList.remove('main__filter-body--active');
  setTimeout(() => {
    filter.classList.remove('main__filter--active');
  }, DELAY);

  if (document.querySelector('body').classList.contains('lock')) {
    document.querySelector('body').classList.remove('lock');
  }

  document.removeEventListener('keydown', onEscPress);
}

function onFilter(evt) {
  if (!evt.target.closest('.filter__body')) {
    closeFilter();
  }
}

function onFilterClose() {
  closeFilter();
  filter.removeEventListener('click', onFilter);
}

function onFilterOpen() {
  openFilter();
  filter.addEventListener('click', onFilter);
}

filterOpen.addEventListener('click', onFilterOpen);
filterClose.addEventListener('click', onFilterClose);

