import { listaDePersonalidades } from './personalidades.js'

// a) Retorna a bio do id passado
function obterBiografiaPorIdImperativo(id: number): string {
  for (let i = 0; i < listaDePersonalidades.length; i++) {
    if (listaDePersonalidades[i]['id'] === id) {
      return listaDePersonalidades[i]['bio']
    }
  }
  return 'ID não encontrado'
}

// b) Retorna o name do id passado
function obterNomePorIdImperativo(id: number): string {
  for (let i = 0; i < listaDePersonalidades.length; i++) {
    if (listaDePersonalidades[i]['id'] === id) {
      return listaDePersonalidades[i]['name']
    }
  }
  return 'ID não encontrado'
}

// c) Crie uma função que apague um item a partir de um id passado

function excluirItemPorIdImperativo(id: number): void {
  for (let i = 0; i < listaDePersonalidades.length; i++) {
    if (listaDePersonalidades[i]['id'] === id) {
      listaDePersonalidades.splice(i, 1)
      break
    }
  }
}

// d) Altera a bio ou o name a partir de um id passado
function atualizarItemPorIdImperativo(
  id: number,
  name?: string,
  bio?: string
): void {
  for (let i = 0; i < listaDePersonalidades.length; i++) {
    if (listaDePersonalidades[i]['id'] === id) {
      if (name !== undefined) {
        listaDePersonalidades[i]['name'] = name
      }
      if (bio !== undefined) {
        listaDePersonalidades[i]['bio'] = bio
      }
      break
    }
  }
}

export {
  obterBiografiaPorIdImperativo,
  obterNomePorIdImperativo,
  excluirItemPorIdImperativo,
  atualizarItemPorIdImperativo
}
