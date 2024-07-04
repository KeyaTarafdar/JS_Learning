/*
{} => Scope
# let, const => block scope
# var => global scope

## Global Scope is different in browser & node environment
*/

{
  let a = 10;
  const b = 20;
  var c = 30;
}

// console.log(a); //error
// console.log(b); //error
console.log(c); //30

// Problem with var
var x = 10;
{
  var x = 100;
}
console.log(x); //100

// Nested scope------------------------------------------------------------------------
/*
# Inner block can access all the variables of Outer block
*/
function one() {
  const username = "keya";
  function two() {
    const website = "youtube";
    console.log(username);
  }
  //   console.log(website); // error
  two();
}
one();


