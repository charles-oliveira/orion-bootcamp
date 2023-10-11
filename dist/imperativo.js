"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateItemByIdImperative = exports.deleteItemByIdImperative = exports.getNameByIdImperative = exports.getBioByIdImperative = void 0;
const personalidades_1 = require("./personalidades");
function getBioByIdImperative(id) {
    for (let i = 0; i < personalidades_1.lista.length; i++) {
        if (personalidades_1.lista[i]['id'] === id) {
            return personalidades_1.lista[i]['bio'];
        }
    }
    return 'ID não encontrado';
}
exports.getBioByIdImperative = getBioByIdImperative;
function getNameByIdImperative(id) {
    for (let i = 0; i < personalidades_1.lista.length; i++) {
        if (personalidades_1.lista[i]['id'] === id) {
            return personalidades_1.lista[i]['name'];
        }
    }
    return 'ID não encontrado';
}
exports.getNameByIdImperative = getNameByIdImperative;
function deleteItemByIdImperative(id) {
    for (let i = 0; i < personalidades_1.lista.length; i++) {
        if (personalidades_1.lista[i]['id'] === id) {
            personalidades_1.lista.splice(i, 1);
            break;
        }
    }
}
exports.deleteItemByIdImperative = deleteItemByIdImperative;
function updateItemByIdImperative(id, name, bio) {
    for (let i = 0; i < personalidades_1.lista.length; i++) {
        if (personalidades_1.lista[i]['id'] === id) {
            if (name !== undefined) {
                personalidades_1.lista[i]['name'] = name;
            }
            if (bio !== undefined) {
                personalidades_1.lista[i]['bio'] = bio;
            }
            break;
        }
    }
}
exports.updateItemByIdImperative = updateItemByIdImperative;
