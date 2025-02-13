## JS is single threaded

## Execution context------------------------------------------------------------------------
1. Global execution context [this]
2. Functional execution context
3. Eval execution context

# Js code runs in two phases:------------------------------------------------------------------------
1. Memory create phase / creation phase / Memory phase
2. Execution phase

## Steps to execute a JS code:------------------------------------------------------------------------
1. Global execution: The value of `this` keyword is set to Global Execution Context (which is an empty Object in NODE environment & window object in browser environment)
2. Memory phase: During this phase, JS engine scans the code and assigns memory for the variable & initialize values for the variables , functions, etc.. For variables they are 'undefined' and for functions they are set to their function definition
3. Execution phase: After the creation phase completed, the execution phase begins where actual values of the variables are set. And when the functions are called it creates a new 'Functional Execution' context which consists of two phases (they works same as explained above but only for the particular function scope):
    1. Memory phase 
    2. Execution phase 
    The return value of the 'Function Execution' context is passed to the Global Execution Context.

## Ex:------------------------------------------------------------------------
let val1 = 10, val2 = 5;
function addNum (num1 , num2){
    let total = num1 + num2;
    return total;
}
let result1 = addNum(val1 , val2);
let result2 = addNum(10 , 2);

## Step by step execution------------------------------------------------------------------------
1. Global execution => this
2. Memory phase => [val1 = undefined, val2 = undefined, addNum = defination, result1 = undefined, result2 = undefined]
3. Execution phase => [val1 = 10, val2 = 5, result1 = addNum => create Functional execution context(create new variable environment + execution thread)]
    1. Memory phase => [val1 = undefined, val2 = undefined, total = undefined]
    2. Execution context = > [num1 = 10, num2 = 5, total = 15]
    return this total to global execution context.
    After this the 2nd execution context will be deleted.
[result1 = 15,  result2 = addNum => create functional execution context(create new variable environment + execution thread)]
    1. Memory phase => [num1 = 10,  num2 = 2]
    1. Execution phase => [num1 = 10,  num2 = 2, total = 12]
    return this total to global execution context.
    After this the 3rd execution context will be deleted.


## Call Stack: 
- JavaScript uses a Call Stack to track the functions in a program. The call stack works on the Last In, First Out (LIFO) principle. This means that the most recently called function will be the first to be completed. Whenever a function is called, a new frame is added to the top of the stack.