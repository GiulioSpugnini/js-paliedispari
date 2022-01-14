//Palidroma:
//Chiedere all’utente di inserire una parola.
//Creare una funzione per capire se la parola inserita è palindroma.
const resultPalindrom = document.getElementById('resultPalindroma');
const inputText = document.getElementById('inputTextPalindroma');
const enter = document.getElementById('invio');

//#GENERO LA PAROLA INVERTITA
function reverseWord(word) {
    let reverseWord = '';
    for (let i = word.length - 1; i >= 0; i--) {
        reverseWord += word[i];
    }
    return reverseWord;
}
const revWord = reverseWord(inputText.value);
console.log(revWord);
//#CONTROLLO SE LA PAROLA SIA PALINDROMA
function isPalindrom(normalWord) {
    normalWord = inputText.value;
    const newWord = reverseWord(normalWord);

    console.log(normalWord);

    console.log(newWord);
    if (normalWord != newWord) return false;
    return true;
}

enter.addEventListener('click', function() {
    const palWord = isPalindrom(inputText.value);
    resultPalindrom.innerHTML = `<h3 class="mt-10 white">La parola inserita è Palindroma? ${palWord}</h3>`;
    console.log(palWord);
});
/* Pari e Dispari:
    L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
    Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
    Sommiamo i due numeri
    Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
    Dichiariamo chi ha vinto.
*/
const resultPariDispari = document.getElementById('resultPariDispari');
const inputNumberPariDispari = document.getElementById('inputNumberPariDispari');
const pari = document.getElementById('pari');
const dispari = document.getElementById('dispari');
const resultCpu = document.getElementById('resultCpu');

//#GENERO NUMERO CASUALE DEL COMPUTER
function cpuRandomNumber(number) {
    return number = Math.floor(Math.random() * 5) + 1;
}
const cpuNumber = cpuRandomNumber();
console.log('Il numero della Cpu è: ' + cpuNumber);


pari.addEventListener('click', function() {
    resultCpu.innerHTML = 'Il numero della CPU era: ' + cpuNumber;
    const userNumber = inputNumberPariDispari.value;
    console.log(userNumber);
    // #CALCOLO LA SOMMA TRA I DUE NUMERI
    const sum = parseInt(userNumber) + parseInt(cpuNumber);

    console.log('La somma dei due numeri è: ' + sum);
    if (sum % 2 == 0) {
        resultPariDispari.innerHTML = `<h4 class="mt-10 white">L'UTENTE HA VINTO!</h4>`;
    } else {
        resultPariDispari.innerHTML = `<h4 class="mt-10 white">LA CPU HA VINTO!</h4>`;
    }

    pari.classList.add('d-none');
    dispari.classList.add('d-none');
})
dispari.addEventListener('click', function() {
    resultCpu.innerHTML = 'Il numero della CPU era: ' + cpuNumber;
    const userNumber = inputNumberPariDispari.value;
    console.log(userNumber);
    // #CALCOLO LA SOMMA TRA I DUE NUMERI
    const sum = parseInt(userNumber) + parseInt(cpuNumber);
    console.log('La somma dei due numeri è: ' + sum);


    if (sum % 2 != 0) {
        resultPariDispari.innerHTML = `<h4 class="mt-10 white">L'UTENTE HA VINTO!</h4>`;
    } else {
        resultPariDispari.innerHTML = `<h4 class="mt-10 white">LA CPU HA VINTO!</h4>`;
    }

    pari.classList.add('d-none');
    dispari.classList.add('d-none');
})