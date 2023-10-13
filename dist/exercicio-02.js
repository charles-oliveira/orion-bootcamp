import { obterBiografiaPorIdFuncional, obterNomePorIdFuncional } from './funcional.js';
import { excluirItemPorIdImperativo, atualizarItemPorIdImperativo } from './imperativo.js';
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
        excluirItemPorIdImperativo(id);
        updateResults('', '', 'Item excluído', '');
    });
    updateItemButton.addEventListener('click', () => {
        const id = parseInt(idInput.value);
        atualizarItemPorIdImperativo(id, 'Novo nome', 'Nova bio');
        updateResults('', '', '', 'Item atualizado');
    });
});
