// let myName = "Abir      ";

// console.log(myName.trim().length);


let myHeros = ["thor", "spiderman"];

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
};

Object.prototype.abir = function(){
    console.log(`abir is present in all objectheroPower`);
    
}

Array.prototype.arraryAbir = function () {
    console.log(`abir in arry power`);
};

// heroPower.abir()

myHeros.abir();
myHeros.arraryAbir();
// heroPower.arraryAbir();

// inheritance

const user = {
    name: "Abir",
    email: "Abir@gmail.com"
}


const teacher = {
    makeVideo: true
}

const teachingSupport = {
    isAvailable: false
}

const taSupport = {
    makeAssignment: "JS asssignment",
    fullTime: true,
    __proto__: teachingSupport
};

teacher.__proto__ = user


// modern syntax

Object.setPrototypeOf(teachingSupport, teacher)


let anotherUserNmae = "Abir        "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`true lenght is: ${this.trim().length}`);
}

anotherUserNmae.trueLength();

"hasn     ".trueLength();
"iceTea".trueLength();