function setUserName(username){
    this.username = username;
    console.log('called');
    
}

function createUser(username, email, pass){

    setUserName.call(this, username);

    this.email = email;
    this.pass = pass;
}

const chai = new createUser('chai', 'chai@gmail,com', '123');

console.log(chai);
