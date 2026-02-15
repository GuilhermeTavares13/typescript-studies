type ArrayStringOrString = Array<string> | string;

function namesTest(names: ArrayStringOrString) {
    if (typeof names === 'object') {
        names.map((name) => console.log(name));
    } else {
        console.log(names);
    }
}

namesTest('Yumi');
namesTest(['Clarice','Jó']);

type location = {
    logitude: number,
    latitude: number
}

const myLocation: location = {logitude: 8, latitude: 2};

console.log(myLocation);