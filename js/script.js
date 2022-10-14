// Consigli del giorno **
// 1. Scriviamo sempre in italiano i passaggi che vogliamo fare
// 2. Scriviamo sempre solo un pezzetto di codice alla volta, se funziona allora andiamo avanti.

// Palidroma **
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

// collegamento al container
const container = document.getElementById('my-container')

// Creazione input
const inputText = document.createElement('input');
// inputText.getAttribute('type', 'text');
inputText.className = 'rounded-pill mx-1'
container.append(inputText);

// Creazione bottone
const btn = document.createElement('button');
btn.className = 'rounded-pill mx-1'
btn.innerHTML = "Invia";
container.append(btn);

//Creazione frase
const rowResponse = document.createElement('p')
container.append(rowResponse);

// Creazione evento al click
btn.addEventListener('click', function () {
    // Prendiamo inputText per leggere cosa è stato scritto
    let wordInput = inputText.value
    // Invertiamo la parola
    let wordReverse = reverseString(wordInput)
    console.log(wordReverse);
    // Funzione di controllo se la parola è palindroma
    let wordPalindromo = palindrome(wordReverse)
    console.log(wordPalindromo)
    // Come comportarsi nei 2 casi
    if (wordPalindromo) {
        rowResponse.innerHTML = 'la tua parola è palindroma';
    } else {
        rowResponse.innerHTML = 'la tua parola NON è palindroma';
    }
});

// Pari e Dispari **
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.