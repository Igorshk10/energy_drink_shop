const minusBtn = document.querySelector(".minus");
const plusBtn = document.querySelector(".plus");
const countEl = document.querySelector(".count");

let count = 1;

plusBtn.addEventListener("click", () => {
    count++;
    countEl.textContent = count;
});

minusBtn.addEventListener("click", () => {
    if (count > 1) {
        count--;
        countEl.textContent = count;
    }
});