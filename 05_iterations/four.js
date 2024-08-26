// ------------- for-In loop --------------------------

const myObj = {

    js: 'JavaScript',
    cpp: 'C++',
    rb: 'Ruby',
    py: 'Python'
}

// this will retrieve key from object
for (const key in myObj) {
    
    console.log(key);
    
}

// this will retrieve value from object
for (const key in myObj) {
    
    console.log(myObj[key]);
    
}

for (const key in myObj) {
    
    console.log(`${key} shortcut is for ${myObj[key]}`);
    
}

const programming = ['js', 'rb', 'py', 'java', 'cpp'];

for (const key in programming) {
    
    console.log(programming[key]);
    
}