// const obj = {
//     name: 'Joe',
//     color: 'blue',
//     age: 45,
//     height: '60"',
//     glasses: true,
// };

const arr = [
    'joe',
    'blue',
    45,
    '60"',
    true,
];

arr.someRandomProperty = 'blah';

for (const key in arr) {
    console.log(key, arr[key]);
}

arr.forEach(e => console.log(e));


// Array.prototype.reduce

const array = [
    'What',
    'are',
    'you',
    'doing',
    'tomorrow?',
];

const sum = array.reduce((total, element, /* i, arr */) => {
    return total + ' ' + element;
}, '');//?


const filtered = array.reduce((resultArray, e) => {
    if (e >= 4) {
        resultArray.push(e);
    }
    
    return resultArray;
}, []);//?

const mapped = array.reduce((resultArray, e) => {
    resultArray.push(e.toUpperCase());
    
    return resultArray;
}, []);//?

array

