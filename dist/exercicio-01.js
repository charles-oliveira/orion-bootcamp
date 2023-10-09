"use strict";
const inputPalavra = document.querySelector('#input');
const display = document.querySelector('.display');
function contarVogais(palavra) {
    const vogaisRegex = /[aeiouáàâãéêíóôõúü]/gi;
    const vogaisEncontradas = palavra.match(vogaisRegex);
    return vogaisEncontradas ? vogaisEncontradas.length : 0;
}
const palavra = 'Continuar';
console.log(`A palavra ${palavra} possui ${contarVogais(palavra)} vogais`);
if (inputPalavra && display) {
    inputPalavra.addEventListener('keyup', (event) => {
        event.preventDefault();
        display.textContent = `A palavra ${inputPalavra.value} possui ${contarVogais(inputPalavra.value)} vogais`;
    });
}
