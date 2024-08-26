
// ["", "", ""] string in array
// [{}, {}, {}] object in array

// ------------- for-Of loop --------------------------

const arr = [1, 2, 3, 4, 5];

for (const element of arr) {

    console.log(element);
}

const greeting = "hello world";


for (const element of greeting) {
    
    console.log(`Each char is ${element}`);
    
}


// Maps

const map = new Map();
map.set('BD', "Bangladesh");
map.set('USA', "United States of America");
map.set('IN', "India");

console.log(map);

for (const [key, value] of map) {
    
    console.log(key + " => " + value);
}

const myObj = {

    'game1': 'NFS',
    'game2': 'Batman'
}

// for-of will not work in Object
// for (const [key, value] of myObj) {
    
//     console.log(key + " => " + value);
    
// }