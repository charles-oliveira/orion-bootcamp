const inputPalavra: HTMLInputElement | null = document.querySelector('#input')
const display: HTMLDivElement | null = document.querySelector('.display')

function contarVogais(palavra: string): number {
  const vogaisRegex = /[aeiouáàâãéêíóôõúü]/gi // g = global, i = case insensitive
  const vogaisEncontradas = palavra.match(vogaisRegex) // retorna um array com as vogais encontradas

  return vogaisEncontradas ? vogaisEncontradas.length : 0 // se não encontrar nenhuma vogal, retorna 0
}

// Primeira parte do exercício, exemplo de uso com uma palavra recebida via parâmetro da função.
const palavra: string = 'Continuar'
console.log(`A palavra ${palavra} possui ${contarVogais(palavra)} vogais`)

// Segunda parte do exercício, exemplo de uso com uma palavra recebida via input do usuário.
if (inputPalavra && display) {
  inputPalavra.addEventListener('keyup', (event: KeyboardEvent) => {
    event.preventDefault()
    display.textContent = `A palavra ${
      inputPalavra.value
    } possui ${contarVogais(inputPalavra.value)} vogais`
  })
}
