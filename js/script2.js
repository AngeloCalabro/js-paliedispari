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

// Creazione evento al click
btnInput.addEventListener('click', function () {
    console.log(inputNumber.value)
    if (isNaN(inputNumber.value) || inputNumber.value < 1 || inputNumber.value > 5) {
        alert('Inserisci numero tra 1 e 5')
        return;
    }
    // Far scegliere all'utente pari o dispari
    const radioButtonValue = document.querySelector('input[name="pari_dispari"]:checked').value;
    console.log(radioButtonValue);

    // Numero random generato
    const randomNum = randomNumber(1, 5);
    const somma = parseInt(inputNumber.value) + randomNum;

    // Controllo se ha vinto o perso
    if ((isEven(somma) && radioButtonValue === 'pari') || (radioButtonValue === 'dispari' && !isEven(somma))) {
        console.log('Hai vinto!')
    } else {
        console.log('Hai perso!')
    }
    inputNumber.value = '';
})
