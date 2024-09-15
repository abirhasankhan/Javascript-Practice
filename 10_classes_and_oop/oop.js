const user = {
    username: "Abir",
    loginCount: 5,
    singedIn: true,

    getUserDetails: function () {
        // console.log("Got user details from DB");
        // console.log(`Username: ${this.username}`);
        console.log(this);
        
        
    }
}

// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this);

function User(username, loginCount, isLoggedIn) {
    this.username = username;    
    this.loginCount = loginCount;
    this.isSignedIn = isLoggedIn;

    this.greeting = function () {
        console.log(`Welcome ${this.username}`);
    }

    return this;
}

const userOne = new User("Abir", 5, true);
const userTwo = new User("Sam", 6, false);

console.log(userOne.constructor);
// console.log(userTwo);

