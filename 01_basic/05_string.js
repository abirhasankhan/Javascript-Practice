const name = "abir";
const repoCount = 50;

// console.log( name + repoCount + " Valure");

console.log(`Hello my name is ${name} nad my repo count is ${repoCount}`);


const gameName = new String("Abir_khan");

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf("i"));


const newString = gameName.substring(0,4);
console.log(newString);


const anotherString = gameName.slice(-8,4);
console.log(anotherString);


const newStringOne = "      khan        "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://abirkhan.com/abir%20khan";

console.log(url.replace("%20", "-"));

console.log(url.includes("tanmoy"));

console.log(gameName.split("_"));
