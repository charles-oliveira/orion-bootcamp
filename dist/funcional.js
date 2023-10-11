"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateItemByIdFuncional = exports.deleteItemByIdFuncional = exports.getNameByIdFuncional = exports.getBioByIdFuncional = void 0;
const personalidades_1 = require("./personalidades");
const getBioByIdFuncional = (id) => {
    const item = personalidades_1.lista.find(obj => obj['id'] === id);
    return item ? item['bio'] : 'ID não encontrado';
};
exports.getBioByIdFuncional = getBioByIdFuncional;
const getNameByIdFuncional = (id) => {
    const item = personalidades_1.lista.find(obj => obj['id'] === id);
    return item ? item['name'] : 'ID não encontrado';
};
exports.getNameByIdFuncional = getNameByIdFuncional;
const deleteItemByIdFuncional = (id) => {
    const index = personalidades_1.lista.findIndex(obj => obj['id'] === id);
    if (index !== -1) {
        personalidades_1.lista.splice(index, 1);
    }
};
exports.deleteItemByIdFuncional = deleteItemByIdFuncional;
const updateItemByIdFuncional = (id, name, bio) => {
    const item = personalidades_1.lista.find(obj => obj['id'] === id);
    if (item) {
        if (name !== undefined) {
            item['name'] = name;
        }
        if (bio !== undefined) {
            item['bio'] = bio;
        }
    }
};
exports.updateItemByIdFuncional = updateItemByIdFuncional;
