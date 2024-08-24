// Immediately Invoke Function Expressions (IIFE)

// named iife
(function tea(){
    console.log("DB connected");  
})();


// unnamed iife
( (name) => {
    console.log(`DB connected two ${name}`);  
})("abir");

