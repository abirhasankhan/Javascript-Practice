// const tinderUser =  new Object(); // singleton object

const tinderUser =  {}; // non-singleton object

tinderUser.id = "123abc";
tinderUser.name = "Abir";
tinderUser.isLogedIn = false;

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullName: {
        userFullName: {
            firstName: "Abir",
            lastName: "Khan"
        }
    }
}

// console.log(regularUser.fullName.userFullName.firstName);


const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj3 = {5: "a", 6: "b"}


// const obj4 = Object.assign({}, obj1, obj2, obj3)

const obj4 = {...obj1, ...obj2, ...obj3}


// console.log(obj4);

const user = [
    {
        id: 1,
        email: "a@gmail.com"
    },
    {
        id: 2,
        email: "a@gmail.com"

    }
]

user[1].email

// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLogedIn'));


const course = {
    courseNmae: "Js in Bangla",
    price: 999,
    courseInstructor: "Abir"
}

const {courseInstructor} = course
console.log(courseInstructor);

// alternative way
const {courseInstructor: instructor} = course 
console.log(instructor);

