const plateClose = document.querySelector('.plate-сlose');
const plates = document.querySelectorAll('.plate');
const selectors = document.querySelectorAll('.selector');

selectors.forEach((selector, index) => {
	selector.addEventListener('click', () => {
		selectors.forEach(selectorRemove => {
			selectorRemove.classList.remove('selector-active');
		});
		selector.classList.add('selector-active');
		plates.forEach(plateRemove => {
			plateRemove.classList.remove('active-plate');
		});
		plates[index].classList.add('active-plate');
	});
});

plateClose.addEventListener('click', () => {
	plates.forEach(plate => {
		plate.classList.remove('active-plate');
	});
	selectors.forEach(selectorRemove => {
		selectorRemove.classList.remove('selector-active');
	});
});
