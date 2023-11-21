// Define workers for multi thread
const worker = new Worker('workers.js');

const totalButton = document.getElementById("total");
const bgButton = document.getElementById("bg");
const inputField = document.getElementById('input_id');
const outputField = document.getElementById('output_id');
const colorList = ['orange', 'red', 'green', 'blue', 'black'];

totalButton.addEventListener('click', () => {
    showSpinner();
    worker.postMessage({ message: "Find the prime", value: inputField.value })
})

// Receive the call back from workers
worker.onmessage = function (message) {
    const primesResult = message.data
    console.log('Fib Result', primesResult, primesResult.value)
    outputField.value = primesResult.value.length;
    hideSpinner();
}

bgButton.addEventListener("click", () => {
    let randColor = getRandomItemFromArray(colorList);
    document.body.style.background = randColor
    console.log("Selected color", randColor)
});

function getRandomItemFromArray(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
}

// Show spinner
function showSpinner() {
    const spinner = document.querySelector('.spinner');
    spinner.style.display = 'block';
}

// Hide spinner
function hideSpinner() {
    const spinner = document.querySelector('.spinner');
    spinner.style.display = 'none';
}