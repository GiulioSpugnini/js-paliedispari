//Palidroma:
//Chiedere all’utente di inserire una parola.
//Creare una funzione per capire se la parola inserita è palindroma.
const resultPalindrom = document.getElementById('resultPalindroma');
const inputText = document.getElementById('inputTextPalindroma');
const enter = document.getElementById('invio');


function reverseWord(word) {
    let reverseWord = '';
    for (let i = word.length - 1; i >= 0; i--) {
        reverseWord += word[i];
    }
    return reverseWord;
}
const revWord = reverseWord(inputText.value);
console.log(revWord);

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
    resultPalindrom.innerHTML = `La parola inserita è Palindroma? ${palWord}`;
    console.log(palWord);
});
//Pari e Dispari:
//L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
const resultPariDispari = document.getElementById('pariDispari');