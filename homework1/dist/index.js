"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("./utils");
const createItem = (name, price) => ({
    name,
    price,
});
const createList = (length = 5) => {
    const list = [];
    // tslint:disable-next-line
    for (let i = 0; i < length; i++) {
        list[i] = createItem(utils_1.makeid(10), utils_1.getRandomInt(0, 10000));
    }
    return list;
};
console.time('createList');
const products = createList(1000);
console.timeEnd('createList');
console.time('getElement');
const item50 = products[49];
console.timeEnd('getElement');
//# sourceMappingURL=index.js.map