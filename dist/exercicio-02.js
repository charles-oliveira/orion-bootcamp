import { obterBiografiaPorIdFuncional, obterNomePorIdFuncional, excluirItemPorIdFuncional, atualizarItemPorIdFuncional } from './funcional.js';
document.addEventListener('DOMContentLoaded', () => {
    const idInput = document.getElementById('idInput');
    const getBioButton = document.getElementById('getBio');
    const getNameButton = document.getElementById('getName');
    const deleteItemButton = document.getElementById('deleteItem');
    const updateItemButton = document.getElementById('updateItem');
    const bioResult = document.getElementById('bioResult');
    const nameResult = document.getElementById('nameResult');
    const deleteResult = document.getElementById('deleteResult');
    const updateResult = document.getElementById('updateResult');
    const updateResults = (bio, name, deleted, updated) => {
        bioResult.textContent = bio;
        nameResult.textContent = name;
        deleteResult.textContent = deleted;
        updateResult.textContent = updated;
    };
    getBioButton.addEventListener('click', () => {
        console.log('click');
        const id = parseInt(idInput.value);
        const bio = obterBiografiaPorIdFuncional(id);
        updateResults(bio, '', '', '');
    });
    getNameButton.addEventListener('click', () => {
        const id = parseInt(idInput.value);
        const name = obterNomePorIdFuncional(id);
        updateResults('', name, '', '');
    });
    deleteItemButton.addEventListener('click', () => {
        const id = parseInt(idInput.value);
        excluirItemPorIdFuncional(id);
        updateResults('', '', 'Item excluído', '');
    });
    updateItemButton.addEventListener('click', () => {
        var _a, _b;
        const id = parseInt(idInput.value);
        const novoNome = (_a = prompt('Novo nome:')) !== null && _a !== void 0 ? _a : '';
        const novaBio = (_b = prompt('Nova bio:')) !== null && _b !== void 0 ? _b : '';
        atualizarItemPorIdFuncional(id, novoNome, novaBio);
        updateResults('', '', '', 'Item atualizado');
    });
});
