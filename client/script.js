const totalButton = document.getElementById("total");
const bgButton = document.getElementById("bg");
const inputField = document.getElementById('input_id');
const outputField = document.getElementById('output_id');
const colorList = ['orange', 'red', 'green', 'blue', 'black'];

totalButton.addEventListener('click', () => {
    let primesResult = findPrimesInRange(1, inputField.value)
    console.log('Fib Result', primesResult, inputField.value)
    outputField.value = primesResult.length;
})

bgButton.addEventListener("click", () => {
    let randColor = getRandomItemFromArray(colorList);
    document.body.style.background = randColor
    console.log("Selected color", randColor)
});

function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;
    let i = 5;
    while (i * i <= num) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
        i += 6;
    }
    return true;
}

function findPrimesInRange(start, end) {
    const primes = [];
    for (let i = start; i <= end; i++) {
        if (isPrime(i)) {
            primes.push(i);
        }
    }
    return primes;
}

function getRandomItemFromArray(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
}