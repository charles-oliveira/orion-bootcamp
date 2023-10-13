// importando os dados da listaDePersonalidades
import { listaDePersonalidades } from './personalidades'
import { Personalidade } from './personalidades'

// a) Retorna a bio a partir de um id passado PR-FUN
const obterBiografiaPorIdFuncional = (id: number): string => {
  const item: Personalidade | undefined = listaDePersonalidades.find(
    obj => obj['id'] === id
  )
  return item ? item['bio'] : 'ID não encontrado'
}

//  b) Retorna o name a partir de um id passado PR-FUN
const obterNomePorIdFuncional = (id: number): string => {
  const item: Personalidade | undefined = listaDePersonalidades.find(
    obj => obj['id'] === id
  )
  return item ? item['name'] : 'ID não encontrado'
}

// c) Apaga um item da listaDePersonalidades a partir de um id passado PR-FUN
const excluirItemPorIdFuncional = (id: number): void => {
  const index: number = listaDePersonalidades.findIndex(obj => obj['id'] === id) // Encontra o index do item
  // Se o index existir
  if (index !== -1) {
    listaDePersonalidades.splice(index, 1) // Apague o item
  }
}

// d) Altera a bio ou o name a partir de um id passado PR-FUN
const atualizarItemPorIdFuncional = (
  id: number,
  name?: string,
  bio?: string
): void => {
  const item: Personalidade | undefined = listaDePersonalidades.find(
    obj => obj['id'] === id
  )
  if (item) {
    // Se o name for passado
    if (name !== undefined) {
      item['name'] = name
    }
    // Se o bio for passado
    if (bio !== undefined) {
      item['bio'] = bio
    }
  }
}

export {
  obterBiografiaPorIdFuncional,
  obterNomePorIdFuncional,
  excluirItemPorIdFuncional,
  atualizarItemPorIdFuncional
}
