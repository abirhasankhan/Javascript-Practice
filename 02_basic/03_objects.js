// singleton
// Object.create


// Object literals


const mySym = Symbol("key1")

const JsUser = {
    name: "Abir",
    "full name": "Abir Khan",
    [mySym]: "mykey1",
    age: 24,
    location: "Dhaka",
    email: "abir@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Sunday", "Monday"]
}

console.log(JsUser.name);
console.log(JsUser["name"]);
console.log(JsUser["full name"]);
console.log(JsUser[mySym]);

JsUser.email = "khan@gmail.com"
// Object.freeze(JsUser) // freeze the object

console.log(JsUser["email"]);
console.log(JsUser);


JsUser.greeting = function(){
    console.log(`hello jS user ${this.name}`);
}

// console.log(JsUser.greeting());
JsUser.greeting()