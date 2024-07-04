/* 
IIFE : Immediately Invoked Function Expressions
()() => 1st () for function defination & 2nd () for function execution

# After 2nd () ';' is mandatory in case of more than one IIFE

# To remove global scope polution, we use IIFE
*/

// IIFE with normal funtion
(function f1(){ // Named IIFE
    console.log(`DB connected`);
})();

// IIFE with arrow function
(()=>{ // Unnamed IIFE
    console.log(`DB connected two`);
})();

// IIFE with parameter
((name)=>{
    console.log(`DB connected two ${name}`);
})("Keya");
