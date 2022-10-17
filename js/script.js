// Consigli del giorno **
// 1. Scriviamo sempre in italiano i passaggi che vogliamo fare
// 2. Scriviamo sempre solo un pezzetto di codice alla volta, se funziona allora andiamo avanti.

// Palidroma **
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

// collegamento al container
const container = document.getElementById('my-container')
const inputText = document.getElementById('input-text')
const btnA = document.getElementById('btn-A')
const rowResponse = document.getElementById('row-response')

// Creazione evento al click
btnA.addEventListener('click', function () {
    // Prendiamo inputText per leggere cosa è stato scritto
    let wordInput = inputText.value.toLowerCase().trim();
    // Se inseriscono altri caratteri diversi da lettere
    if (!isNaN(wordInput)) alert('Inserisci solo lettere!');
    // Funzione di controllo se la parola è palindroma
    let wordPalindromo = palindrome(wordInput)
    console.log(wordPalindromo)
    // Come comportarsi nei 2 casi
    if (wordPalindromo) {
        rowResponse.innerHTML = 'la tua parola è palindroma';
    } else {
        rowResponse.innerHTML = 'la tua parola NON è palindroma';
    }
    rowResponse.value = '';
});