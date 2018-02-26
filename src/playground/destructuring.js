const person = {
    //name: 'Ivan',
    age: 39,
    location: {
        city: 'Khabarovsk',
        temp: -25
    }
};

const {name: firstName = 'Anonymous', age} = person;

// const {city, temp: temperature} = person.location;
//
// console.log(`${firstName} is ${age}`);
//
// if (temperature && city) {
//     console.log(`It's ${temperature} in ${city}`);
// }

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         //name: 'Penguin'
//     }
// };
//
// const {name: publisherName = 'Self published' } = book.publisher;
//
// console.log(publisherName);
//

const address = [
    '1299 s Juniper street',
    'Khabarovsk',
    // 'Khabarovsk region',
    // '680000'
];

const [, city, state = 'NY'] = address;

console.log(`You are in ${city} in ${state}`);

const item = [
  'coffee (hot)', '$2.00', '$2.50', '$2.75'
];

const [itemName,,medium] = item;

console.log(`A medium ${itemName} costs ${medium}`);
