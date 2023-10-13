import {
  obterBiografiaPorIdFuncional,
  obterNomePorIdFuncional
} from './funcional.js' // Importar funções funcionais

import {
  excluirItemPorIdImperativo,
  atualizarItemPorIdImperativo
} from './imperativo.js' // Importar funções imperativas

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

  // Evento para obter a bio funcional paradigma funcional porque não há manipulação do DOM
  getBioButton.addEventListener('click', () => {
    console.log('click')
    const id = parseInt(idInput.value)
    const bio = obterBiografiaPorIdFuncional(id)
    updateResults(bio, '', '', '')
  })

  // Evento para obter o nome usando paradigma funcional porque não há manipulação do DOM
  getNameButton.addEventListener('click', () => {
    const id = parseInt(idInput.value)
    const name = obterNomePorIdFuncional(id)
    updateResults('', name, '', '')
  })

  // Evento para excluir um item usando paradigma imperativo porque há manipulação do DOM
  deleteItemButton.addEventListener('click', () => {
    const id = parseInt(idInput.value)
    excluirItemPorIdImperativo(id)
    updateResults('', '', 'Item excluído', '')
  })

  // Evento para atualizar um item usando paradigma imperativo porque há manipulação do DOM
  updateItemButton.addEventListener('click', () => {
    const id = parseInt(idInput.value)
    atualizarItemPorIdImperativo(id, 'Novo nome', 'Nova bio')
    updateResults('', '', '', 'Item atualizado')
  })
})
