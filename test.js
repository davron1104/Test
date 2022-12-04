'use strict';

const obj = {
    city: 'New-York',
    language: 'English',
    area: 'huge'
};
obj.example = 'some';
delete obj.city;
obj['root'] = 'hook';
console.log(obj);

JSON.stringify(obj);


const person1 = {
    name: 'Dilya',
    surname: 'Gazieva',
    age: 31,
    sons: {
        firstson: 'Farkhod',
        secondson: 'Farrrux'
    }
};

// const person2 = {
//     name: 'Davron',
//     surname: 'Gaziev',
//     age: 35
// }

// const person2 = Object.assign({}, person1);
// const person2 = {...person1};
const person2 = JSON.parse(JSON.stringify(person1));
person2.name = 'Oliya';
person2.age = 45;
person2.sons.firstson = "Firstson's name";
console.log(person1);
console.log(person2);
