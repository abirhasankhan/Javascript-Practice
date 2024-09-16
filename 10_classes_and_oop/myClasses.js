// ES6

class User {
    constructor(username, email, pass){
        this.username = username;
        this.email = email;
        this.pass = pass;
    }

    encryptPassword(){
        return `${this.pass}abc`
    }

    changeUsername(){
        return `${this.username.toUpperCase()}`
    }
}

const abir = new User("abir", "abir@gmail.com", "123")

console.log(abir.encryptPassword());
console.log(abir.changeUsername());


/* behind the scene

function User(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password
}

User.prototype.encryptPassword = function(){
    return `${this.password}abc`
}
User.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}


const tea = new User("tea", "tea@gmail.com", "123")

console.log(tea.encryptPassword());
console.log(tea.changeUsername());

*/