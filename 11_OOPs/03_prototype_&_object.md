# Js is prototypal language

# All things in JS are Object 
- Array, String, Function

# New Keyword
Here is what happens behind the scene when the new keyword is used: 
1. A new object is created: the new keyword initiates the creation of a new javascript object. 

2. A prototype is linked: the newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

3. The constructor is called: the constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value. 

4. The new object is returned: after the constructor function has been called, if it doesn't return a non-primitive value (object, array, function etc.) the newly created object is returned.