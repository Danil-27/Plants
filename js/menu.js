const html = document.querySelector('html');
const burger = document.querySelector('.burger');
const navbar = document.querySelector('.navbar');
const links = document.querySelectorAll('.menu__link');

burger.addEventListener('click', toggleNavbar);

links.forEach(link => {
	link.addEventListener('click', toggleNavbar);
});

function toggleNavbar() {
	if (burger.classList.contains('burger')) {
		burger.classList.toggle('burger-active');
		navbar.classList.toggle('navbar-active');
		html.classList.toggle('noscroll');
	}
}
