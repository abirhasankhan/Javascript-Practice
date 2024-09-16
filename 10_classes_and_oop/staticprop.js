class User {
    constructor(username) {
        this.username = username;
    }

    logMe() {
        console.log(`Usernmae: ${this.username}`);
    }

    static createId(){
        return `123`;
    }
}

const abir = new User("abir");
console.log(abir.createId());

class Teacher extends User {
    constructor(username, email) {
        super(username);
        this.email = email;
    }
}

const hasan = new Teacher('hasan', 'hasan@gmail.com')
hasan.logMe();
console.log(hasan.createId());

