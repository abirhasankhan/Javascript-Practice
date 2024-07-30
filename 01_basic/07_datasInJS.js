// Dates

let myDate = new Date();
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(myDate.toISOString());

console.log(typeof myDate);

// let myCreatedDate = new Date(2023, 0, 23);

let myCreatedDate = new Date("2013-01-14");

console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now();

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime()); // convert to mili-sec

// console.log(Math.floor(Date.now() / 1000));


let newDate = new Date();
console.log(newDate);


newDate.toLocaleDateString('default', {
    weekday: "long"
})