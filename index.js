const main = document.querySelector('.main');


data.forEach( (e) => {
    main.innerHTML += ` <div class="card">
            <div class="top">
                <img src="${e.url_img}" alt="">
            </div>
            <div class="bottom">
                <p class="name">${e.name}</p>
                <p class="price">${e.currency} ${e.price}</p>
                <p class="raiting">Raiting: ${e.rating}/5</p>
                <button class="buy-btn"><i class='bx bx-cart-add'></i></button>
            </div>
        </div>
`
})

const buttons = document.querySelectorAll('.buy-btn');


buttons.forEach(btn => {
    btn.addEventListener('click', () => {
        alertify.success('Товар додано до кошика');
        btn.innerHTML = `<i class='bx bx-check'></i>`
        btn.classList.add("clicked");
    });
});