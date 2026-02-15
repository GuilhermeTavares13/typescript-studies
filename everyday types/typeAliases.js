function namesTest(names) {
    if (typeof names === 'object') {
        names.map(function (name) { return console.log(name); });
    }
    else {
        console.log(names);
    }
}
namesTest('Yumi');
namesTest(['Clarice', 'Jó']);
var myLocation = { logitude: 8, latitude: 2 };
console.log(myLocation);
