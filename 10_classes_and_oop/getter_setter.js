class User {
    constructor(email, pass) {
        this.email = email;
        this.pass = pass;
    }

    get email() {
        return this._email.toUpperCase();
    }

    set email(val) {
        this._email = val;
    }

    get pass() {
        return `${this._pass}abir`;
    }

    set pass(val) {
        this._pass = val;
    }
}


const abir = new User('abir@gmail.com', 'asdasda')
console.log(abir.email);
console.log(abir.pass);
