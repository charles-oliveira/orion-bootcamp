import { listaDePersonalidades } from './personalidades.js';
const obterBiografiaPorIdFuncional = (id) => {
    const item = listaDePersonalidades.find(obj => obj['id'] === id);
    return item ? item['bio'] : 'ID não encontrado';
};
const obterNomePorIdFuncional = (id) => {
    const item = listaDePersonalidades.find(obj => obj['id'] === id);
    return item ? item['name'] : 'ID não encontrado';
};
const excluirItemPorIdFuncional = (id) => {
    const index = listaDePersonalidades.findIndex(obj => obj['id'] === id);
    if (index !== -1) {
        listaDePersonalidades.splice(index, 1);
    }
};
const atualizarItemPorIdFuncional = (id, name, bio) => {
    const item = listaDePersonalidades.find(obj => obj['id'] === id);
    if (item) {
        if (name !== undefined) {
            item['name'] = name;
        }
        if (bio !== undefined) {
            item['bio'] = bio;
        }
    }
};
export { obterBiografiaPorIdFuncional, obterNomePorIdFuncional, excluirItemPorIdFuncional, atualizarItemPorIdFuncional };
