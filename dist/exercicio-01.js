"use strict";
const inputPalavra = document.querySelector('#input');
const display = document.querySelector('.display');
function contarVogais(palavra) {
    const vogais = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    let contador = 0;
    for (let i = 0; i < palavra.length; i++) {
        if (vogais.includes(palavra[i])) {
            contador++;
        }
    }
    return contador;
}
// Primeira parte do exercício, exemplo de uso com uma palavra recebida via parâmetro da função.
const palavra = 'Continuar';
console.log(`A palavra ${palavra} possui ${contarVogais(palavra)} vogais`);
// Segunda parte do exercício, exemplo de uso com uma palavra recebida via input do usuário.
inputPalavra.addEventListener('keyup', (event) => {
    event.preventDefault();
    display.textContent = `A palavra ${inputPalavra.value} possui ${contarVogais(inputPalavra.value)} vogais`;
});
