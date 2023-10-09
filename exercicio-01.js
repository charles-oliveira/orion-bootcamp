var inputPalavra = document.querySelector('#input');
console.log(inputPalavra);
var display = document.querySelector('.display');
console.log(display);
function contarVogais(palavra) {
    var vogais = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    var contador = 0;
    for (var i = 0; i < palavra.length; i++) {
        if (vogais.includes(palavra[i])) {
            contador++;
        }
    }
    return contador;
}
// Primeira parte do exercício, exemplo de uso com uma palavra recebida via parâmetro da função.
var palavra = 'Continuar';
console.log("A palavra ".concat(palavra, " possui ").concat(contarVogais(palavra), " vogais"));
// Segunda parte do exercício, exemplo de uso com uma palavra recebida via input do usuário.
inputPalavra.addEventListener('keyup', function (event) {
    event.preventDefault();
    display.textContent = "A palavra ".concat(inputPalavra.value, " possui ").concat(contarVogais(inputPalavra.value), " vogais");
});
