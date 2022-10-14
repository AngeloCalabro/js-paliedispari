// NUMERO RANDOM
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// NUMERO PARI O DISPARI
function isEven(num) {
    if (num % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

// NOTIFICA DI ERRORE
function notificationError(msgError, elem, selector) {
    const alerta = document.createElement('div');
    alerta.className = 'alert alert-danger';
    alerta.innerHTML = msgError;
    return alerta;
}

// NOTIFICA DI SUCCESSO
function notificationSuccess(msgSuccess) {
    const success = document.createElement('div');
    success.className = 'alert alert-success';
    success.innerHTML = msgSuccess;
    return success;
}

// RIMOZIONE NOTIFICA
function removeFirstNotification() {
    const alertToRemove = document.querySelector('.alert');
    if (alertToRemove) alertToRemove.remove();
}

// CAPOVOLGERE PAROLA
function reverseWords(str) {
    let reverseWordArr = str.split(" ").map(word => word.split("").reverse().join(""));
    return reverseWordArr.join(" ");
}

// CAPOVOLGERE FRASE
function reverseString(str) {
    let newString = "";
    for (var i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}

// PALINDROMO
function palindrome(str) {
    let lowStr = str.toLowerCase();
    let reverseStr = lowStr.split('').reverse().join('');
    return reverseStr === lowStr;
}

