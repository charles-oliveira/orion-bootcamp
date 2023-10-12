// importando os dados da lista de personalidades
import { lista } from './personalidades'

// a) Retorna a bio a partir de um id passado PR-FUN
const getBioByIdFuncional = (id: number): string => {
  const item = lista.find(obj => obj['id'] === id)
  return item ? item['bio'] : 'ID não encontrado'
}

//  b) Retorna o name a partir de um id passado PR-FUN
const getNameByIdFuncional = (id: number): string => {
  const item = lista.find(obj => obj['id'] === id)
  return item ? item['name'] : 'ID não encontrado'
}

// c) Apaga um item da lista a partir de um id passado PR-FUN
const deleteItemByIdFuncional = (id: number): void => {
  const index = lista.findIndex(obj => obj['id'] === id) // Encontra o index do item
  // Se o index existir
  if (index !== -1) {
    lista.splice(index, 1) // Apague o item
  }
}

// d) Altera a bio ou o name a partir de um id passado PR-FUN
const updateItemByIdFuncional = (
  id: number,
  name?: string,
  bio?: string
): void => {
  const item = lista.find(obj => obj['id'] === id)
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
  getBioByIdFuncional,
  getNameByIdFuncional,
  deleteItemByIdFuncional,
  updateItemByIdFuncional
}
