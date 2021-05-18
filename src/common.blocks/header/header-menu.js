const ESC_KEYCODE = 27;
const menu = document.querySelector('.header__menu');
const menuToggle = document.querySelector('.header__open-btn');
const menuClose = document.querySelector('.header__close-btn');

function onEscPress(evt) {
  if (evt.keyCode === ESC_KEYCODE) {
    menu.classList.remove('header__menu--open');
    if (document.querySelector('body').classList.contains('lock')) {
      document.querySelector('body').classList.remove('lock');
    }

    document.removeEventListener('keydown', onEscPress);
  }
}

function openMenu() {
  menu.classList.add('header__menu--open');
  if (!document.querySelector('body').classList.contains('lock')) {
    document.querySelector('body').classList.add('lock');
  }
  menu.scrollTop = 0;

  document.addEventListener('keydown', onEscPress);
}

function closeMenu() {
  menu.classList.remove('header__menu--open');
  if (document.querySelector('body').classList.contains('lock')) {
    document.querySelector('body').classList.remove('lock');
  }
  document.removeEventListener('keydown', onEscPress);
}

function onMenuToggle() {
  openMenu();
}

function onMenuClose() {
  closeMenu();
}

menuToggle.addEventListener('click', onMenuToggle);
menuClose.addEventListener('click', onMenuClose);
