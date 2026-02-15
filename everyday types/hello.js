function greet(person, date) {
    console.log("Hello ".concat(person, ", today is ").concat(date.toDateString(), "!"));
}
greet("Brendan", new Date()); // Using Date() only would return a string, than yield a compiler error
function sumOfTwoNumbers(a, b) {
    console.log(a + b);
}
sumOfTwoNumbers(1, 2); // Will yield a compiler error, and would not create a .js file if --noEmitOnError flag is provided
var address = 'São Paulo'; // types can be infered as well, in this case typescript is intelligent enough to know this is a string, on these cases it is good to omit the type so
var address2 = 'São Paulo';
// target flag allow us to define the version of ecmascript, to avoid downlevelling when compiling
// on official docs, on this time of me typing this, typescript downlevel to ES5, which it is quite old I must say
var anyType = 67; // A type any is allowed, it serves the purpose to allow any value to a variable
// The flag noImplicitAny still allows the anyType to compile, because anyType is explicit
// But the code below won't:
var number = 30;
number = '30';
