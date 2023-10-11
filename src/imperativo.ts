import { lista } from './personalidades'

// a) Retorna a bio do id passado
function getBioByIdImperative(id: number): string {
  for (let i = 0; i < lista.length; i++) {
    if (lista[i]['id'] === id) {
      return lista[i]['bio']
    }
  }
  return 'ID não encontrado'
}

// b) Retorna o name do id passado
function getNameByIdImperative(id: number): string {
  for (let i = 0; i < lista.length; i++) {
    if (lista[i]['id'] === id) {
      return lista[i]['name']
    }
  }
  return 'ID não encontrado'
}

// c) Crie uma função que apague um item a partir de um id passado

function deleteItemByIdImperative(id: number): void {
  for (let i = 0; i < lista.length; i++) {
    if (lista[i]['id'] === id) {
      lista.splice(i, 1)
      break
    }
  }
}

// d) Altera a bio ou o name a partir de um id passado
function updateItemByIdImperative(
  id: number,
  name?: string,
  bio?: string
): void {
  for (let i = 0; i < lista.length; i++) {
    if (lista[i]['id'] === id) {
      if (name !== undefined) {
        lista[i]['name'] = name
      }
      if (bio !== undefined) {
        lista[i]['bio'] = bio
      }
      break
    }
  }
}

export {
  getBioByIdImperative,
  getNameByIdImperative,
  deleteItemByIdImperative,
  updateItemByIdImperative
}
