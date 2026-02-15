var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function sayName(nameOfThePerson) {
    console.log(nameOfThePerson);
}
sayName('Guilherme');
function sayMyName(walterWhiteAlterEgo) {
    return walterWhiteAlterEgo === 'heisenberg';
}
let heisenberg = sayMyName('heisenberg');
if (heisenberg) {
    console.log("You're goddamn right!");
}
else {
    console.log("You gonna miss coca-cola!");
}
function promiseFunction() {
    return __awaiter(this, void 0, void 0, function* () {
        return 'A promise function';
    });
}
promiseFunction().then((result) => console.log(result)).catch(err => console.log(err));
const variousNumbers = [1, 2, 3, 4, 5];
let sum = 0;
// Types can be inferred here as well
variousNumbers.map((number) => sum += number);
console.log(sum);
