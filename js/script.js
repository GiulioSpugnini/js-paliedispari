//Palidroma:
//Chiedere all’utente di inserire una parola.
//Creare una funzione per capire se la parola inserita è palindroma.
const resultPalindroma = document.getElementById('palindroma');
const inputText = document.getElementById('inputTextPalindroma');
const enter = document.getElementById('invio');

function reverseWord(word) {
    let reverseWord = '';
    for (let i = word.length - 1; i >= 0; i--) {
        reverseWord += word[i];
    }
    return reverseWord;
}


enter.addEventListener('click', function() {
    const revWord = reverseWord(inputText.value);
    console.log(revWord);
});
//Pari e Dispari:
//L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
const resultPariDispari = document.getElementById('pariDispari');