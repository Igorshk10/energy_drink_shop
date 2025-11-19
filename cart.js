let cart = JSON.parse(sessionStorage.getItem('cart')) || [];

const leftCart = document.querySelector(".left-cart");
const order = document.querySelector(".order-list");

cart.forEach((item) => { 
    leftCart.innerHTML += `<div id="${item.id}" class="cart-item">
        <div class="img-cart">
            <img id="img-item" src="${item.imgUrl}" alt="">
        </div>
        <div class="information">
            <p class="cart-name">${item.title}</p>
            <button type="submit" class="delete">delete</button>
        </div>
        <div class="cart-price">
            <p class="priceI">${item.price}</p>
            <div class="counter">
                <button class="btn minus">−</button>
                <span class="count">1</span>
                <button class="btn plus">+</button>
            </div>

        </div>
        </div>`
    order.innerHTML += `<li>${item.title}</li>`;
})



leftCart.addEventListener('click', e => {
    const plusBtn = e.target.closest('.plus');
    const minusBtn = e.target.closest('.minus');

    if (plusBtn) {
        const countEl = plusBtn.closest('.counter').querySelector('.count');
        let count = parseInt(countEl.textContent);
        if(count < 20){
        countEl.textContent = count + 1;
        }
    }

    if (minusBtn) {
        const countEl = minusBtn.closest('.counter').querySelector('.count');
        let count = parseInt(countEl.textContent);
        if (count > 1) {
            countEl.textContent = count - 1;
        }
    }
});


leftCart.addEventListener('click', e => { 
    const deleteBtn = e.target.closest('.delete');


    if (!deleteBtn) return;
    const cartItem = deleteBtn.closest('.cart-item');
    const id = cartItem.getAttribute('id');

    let cart = JSON.parse(sessionStorage.getItem('cart')) || [];
    cart = cart.filter(item => item.id !== id);
    sessionStorage.setItem('cart', JSON.stringify(cart));

    cartItem.remove();
    location.reload();
})


// подальший код потрібен для оформлення замовлень 


const confirm = document.querySelector('.confirm')
const orderWindow = document.querySelector('.order-window')
const closeBtn = document.querySelector('.close')
let orderUl = document.querySelector('.params-list')
let total = document.querySelector('.total')
confirm.addEventListener('click', e => {
    let orderI = document.querySelectorAll('.cart-item')
    orderUl.innerHTML = ''
    let totalPrice = 0
    orderI.forEach(item  => {
        let nameI = item.querySelector('.cart-name')
        let countI = item.querySelector('.count')
        let priceI = item.querySelector('.priceI').textContent

        orderUl.innerHTML += ` <li>
                <p class="params">Name : ${nameI.textContent}</p>
                <p class="params">Quantity: x${countI.textContent}</p>
                <p class="params">Price per item : UAH ${priceI.match(/\d+/)[0]}</p>
            </li>`
            totalPrice += parseInt(countI.textContent) * parseInt(priceI.match(/\d+/)[0])
    })
    total.innerHTML = `Total price: UAH ${totalPrice}`
    if(totalPrice <= 0 ) {
        alertify.error('Your cart is empty!');
        return
    }
    orderWindow.classList.add('visible')
})

closeBtn.addEventListener('click', e => {
    orderWindow.classList.remove('visible')
})

let orderBuyBtn = document.querySelector('.order-buy')

orderBuyBtn.addEventListener('click', () => {
    alertify.success('Purchase successful!');

    
    setTimeout(() => {
        sessionStorage.setItem('cart', JSON.stringify([]));
        location.reload(); 
    }, 2000); 
});

