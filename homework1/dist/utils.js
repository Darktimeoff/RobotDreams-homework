"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRandomInt = exports.makeid = void 0;
function makeid(length) {
    let result = '';
    const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    // tslint:disable-next-line
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}
exports.makeid = makeid;
function getRandomInt(minV, maxV) {
    const min = Math.ceil(minV);
    const max = Math.floor(maxV);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
exports.getRandomInt = getRandomInt;
//# sourceMappingURL=utils.js.map