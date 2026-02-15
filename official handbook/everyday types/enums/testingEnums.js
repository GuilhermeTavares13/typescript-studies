var numbers;
(function (numbers) {
    numbers[numbers["one"] = 1] = "one";
    numbers[numbers["two"] = 2] = "two";
    numbers[numbers["three"] = 3] = "three";
    numbers[numbers["four"] = 4] = "four";
})(numbers || (numbers = {}));
console.log(numbers.two);
var countFromZero;
(function (countFromZero) {
    countFromZero[countFromZero["zero"] = 0] = "zero";
    countFromZero[countFromZero["one"] = 1] = "one";
    countFromZero[countFromZero["two"] = 2] = "two";
    countFromZero[countFromZero["three"] = 3] = "three";
})(countFromZero || (countFromZero = {}));
console.log(countFromZero.zero);
console.log(countFromZero.two);
var UserAccepted;
(function (UserAccepted) {
    UserAccepted[UserAccepted["no"] = 0] = "no";
    UserAccepted[UserAccepted["yes"] = 1] = "yes";
})(UserAccepted || (UserAccepted = {}));
function handleUserInput(userInput) {
    console.log(userInput === UserAccepted.yes ? 'User accepted' : 'User declined');
}
handleUserInput(UserAccepted.no);
var GameOfThrones;
(function (GameOfThrones) {
    GameOfThrones["Book1"] = "A Guerra dos Tronos";
    GameOfThrones["Book2"] = "A F\u00FAria dos Reis";
    GameOfThrones["Book3"] = "A Tormenta de Espadas";
    GameOfThrones["Book4"] = "O Fetim dos Corvos";
    GameOfThrones["Book5"] = "A Dan\u00E7a dos Drag\u00F5es";
})(GameOfThrones || (GameOfThrones = {}));
console.log(GameOfThrones.Book4);
// Heterogeneous enums
// Heterogeneous enums aren't recommended
var Name;
(function (Name) {
    Name[Name["RealName"] = 42] = "RealName";
    Name["NormalPeopleName"] = "Maria";
})(Name || (Name = {}));
console.log(Name.RealName);
var FileAccess;
(function (FileAccess) {
    // 1 -> 10 
    FileAccess[FileAccess["Read"] = 2] = "Read";
    // 1 -> 100 
    FileAccess[FileAccess["Write"] = 4] = "Write";
    // 1 -> 1000 8  4  2  1
    FileAccess[FileAccess["Update"] = 8] = "Update";
    FileAccess[FileAccess["G"] = "123".length] = "G";
})(FileAccess || (FileAccess = {}));
console.log(FileAccess.Write);
console.log(FileAccess.Read);
console.log(FileAccess.G);
console.log(FileAccess.Update);
