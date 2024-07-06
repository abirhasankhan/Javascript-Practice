// Primitive

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const outsideTemp = null;
let userEmail;

const id = Symbol("123");
const anotherId = Symbol("123");

console.log(id === anotherId);

const bigNumber = 215445488888888887877778886n


console.log(bigNumber);


// Reference (Non primitive)

// Array, Objects, functions

const heros = ["Superman", "Batman", "Spiderman"]

let myObj = {
            name: "Abir",
            aage: 24,
        }

const myFunction = function(){
    console.log("Hello world!");
}

myFunction();

console.log(typeof bigNumber);
console.log(typeof myObj);
console.log(typeof myFunction);



//---------------------------------------------------------------//

// Stack (Primitive), Heap (Non primitive)

let myYTname = "AceGaming";

let anotherName = myYTname;

anotherName = "AresGmaing"

console.log(myYTname);
console.log(anotherName);

let userOne = {
    email: "usera@gmail.com",
    upu: 12536,
}

console.log(userOne);

let userTwo = userOne;

userTwo.email = "usera@hooo.com";
console.log(userOne);
console.log(userTwo);




