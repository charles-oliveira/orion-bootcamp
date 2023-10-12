// Chamando os arquivos de funções com os paradigmas funcional e imperativo
import * as funcional from './funcional'
import * as imperativo from './imperativo'

// e) Demonstre todas as funções com o paradigma funcional e com o imperativo

// Funcional

// a) Retorna a bio a partir de um id passado
console.log(funcional.atualizarItemPorIdFuncional(1))

// b) Crie uma função que retorne o name do id passado
console.log(funcional.obterNomePorIdFuncional(1))

// c) Crie uma função que apague um item da lista a partir de um id passado
console.log(funcional.excluirItemPorIdFuncional(1))

// d) Crie uma função que altere a bio ou o name a partir de um id passado
console.log(
  funcional.atualizarItemPorIdFuncional(
    4,
    'Leonardo da Vinci',
    'Leonardo da Vinci foi um polímata italiano do Renascimento. Ele foi um pintor, escultor, arquiteto, cientista, matemático, engenheiro, inventor, anatomista, escritor, músico e muito mais. '
  )
)

// Imperativo

// a) Retorna a bio a partir de um id passado

console.log(imperativo.obterBiografiaPorIdImperativo(1))

// b) Crie uma função que retorne o name do id passado
console.log(imperativo.obterNomePorIdImperativo(1))

// c) Crie uma função que apague um item da lista a partir de um id passado
console.log(imperativo.excluirItemPorIdImperativo(1))

// d) Crie uma função que altere a bio ou o name a partir de um id passado
imperativo.atualizarItemPorIdImperativo(
  2,
  'Albert Einstein',
  'Albert Einstein foi um físico teórico alemão. Ele é mais conhecido por sua teoria da relatividade, que revolucionou nossa compreensão da física. Einstein recebeu o Prêmio Nobel de Física em 1921 por suas contribuições à explicação do efeito fotoelétrico.'
)
