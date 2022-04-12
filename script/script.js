const hamburger = document.querySelector('.ham');

function openCloseMenu() {
  hamburger.classList.toggle('change');
}

hamburger.addEventListener('click', openCloseMenu);
