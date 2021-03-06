"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// NOTE: This code has not been converted to TypeScript yet
const arrays_js_1 = __importDefault(require("./utilities/arrays.js"));
const numbers_js_1 = __importDefault(require("./utilities/numbers.js"));
const strings_js_1 = __importDefault(require("./utilities/strings.js"));
const numArr = [3, 4, 5, 6];
const wordArr = ['cat', 'dog', 'rabbit', 'bird'];
const arrSum = arrays_js_1.default.addArr(numArr);
const mixArr = arrays_js_1.default.concatArr(numArr, wordArr);
const myNum = 15 % 2;
// results of function calls
console.log(arrays_js_1.default.cut3(mixArr));
console.log(numbers_js_1.default.sum(arrSum, myNum));
console.log(strings_js_1.default.capitalize('the quick brown fox'));
console.log(numbers_js_1.default.multiply(parseInt('5'), 8));
console.log(arrays_js_1.default.lgNum(numArr));
