
'use strict';

// Menu
const menu = document.querySelector('.menu');
const menuBtn = document.querySelector('.header__menu-button');

menuBtn.onclick = () => {
	if (menu) {
		menu.classList.toggle('menu_active');
		document.documentElement.classList.toggle('is-locked');
	}
};

// FAQ accordeon
const accordeon = document.querySelector('.faq-accordeon');

accordeon.addEventListener('click', (evt) => {
	const target = evt.target;
	const accordeonBtn = target.closest('.faq-accordeon__title');

	if (accordeonBtn) {
		const faqText = accordeonBtn.nextElementSibling;

		if (faqText) {
			accordeonBtn.classList.toggle('faq-accordeon__title_active');
			faqText.classList.toggle('faq-accordeon__text_opened');
		}
	}
});
