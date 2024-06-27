"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.multiply = exports.mul = exports.subtraction = exports.sub = exports.addition = exports.add = void 0;
function add(num1, num2) {
    var result = num1 + num2;
    return "addition ".concat(result);
}
exports.add = add;
var addition = "addition is done";
exports.addition = addition;
function sub(num1, num2) {
    var result = num1 - num2;
    return "subtraction ".concat(result);
}
exports.sub = sub;
var subtraction = "subtraction is done";
exports.subtraction = subtraction;
function mul(num1, num2) {
    var result = num1 * num2;
    return "multiplication ".concat(result);
}
exports.default = mul;
exports.mul = mul;
var multiply = "multiplication is done";
exports.multiply = multiply;
// doing export default and named export in 1 program
