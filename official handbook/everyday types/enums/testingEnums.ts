enum numbers {
    one = 1,
    two,
    three,
    four
}

console.log(numbers.two);

enum countFromZero {
    zero,
    one,
    two,
    three
}

console.log(countFromZero.zero);
console.log(countFromZero.two);


enum UserAccepted {
    no,
    yes
}

function handleUserInput(userInput: UserAccepted) {
    console.log(userInput === UserAccepted.yes ? 'User accepted' : 'User declined');
}

handleUserInput(UserAccepted.no);

enum GameOfThrones {
    Book1 = "A Guerra dos Tronos",
    Book2 = "A Fúria dos Reis",
    Book3 = "A Tormenta de Espadas",
    Book4 = "O Fetim dos Corvos",
    Book5 = "A Dança dos Dragões"
}

console.log(GameOfThrones.Book4);


// Heterogeneous enums
// Heterogeneous enums aren't recommended
enum Name {
    RealName = 42,
    NormalPeopleName = 'Maria'
}

console.log(Name.RealName);


enum FileAccess {
    // 1 -> 10 
    Read = 1 << 1,
    // 1 -> 100 
    Write = 1 << 2,
    // 1 -> 1000 8  4  2  1
    Update = 1 << 3,
    G = "123".length
}

console.log(FileAccess.Write);
console.log(FileAccess.Read);
console.log(FileAccess.G);
console.log(FileAccess.Update);