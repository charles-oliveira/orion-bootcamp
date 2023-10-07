function contarVogais(palavra) {
    var vogais = ['a', 'e', 'i', 'o', 'u'];
    var count = 0;
    for (var i = 0; i < palavra.length; i++) {
        if (vogais.includes(palavra[i])) {
            count++;
        }
    }
    return count;
}
console.log(contarVogais('banana'));
