// Pari e Dispari **
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

// collegamento al container
const containerP2 = document.getElementById('my-cont');

const inputNumber = document.getElementById('numberInput');
const btnInput = document.getElementById('calc-input');

// Far scegliere all'utente pari o dispari
const radioButtons = document.querySelectorAll('input[name="pari_dispari"]');

// Creazione evento al click
btnInput.addEventListener('click', function () {
    console.log(inputNumber.value)
}

// console.log(inputNumber.value)