const closePopup = document.querySelector('.popup__close');
const btnPopup = document.getElementById('btn-popup');
const popup = document.getElementById('popup');

btnPopup.addEventListener('click', function () {
	popup.classList.add('popup-active');
	html.classList.add('noscroll-popup');
});
closePopup.addEventListener('click', function () {
	popup.classList.remove('popup-active');
	html.classList.remove('noscroll-popup');
});
