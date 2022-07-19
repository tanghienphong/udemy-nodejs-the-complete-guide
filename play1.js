const person = {
    name: 'Max',
    age: 29,
    greet: () => {
        console.log('Hi, I am ' + this.name);
    },
    greet1() {
        console.log('Hi, I am ' + this.name);
    }
};

console.log(person);

const copyiedPerson = { ...person };

console.log(copyiedPerson);

const hobbies = ['Sports', 'Cooking'];

for (let hobby of hobbies) {
    console.log(hobby);
}

console.log(hobbies.map(hobby => {
    return 'Hobby: ' + hobby;
}));

console.log(hobbies);

hobbies.push('Programming');

console.log(hobbies);

// copy array
const copiedArray = hobbies.slice();
console.log(copiedArray);

// copy array 2 , spread operation
const copiedArray1 = [...hobbies];
console.log(copiedArray1);


// rest operation
const toArray = (...args) => {
    return args;
}
console.log(toArray(1,2,3,4));