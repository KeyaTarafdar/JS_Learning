/* 
IF-------------------------------------
if(condition){
    code
} 
else{
    code
}
*/

const balance = 1000;
// Method 1
if (balance > 500) {
  console.log("test");
  console.log("test2");
}
// Method 2 [very unreadable code] [by ',' we can write multiple statwments within if]
if (balance > 500) console.log("test"), console.log(test2);



/*
SWITCH--------------------------------
switch(key){
    case value:
        CODE
        break;

    case value:
        CODE
        break;

    default:
        CODE
        break;
}

value may be Number, String, Boolean
*/

