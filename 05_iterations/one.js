// for loop

for (let index = 0; index < 10; index++) {

    const element = index;

    if (element == 5){
        // console.log("5 is best number");
    }

    // console.log(element);
    
}


for (let i = 0; i < 10; i++) {

    // console.log(`outer loop value: ${i}`);

    for (let j = 0; j < i; j++) {

        // console.log(`inner loop value: ${j} & outer loop value: ${i}`);
        
    }
    
}


let myArray = ["flash", 'batman', "superman"];

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    // console.log(element);
    
}



// brake and contine

for (let index = 1; index <= 20; index++) {

    if (index == 5){
        console.log("Detected 5");
        // break; // Detected 5 and it will break the loop
        continue;  // 5 will not print. continue skip the 5
    }
    
    console.log(`value of index is ${index}`);
    
}