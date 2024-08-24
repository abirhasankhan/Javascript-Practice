// if

const inUserLogedIn = true;
const temp = 41;

if ( temp < 50 ) {

    console.log("less then 50");
}

if ( 2 == "2" ) {
    console.log("executed");
}

if ( 2 === "2" ) {
    console.log("executed");
} else{
    console.log("type is different");
}
// <, >, <=, >=, ==, === (this check the type also), !=, !

const score = 200;

if ( score > 100) {

    let power = "fly";
    console.log( `User power: ${power}` );
}

const balance = 1000;

// if ( balance > 500) console.log("test");

if ( balance < 500 ) {

    console.log("less than 500");

} else if ( balance < 700 ) {

    console.log("less than 700");

} else {

    console.log("less than 1200");

}


const userLoggedIn = true;
const debitCard = true;
const deloggedInFromGoogle = false;
const deloggedInFromEmail= true;



if ( userLoggedIn && debitCard) {

    console.log("Allow to buy course");
}

if ( deloggedInFromGoogle || deloggedInFromEmail) {

    console.log("user logged in");
}



