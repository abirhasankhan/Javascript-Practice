class User {
    constructor(username){
        this.username = username;
    }

    logMe(){
        console.log(`Usernmae is ${this.username}`);
    }
}

class Teacher extends User {
    constructor(username, email, pass){
        super(username);
        this.email = email;
        this.pass = pass;
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const user1 = new Teacher("abir", "abir@gmail.com", "123")
user1.addCourse();

const user2 = new User("hasan");
user2.logMe();

console.log(user1 === user2);
console.log(user1 instanceof User);


