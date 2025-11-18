let cart = JSON.parse(sessionStorage.getItem('cart')) || [];
console.log(cart);

const leftCart = document.querySelector(".left-cart");
const order = document.querySelector(".order-list");

cart.forEach((item) => { 
    leftCart.innerHTML += `<div id="${item.id}" class="cart-item">
        <div class="img-cart">
            <img src="${item.imgUrl}" alt="">
          </div>
        <div class="information">
            <p class="cart-name">${item.title}</p>
            <button class="delete">delete</button>
        </div>
        <div class="cart-price">
            <p>${item.price}</p>
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
    const cartItem = deleteBtn.closest('.cart-item');

    if (!deleteBtn) return;
    const id = cartItem.getAttribute('id');

    let cart = JSON.parse(sessionStorage.getItem('cart')) || [];
    cart = cart.filter(item => item.id !== id);
    sessionStorage.setItem('cart', JSON.stringify(cart));

    cartItem.remove();
})




