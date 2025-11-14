let partners1 = document.querySelector('.partners_1');
let partners2 = document.querySelector('.partners_2');
let partners3 = document.querySelector('.partners_3');

logos_urls.forEach((url, index) => {
    if (index < 17) {
        partners1.innerHTML += `<div class="partner">
            <img src="${url}" alt="">
            </div>`
    } else if (index < 24) {
        partners2.innerHTML += `<div class="partner">
            <img src="${url}" alt="">
            </div>` 
    } else {
        partners3.innerHTML += `<div class="partner">
            <img src="${url}" alt="">
            </div>`
    }
});