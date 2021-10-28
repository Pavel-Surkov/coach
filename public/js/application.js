
'use strict';

// functions
const triggerSubmitModal = (event, id) => {
	const modal = document.querySelector(id);
	const blocker = document.querySelector('.blocker');

	if (modal && blocker) {
		event.preventDefault();

		modal.classList.add('modal_active');
		blocker.classList.add('current');
		document.body.classList.add('locked');
	}
};

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

// Submit modal event
document.addEventListener('click', (evt) => {
	const modalId = evt.target.dataset.modal;

	if (modalId) {
		triggerSubmitModal(evt, modalId);
	}
});

// Coach modal event
document.addEventListener('click', (evt) => {
	const profileId = evt.target.dataset.profile;

	if (profileId) {
		triggerSubmitModal(evt, profileId);
	}
});

// Close modal
const closeBtns = Array.from(document.querySelectorAll('.close'));

document.addEventListener('click', (evt) => {
	const target = evt.target;
	const currentModal = document.querySelector('.modal_active');

	if (target.matches('.current.blocker') && currentModal) {
		const currentBlocker = document.querySelector('.blocker.current');

		currentModal.classList.remove('modal_active');
		currentBlocker.classList.remove('current');
		document.body.classList.remove('locked');
	} else {
		const closeBtn = evt.target.closest('.close');

		if (closeBtn) {
			const currentBlocker = document.querySelector('.blocker.current');

			currentModal.classList.remove('modal_active');
			currentBlocker.classList.remove('current');
			document.body.classList.remove('locked');
		}
	}
});

// if (closeBtns) {
// 	closeBtns.forEach((btn) => {
// 		btn.onclick = () => {
// 			const modal = btn.closest('.modal');
// 			const blocker = document.querySelector('.blocker');

// 			if (modal && blocker) {
// 				modal.classList.remove('modal_active');
// 				blocker.classList.remove('current');
// 				document.body.classList.remove('locked');
// 			}
// 		};
// 	});
// }
