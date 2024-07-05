/*
array.filter((variable)=> condition)
Filter function return values
*/

// On simple Array------------------------------------------------------------------------
const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newNums = myNums.filter((num) => num > 4); //Implicit return
console.log(newNums);

const newNums1 = myNums.filter((num) => {
  return num > 4; //Explicit return
});
console.log(newNums1);

// Replace filter by For-each------------------------------------------------------------------------
const newNums2 = [];
myNums.forEach((num) => {
  if (num > 4) {
    newNums2.push(num);
  }
});
console.log(newNums2);

// Using Filter on Array of Object------------------------------------------------------------------------
const books = [
  {
    title: "Book 1",
    genre: "Fiction",
    publish: 1981,
    edition: 2004,
  },
  {
    title: "Book 2",
    genre: "Non-Fiction",
    publish: 1992,
    edition: 2008,
  },
  {
    title: "Book 3",
    genre: "History",
    publish: 1999,
    edition: 2007,
  },
  {
    title: "Book 4",
    genre: "History",
    publish: 1986,
    edition: 1996,
  },
];
const userBooks=books.filter((bk)=>bk.genre==="History")
console.log(userBooks);