function sayName(nameOfThePerson: string) {
    console.log(nameOfThePerson);
}

sayName('Guilherme');


function sayMyName(walterWhiteAlterEgo: string): boolean {
    return walterWhiteAlterEgo === 'heisenberg';
}


let heisenberg: boolean = sayMyName('heisenberg');

if (heisenberg) {
    console.log("You're goddamn right!");
} else {
    console.log("You gonna miss coca-cola!");
}


async function promiseFunction(): Promise<string> {
    return 'A promise function';
}

promiseFunction().then((result) => console.log(result)).catch(err => console.log(err));


const variousNumbers: Array<number> = [1,2,3,4,5];

let sum: number = 0;

// Types can be inferred here as well
variousNumbers.map((number) => sum += number);

console.log(sum);