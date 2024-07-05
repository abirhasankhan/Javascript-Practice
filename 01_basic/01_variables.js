const accountId = 14409; // can't change
let accountEmail = "test@gmail.com";
var accountPass = "12345"; // not going to use that
acoountCity = "Dhaka";
let accountState;

/*
Prefer not to use var
because of issuse in block scope and functional scope
*/

// accountId = 2; // not allowed

accountEmail = "abir@gmail.com";
accountPass = "987654";
acoountCity = "Demo City";

console.log(accountId);

console.log(accountId, accountEmail, accountPass, acoountCity, accountState);