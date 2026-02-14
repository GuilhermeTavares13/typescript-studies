function greet(person: string, date: Date) {
    console.log(`Hello ${person}, today is ${date.toDateString()}!`);
}

greet("Brendan", new Date()); // Using Date() only would return a string, than yield a compiler error

function sumOfTwoNumbers(a: number, b: number) {
    console.log(a + b);
}

sumOfTwoNumbers(1, 2); // Will yield a compiler error, and would not create a .js file if --noEmitOnError flag is provided

const address = 'São Paulo'; // types can be infered as well, in this case typescript is intelligent enough to know this is a string, on these cases it is good to omit the type so

const address2: string = 'São Paulo';

// target flag allow us to define the version of ecmascript, to avoid downlevelling when compiling
// on official docs, on this time of me typing this, typescript downlevel to ES5, which it is quite old I must say

const anyType: any = 67; // A type any is allowed, it serves the purpose to allow any value to a variable

