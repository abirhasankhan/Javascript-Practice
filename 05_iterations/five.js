const coding = ['js', 'rb', 'py', 'java', 'cpp'];

coding.forEach(element => {
    
    console.log(element);
    
});

function printLang(item){

    console.log(item);
}

coding.forEach(printLang);

coding.forEach( (item, index, array) => {

    console.log(item, index, array);

});

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    
    console.log(item.languageName + " " + item.languageFileName);
} )