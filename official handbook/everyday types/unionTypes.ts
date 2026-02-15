function fullAddress(address: string | number) {
    if (typeof address === 'string') {
        console.log(address.toUpperCase());
    } else {
        console.log(address);
    }
}

fullAddress('Baker Street 221b');
fullAddress(8); // for a boy who lives in a barrel


function namesTest(names: Array<string> | string) {
    if (typeof names === 'object') {
        names.map((name) => console.log(name));
    } else {
        console.log(names);
    }
}

namesTest('Thiago');
namesTest(['guilherme','maria']);