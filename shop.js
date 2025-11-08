const main = document.querySelector('.main');

let add = document.querySelector('.add')

let price = document.querySelector('.price')

let img = document.querySelector('.img')

let name = document.querySelector('.name')

add.addEventListener('click', function(){
    main.innerHTML += ` <div class="card">
            <div class="top">
                <img src="${img.value}" alt="">
            </div>
            <div class="bottom">
                <p class="name">${name.value}</p>
                <p class="price">UAH ${price.value}</p>
                <p class="raiting">Raiting: 4.5/5</p>
                <button class="buy-btn"><i class='bx bx-cart-add'></i></button>
            </div>
        </div>
`
})


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
        alertify.success('Added to cart successfully!');
        btn.innerHTML = `<i class='bx bx-check'></i>`
        btn.classList.add("clicked");
    });
});