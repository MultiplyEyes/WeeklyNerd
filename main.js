let inputNum = 19;
let intervalId = null;
let isHolding = false;
const box = document.getElementById('box');
const replace = document.getElementById('replace');


let fishing = document.getElementById('fishing');
let value;

function updateDisplay() {
    replace.innerText = "Mousepoints: " + inputNum;
    value = inputNum * 0.01;
    fishing.style.transform = `scale(1, ${value})`;
}

function startIncrementing() {
    if (intervalId) clearInterval(intervalId);
    intervalId = setInterval(() => {
        if (inputNum < 100) {
        inputNum++;
        updateDisplay();
        }
    }, 100);
}

function startDecrementing() {
    if (intervalId) clearInterval(intervalId);
    intervalId = setInterval(() => {
        if (inputNum > 0) {
            inputNum--;
            updateDisplay();
        }
    }, 100);
}

box.addEventListener("mousedown", function () {
    isHolding = true;
    box.innerText = "Holding...";
    startIncrementing();
});

document.addEventListener("mouseup", function () {
    if (isHolding) {
        isHolding = false;
        box.innerText = "Hold Me";
        startDecrementing();
    }
});

// Optional: stop all when leaving the page
window.addEventListener("blur", () => {
    if (intervalId) clearInterval(intervalId);
    box.innerText = "Hold Me";
    isHolding = false;
});

updateDisplay();