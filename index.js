let counterElement = document.getElementById('counter');
let plusBtn = document.getElementById('plus');
let minusBtn = document.getElementById('minus');
let resetBtn = document.getElementById('reset');
let randomBtn = document.getElementById('random');

let counter = 0;

function updateCounter() {
    counterElement.textContent = counter;
}

plusBtn.addEventListener('click',function() {
    if (counter < 10) {
        counter++
        updateCounter()
    }
})

minusBtn.addEventListener('click',function() {
    if (counter > 0) {
        counter--
        updateCounter()
    }
})

resetBtn.addEventListener('click',function() {
    counter = 0
    updateCounter()
})

randomBtn.addEventListener('click',function() {
    let randomNum = Math.floor(Math.random() * 9) + 1;
    counter = randomNum
    updateCounter()
})