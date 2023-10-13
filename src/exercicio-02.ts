// // Chamando os arquivos de funções com os paradigmas funcional e imperativo
// import * as funcional from './funcional'
// import * as imperativo from './imperativo'

import {
  obterBiografiaPorIdFuncional,
  obterNomePorIdFuncional,
  excluirItemPorIdFuncional,
  atualizarItemPorIdFuncional
} from './funcional.js' // Importar funções funcionais

import {
  obterBiografiaPorIdImperativo,
  obterNomePorIdImperativo,
  excluirItemPorIdImperativo,
  atualizarItemPorIdImperativo
} from './imperativo' // Importar funções imperativas

document.addEventListener('DOMContentLoaded', () => {
  const idInput = document.getElementById('idInput') as HTMLInputElement
  const getBioButton = document.getElementById('getBio') as HTMLButtonElement
  const getNameButton = document.getElementById('getName') as HTMLButtonElement
  const deleteItemButton = document.getElementById(
    'deleteItem'
  ) as HTMLButtonElement
  const updateItemButton = document.getElementById(
    'updateItem'
  ) as HTMLButtonElement
  const bioResult = document.getElementById('bioResult') as HTMLParagraphElement
  const nameResult = document.getElementById(
    'nameResult'
  ) as HTMLParagraphElement
  const deleteResult = document.getElementById(
    'deleteResult'
  ) as HTMLParagraphElement
  const updateResult = document.getElementById(
    'updateResult'
  ) as HTMLParagraphElement

  // Função para atualizar os resultados
  const updateResults = (
    bio: string,
    name: string,
    deleted: string,
    updated: string
  ) => {
    bioResult.textContent = bio
    nameResult.textContent = name
    deleteResult.textContent = deleted
    updateResult.textContent = updated
  }

  // Evento para obter a bio funcional
  getBioButton.addEventListener('click', () => {
    console.log('click')
    const id = parseInt(idInput.value)
    const bio = obterBiografiaPorIdFuncional(id)
    updateResults(bio, '', '', '')
  })

  // Evento para obter o nome funcional
  getNameButton.addEventListener('click', () => {
    const id = parseInt(idInput.value)
    const name = obterNomePorIdFuncional(id)
    updateResults('', name, '', '')
  })

  // Evento para excluir um item funcional
  deleteItemButton.addEventListener('click', () => {
    const id = parseInt(idInput.value)
    excluirItemPorIdFuncional(id)
    updateResults('', '', 'Item excluído', '')
  })

  // Evento para atualizar um item funcional
  updateItemButton.addEventListener('click', () => {
    const id = parseInt(idInput.value)
    const novoNome = prompt('Novo nome:') ?? ''
    const novaBio = prompt('Nova bio:') ?? ''
    atualizarItemPorIdFuncional(id, novoNome, novaBio)
    updateResults('', '', '', 'Item atualizado')
  })
})

// // e) Demonstre todas as funções com o paradigma funcional e com o imperativo

// // Funcional

// // a) Retorna a bio a partir de um id passado
// console.log(funcional.atualizarItemPorIdFuncional(1))

// // b) Crie uma função que retorne o name do id passado
// console.log(funcional.obterNomePorIdFuncional(1))

// // c) Crie uma função que apague um item da lista a partir de um id passado
// console.log(funcional.excluirItemPorIdFuncional(1))

// // d) Crie uma função que altere a bio ou o name a partir de um id passado
// console.log(
//   funcional.atualizarItemPorIdFuncional(
//     4,
//     'Leonardo da Vinci',
//     'Leonardo da Vinci foi um polímata italiano do Renascimento. Ele foi um pintor, escultor, arquiteto, cientista, matemático, engenheiro, inventor, anatomista, escritor, músico e muito mais. '
//   )
// )

// // Imperativo

// // a) Retorna a bio a partir de um id passado

// console.log(imperativo.obterBiografiaPorIdImperativo(1))

// // b) Crie uma função que retorne o name do id passado
// console.log(imperativo.obterNomePorIdImperativo(1))

// // c) Crie uma função que apague um item da lista a partir de um id passado
// console.log(imperativo.excluirItemPorIdImperativo(1))

// // d) Crie uma função que altere a bio ou o name a partir de um id passado
// imperativo.atualizarItemPorIdImperativo(
//   2,
//   'Albert Einstein',
//   'Albert Einstein foi um físico teórico alemão. Ele é mais conhecido por sua teoria da relatividade, que revolucionou nossa compreensão da física. Einstein recebeu o Prêmio Nobel de Física em 1921 por suas contribuições à explicação do efeito fotoelétrico.'
// )
