/*
JS data object repesents a single moment in time in a platform-independent Format. It begins from January 1, 1970, UTC. It represents milisecond

# Months starts from 0 in JS
*/

let myDate = new Date();
console.log(typeof myDate); //Object

//Date method--------------------------------------------------------
console.log(myDate); //2024-07-03T17:35:52.893Z
console.log(myDate.toString()); //Wed Jul 03 2024 23:05:52 GMT+0530 (India Standard Time)
console.log(myDate.toLocaleString()); //3/7/2024, 11:07:49 pm
console.log(
  myDate.toLocaleString("default", {
    weekday: "short", //Wed
    weekday: "long", //Wednesday
    weekday: "narrow", //W
  })
); //Costomization of output
console.log(myDate.toDateString()); //Wed Jul 03 2024
console.log(myDate.toLocaleDateString()); //3/7/2024
console.log(myDate.toISOString()); //2024-07-03T17:37:03.085Z

//Creation of date----------------------------------------------------
//Date(year,month,day,hour,minute)

// Method 1
let date = new Date(2023, 0, 23); //Create a date
console.log(date.toDateString()); //Mon Jan 23 2023

//Method 2
let date1 = new Date(2023, 0, 23, 5, 3);
console.log(date1.toLocaleString()); //23/1/2023, 5:03:00 am

//Method 3 [Date("YYYY-MM-DD")]
let date2 = new Date("2024-00-14"); //Here months starts with 1
console.log(date2.toLocaleString());

//Method 3 [Date("DD-MM-YYYY")]
let date3 = new Date("09-04-2003"); //Here months starts with 1
// console.log(date3.toLocaleString());

//Timestamp------------------------------------------------------------
let myTimeStamp = Date.now();
console.log(myTimeStamp); //print milisecond
console.log(date3.getTime()); //convert date into time
console.log(Math.floor(myTimeStamp / 1000)); //convert into second from ms
