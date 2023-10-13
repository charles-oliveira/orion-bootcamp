import { listaDePersonalidades } from './personalidades';
function obterBiografiaPorIdImperativo(id) {
    for (let i = 0; i < listaDePersonalidades.length; i++) {
        if (listaDePersonalidades[i]['id'] === id) {
            return listaDePersonalidades[i]['bio'];
        }
    }
    return 'ID não encontrado';
}
function obterNomePorIdImperativo(id) {
    for (let i = 0; i < listaDePersonalidades.length; i++) {
        if (listaDePersonalidades[i]['id'] === id) {
            return listaDePersonalidades[i]['name'];
        }
    }
    return 'ID não encontrado';
}
function excluirItemPorIdImperativo(id) {
    for (let i = 0; i < listaDePersonalidades.length; i++) {
        if (listaDePersonalidades[i]['id'] === id) {
            listaDePersonalidades.splice(i, 1);
            break;
        }
    }
}
function atualizarItemPorIdImperativo(id, name, bio) {
    for (let i = 0; i < listaDePersonalidades.length; i++) {
        if (listaDePersonalidades[i]['id'] === id) {
            if (name !== undefined) {
                listaDePersonalidades[i]['name'] = name;
            }
            if (bio !== undefined) {
                listaDePersonalidades[i]['bio'] = bio;
            }
            break;
        }
    }
}
export { obterBiografiaPorIdImperativo, obterNomePorIdImperativo, excluirItemPorIdImperativo, atualizarItemPorIdImperativo };
