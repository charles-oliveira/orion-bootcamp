function contarVogais(palavra: string): number {
  const vogais = ['a', 'e', 'i', 'o', 'u']
  let count = 0

  for (let i = 0; i < palavra.length; i++) {
    if (vogais.includes(palavra[i])) {
      count++
    }
  }

  return count
}

console.log(contarVogais('banana'))
