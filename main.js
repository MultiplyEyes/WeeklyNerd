// let inputNum = 0;
// let intervalId = null;
// let isHolding = false;
// const box = document.getElementById('box');
// const meter = document.getElementById('meter');
// let value;

// let lowValue = 600;
// let highValue = 700;

// meter.max = 1000;

// meter.high = highValue;
// meter.low = lowValue;

// const increase = 1;

// let color = "green"; // Default color


// function updateDisplay() {
//     meter.value = inputNum;
// }

// function startIncrementing() {
//     if (intervalId) clearInterval(intervalId);
//     intervalId = setInterval(() => {
//         if (inputNum < meter.max) {
//             inputNum=inputNum + increase;
//             updateDisplay();
//         }
//     });
// }

// function startDecrementing() {
//     if (intervalId) clearInterval(intervalId);
//     intervalId = setInterval(() => {
//         if (inputNum > 0) {
//             inputNum = inputNum - (increase * 1.2);
//             updateDisplay();
//         }
//     });
// }

// box.addEventListener("mousedown", function () {
//     isHolding = true;
//     box.innerText = "Holding...";
//     startIncrementing();
// });

// document.addEventListener("mouseup", function () {
//     if (isHolding) {
//         isHolding = false;
//         box.innerText = "Hold Me";
//         startDecrementing();
//     }
// });

// // Optional: stop all when leaving the page
// window.addEventListener("blur", () => {
//     if (intervalId) clearInterval(intervalId);
//     box.innerText = "Hold Me";
//     isHolding = false;
// });

// updateDisplay();