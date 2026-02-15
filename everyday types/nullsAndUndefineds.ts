function doSomething(x: string | null) {
    if(x === null) {
        // something
    } else {
        console.log(x.toUpperCase())
    }
}

function doSomething2(x?: string | null) { // ? means it can be undefined as well
    console.log(x!.toUpperCase()); // ! allows to not handle undefined or null despite the possibility
}