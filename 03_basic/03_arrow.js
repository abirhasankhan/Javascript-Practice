const user = {
    username: "Abir",
    price: 122,

    welcomeMessage: function(){
        console.log(`${this.username} ,  welcome to website`);
        // console.log(this);

    }

}

user.welcomeMessage()
user.username = "sam"
user.welcomeMessage()

// console.log(this);

/*
function tea(){
    let username = "Abir"
    console.log(this.username);
}

tea()
*/

/*
const tea = function(){
    let username = "Abir"
    console.log(this.username);
}

tea()
*/

const tea = () => {
    let username = "Abir"
    console.log(this);
}

// tea()

const addTwo = (num1, num2) => {

    return num1+ num2
}

// const addTwo = (num1, num2) =>  num1+ num2 


// const addTwo = (num1, num2) => ( num1+ num2 )

const addPbj = (num1, num2) => ({
    username: "Abir"
})

console.log(addPbj(5,7));

const myArray = [2, 3, 5, 8, 9]

// myArray.forEach(() => {})

