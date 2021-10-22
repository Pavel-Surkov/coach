
'use strict';

const menu = document.querySelector('.menu');
const menuBtn = document.querySelector('.header__menu-button');

menuBtn.onclick = () => {
	if (menu) {
		menu.classList.toggle('menu_active');
		document.documentElement.classList.toggle('.is-locked');
	}
};
