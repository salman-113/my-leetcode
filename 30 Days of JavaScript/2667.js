// This problem is about Closure, thats why write these codes below 
// below example is a closure


// const outerFunction = () => {
//     const variable = "which declared outside of the function"
//     function someTypeOfFunction(y) {
//         console.log(y);
//         console.log(variable);

//     }
//     return someTypeOfFunction;
// }
// const closure = outerFunction()
// closure("Hello")


//answer of 2667

var createHelloWorld = function() {
    return function(...args){
        return "Hello World"
    }
}

const f = createHelloWorld()
console.log(f())




