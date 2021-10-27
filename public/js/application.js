
'use strict';

// Menu
const menu = document.querySelector('.menu');
const header = document.querySelector('.header');
const menuBtn = document.querySelector('.header__menu-button');

menuBtn.onclick = () => {
	if (menu) {
		menu.classList.toggle('menu_active');
		menuBtn.classList.toggle('btn_close');
		document.documentElement.classList.toggle('is-locked');
	}
	if (header) {
		setTimeout(() => header.classList.toggle('header_positioned'), 100);
	}
};

// FAQ accordeon
const accordeon = document.querySelector('.faq-accordeon');

if (accordeon) {
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
}

// Submit modal events

document.addEventListener('click', (evt) => {
	const modalId = evt.target.dataset.modal;

	if (modalId === '#contact-modal') {
		const modal = document.querySelector(modalId);
		const blocker = document.querySelector('.blocker');

		if (modal && blocker) {
			evt.preventDefault();

			modal.classList.add('modal_active');
			blocker.classList.add('current');
		}
	}
	if (modalId === '#subscribe-modal') {
		const modal = document.querySelector(modalId);
		const blocker = document.querySelector('.blocker');

		if (modal && blocker) {
			evt.preventDefault();

			modal.classList.add('modal_active');
			blocker.classList.add('current');
		}
	}
	if (modalId === '#free-modal') {
		return;
	}
});

// Close modal
const closeBtns = Array.from(document.querySelectorAll('.close'));

if (closeBtns) {
	closeBtns.forEach((btn) => {
		btn.onclick = () => {
			const modal = btn.closest('.modal');
			const blocker = document.querySelector('.blocker');

			if (modal && blocker) {
				modal.classList.remove('modal_active');
				blocker.classList.remove('current');
			}
		};
	});
}
