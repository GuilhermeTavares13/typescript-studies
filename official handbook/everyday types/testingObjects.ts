function printingObject(person: {id: number, name: string, address?: string}) { // ? mark tells to the compiler address sometimes can be undefined
    console.log(person.id);
    console.log(person.name);
    
    if (person.address !== undefined) {
        console.log(person.address);
    }
}

printingObject({id: 1, name: 'peter park', address: 'far from home'});
printingObject({id: 2, name: 'gamora'});