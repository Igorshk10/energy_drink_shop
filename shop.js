const products = document.querySelector('.products');

let show = document.querySelector('.show-add-btn')
let form = document.querySelector('.add-form')
let add = document.querySelector('.add')

let priceI = document.querySelector('.price-input')
let imgI = document.querySelector('.img-input')
let nameI = document.querySelector('.name-input')

add.addEventListener('click', function(){
    if(!priceI.value || !imgI.value || !nameI.value){
        alertify.error('Please fill in all fields!');
        return;
    }
    products.innerHTML += ` <div class="card">
            <div class="top">
                <img class="product-img" src="${imgI.value}" alt="">
            </div>
            <div class="bottom">
                <p class="name">${nameI.value}</p>
                <p class="price">UAH ${priceI.value}</p>
                <p class="raiting">Raiting: 4.5/5</p>
                <button class="buy-btn"><i class='bx bx-cart-add'></i></button>
            </div>
        </div>
`
    priceI.value = ''
    imgI.value = ''
    nameI.value = ''
    alertify.success('Product successfully added!');
    form.classList.remove('visible');
})


data.forEach( (e) => {
    let cart = JSON.parse(sessionStorage.getItem('cart')) || [];

    if(cart.find(item => item.title === e.name)){
            products.innerHTML += ` <div class="card">
            <div class="top">
                <img class="product-img" src="${e.url_img}" alt="">
            </div>
            <div class="bottom">
                <p class="name">${e.name}</p>
                <p class="price">${e.currency} ${e.price}</p>
                <p class="raiting">Raiting: ${e.rating}/5</p>
                <button class="buy-btn clicked"><i class='bx bx-check'></i></button>
            </div>
        </div>
`
    } else {
    products.innerHTML += ` <div class="card">
            <div class="top">
                <img class="product-img" src="${e.url_img}" alt="">
            </div>
            <div class="bottom">
                <p class="name">${e.name}</p>
                <p class="price">${e.currency} ${e.price}</p>
                <p class="raiting">Raiting: ${e.rating}/5</p>
                <button class="buy-btn"><i class='bx bx-cart-add'></i></button>
            </div>
        </div>
`
    }


})

show.addEventListener('click', function(){
    form.classList.toggle('visible');
})

products.addEventListener('click', e => {
    const btn = e.target.closest('.buy-btn');
    if (!btn) return; 
    alertify.success('Added to cart successfully!');
    btn.innerHTML = `<i class='bx bx-check'></i>`;
    btn.classList.add("clicked");

    const product = btn.closest('.card');

    const titleProduct = product.querySelector('.name').textContent;
    const priceProduct = product.querySelector('.price').textContent;
    const imgProduct = product.querySelector('.product-img');
    const imgUrlProduct = imgProduct.getAttribute('src');


    let cart = JSON.parse(sessionStorage.getItem('cart')) || [];

    function generateId() {
    return crypto.randomUUID();
    }

    cart.push({
        id: generateId(),
        title: titleProduct,
        price: priceProduct,
        imgUrl: imgUrlProduct
    });

    sessionStorage.setItem('cart', JSON.stringify(cart));
});