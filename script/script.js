const toggle = document.querySelector('.head-toogle');
const menu = document.querySelector('.head-menu');
const head = document.querySelector('.head');

toggle.onclick = () => {
  menu.classList.toggle('active');
  toggle.classList.toggle('active');
  head.classList.toggle('active');
};

window.onscroll = () => {
  head.classList.remove('active');
  menu.classList.remove('active');
  toggle.classList.remove('active');
};
