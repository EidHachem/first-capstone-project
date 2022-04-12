const openMenu = document.querySelector('.mobile-menu');

function OpenCloseMenu() {
  openMenu.classList.toggle('.show-menu');
}

openMenu.addEventListener('click', OpenCloseMenu);
