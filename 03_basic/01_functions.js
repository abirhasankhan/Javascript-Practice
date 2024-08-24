
function sayMyName(){
    console.log("A");
    console.log("b");
    console.log("i");
    console.log("r");

}

// sayMyName()

function addTwoNumbers(num1, num2){

    return num1 + num2;
}

const result =  addTwoNumbers(5, 6)

// console.log(result);

function loginUserMessage(username){

    if(!username){
        console.log("enter user name");
        return
    }

    return `${username} just logged in`
}

// console.log(loginUserMessage("Abir")); 

// console.log(loginUserMessage()); 

// for adding multiple number
function calculatedCartPrice(...num1){

    return num1
}

// console.log(calculatedCartPrice(200, 400, 500, 5000))

const user = {
    username: "Abir",
    price: 122
}

function handleObject(anyObjet){

    console.log(`username is ${anyObjet.username} and price is ${anyObjet.price}`);
}

// handleObject(user);

handleObject({
    username: "same",
    price: 200
});

const myNewArray = [200, 500, 690]

function return2ndValue(getArray){

    return getArray[0]
}

console.log(return2ndValue(myNewArray));
