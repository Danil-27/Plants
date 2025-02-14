const gallery = document.getElementById('gallery');
const bthGardens = document.getElementById('button-gardens');
const bthLawn = document.getElementById('button-lawn');
const bthPlanting = document.getElementById('button-planting');
console.log(bthGardens, 'bthGardens');

bthGardens.addEventListener('click', () => {
	gallery.innerHTML = `
   <div class="gallery__item card">
                            <div class="wrapper-img">
                                <img src="./img/service/collection.jpg" alt="collection">
                            </div>
                            <div class="gallery__content">
                                <h2 class="text text_bold texy_medium-xs is-text-orange">Garden care</h2>
                                <p class="text text_smaill">Lorem Ipsum has been the industry</p>
                            </div>
                        </div>
                        <div class="gallery__item card">
                            <div class="wrapper-img">
                                <img src="./img/service/lemon.jpg" alt="lemon">
                            </div>
                            <div class="gallery__content">
                                <h2 class="text text_bold texy_medium-xs is-text-orange">Garden care</h2>
                                <p class="text text_smaill">Lorem Ipsum has been the industry Lorem Ipsum has been the industryLorem Ipsum has been the industryLorem Ipsum has been the industry</p>
                            </div>
                        </div>
                        <div class="gallery__item card">
                            <div class="wrapper-img">
                                <img src="./img/service/apple.jpg" alt="apple">
                            </div>
                            <div class="gallery__content">
                                <h2 class="text text_bold texy_medium-xs is-text-orange">Garden care</h2>
                                <p class="text text_smaill">Lorem Ipsum has been the industry</p>
                            </div>
                        </div>
                        <div class="gallery__item card">
                            <div class="wrapper-img">
                                <img src="./img/service/flowers.jpg" alt="flowers">
                            </div>
                            <div class="gallery__content">
                                <h2 class="text text_bold texy_medium-xs is-text-orange">Garden care</h2>
                                <p class="text text_smaill">Lorem Ipsum has been the industry</p>
                            </div>
                        </div>
                        <div class="gallery__item card">
                            <div class="wrapper-img">
                                <img src="./img/service/flowers_in_a_pot.jpg" alt="flowers in a pot">
                            </div>
                            <div class="gallery__content">
                                <h2 class="text text_bold texy_medium-xs is-text-orange">Garden care</h2>
                                <p class="text text_smaill">Lorem Ipsum has been the industry has been the industry Lorem Ipsum has been has been the industry Lorem Ipsum has been </p>
                            </div>
                        </div>
                        <div class="gallery__item card">
                            <div class="wrapper-img">
                                <img src="./img/service/to_plant.jpg" alt="to plant">
                            </div>
                            <div class="gallery__content">
                                <h2 class="text text_bold texy_medium-xs is-text-orange">Garden care</h2>
                                <p class="text text_smaill">Lorem Ipsum has been the industry</p>
                            </div>
                        </div>
`;
});
bthPlanting.addEventListener('click', () => {
	gallery.innerHTML = `
        <div class="gallery__item card">
            <div class="wrapper-img">
                <img src="./img/service/planting/planting_1.jpg" alt="collection">
            </div>
            <div class="gallery__content">
                <h2 class="text text_bold texy_medium-xs is-text-orange">Garden care</h2>
                <p class="text text_smaill">Lorem Ipsum has been the industry</p>
            </div>
        </div>
          <div class="gallery__item card">
            <div class="wrapper-img">
                <img src="./img/service/planting/planting_2.jpg" alt="collection">
            </div>
            <div class="gallery__content">
                <h2 class="text text_bold texy_medium-xs is-text-orange">Garden care</h2>
                <p class="text text_smaill">Lorem Ipsum has been the industry</p>
            </div>
        </div>
          <div class="gallery__item card">
            <div class="wrapper-img">
                <img src="./img/service/planting/planting_3.jpg" alt="collection">
            </div>
            <div class="gallery__content">
                <h2 class="text text_bold texy_medium-xs is-text-orange">Garden care</h2>
                <p class="text text_smaill">Lorem Ipsum has been the industry</p>
            </div>
        </div>
    `;
});

bthLawn.addEventListener('click', () => {
	gallery.innerHTML = `
        <div class="gallery__item card">
            <div class="wrapper-img">
                <img src="./img/service/lawn/lawn_1.png" alt="collection">
            </div>
            <div class="gallery__content">
                <h2 class="text text_bold texy_medium-xs is-text-orange">Garden care</h2>
                <p class="text text_smaill">Lorem Ipsum has been the industry</p>
            </div>
        </div>
        <div class="gallery__item card">
            <div class="wrapper-img">
                <img src="./img/service/lawn/lawn_2.jpg" alt="collection">
            </div>
            <div class="gallery__content">
                <h2 class="text text_bold texy_medium-xs is-text-orange">Garden care</h2>
                <p class="text text_smaill">Lorem Ipsum has been the industry</p>
            </div>
        </div>
        <div class="gallery__item card">
            <div class="wrapper-img">
                <img src="./img/service/lawn/lawn_3.jpg" alt="collection">
            </div>
            <div class="gallery__content">
                <h2 class="text text_bold texy_medium-xs is-text-orange">Garden care</h2>
                <p class="text text_smaill">Lorem Ipsum has been the industry</p>
            </div>
        </div>
    `;
});
