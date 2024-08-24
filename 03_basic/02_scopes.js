// var c = 300
let a = 300

if(true){
    let a = 10
    const b = 20
    console.log("inner: ", a);
    
}

// console.log(a);
// console.log(b);

function one(){
    const username = "abir"

    function two(){
        const website = "youtue"
        console.log(username);
    }

    // console.log(website);
    
    two()
}

one()


if(true){
    const username = "Abir"
    if(username === "Abir"){
        const website = " youtube"
        console.log(username + website);
    }
    // console.log(website);
 
}

// console.log(username);

// +++++++++++++++++++ intersting +++++++++++++++++++++

function addOne(num){

    return num + 1
}

console.log(addOne(5));



const addTwo = function(num){

                return num + 1
            }
addTwo(15)