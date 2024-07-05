/* 
FOR-EACH => [Array] => It is a higher order function
# name.forEach(callback function) [Callback function doesn't have any name]
# For-each loop doesn't return any value
*/

// For Simple Array------------------------------------------------------------------------
const coding = ["js", "rb", "py", "java", "cpp"];

// By using Normal function [Method 1
coding.forEach(function (item) {
  console.log(item);
});

// By using Arrow function [Method 2
coding.forEach((item) => {
  console.log(item);
});

// Method 3
function printMe(item) {
  console.log(item);
}
coding.forEach(printMe);

coding.forEach((item, index, arr) => {
  console.log(item, index, arr);
});

// On Array of Object------------------------------------------------------------------------
const myCoding = [
  {
    languageName: "javascript",
    languageFileName: "js",
  },
  {
    languageName: "java",
    languageFileName: "java",
  },
  {
    languageName: "python",
    languageFileName: "py",
  },
];
myCoding.forEach((item) => {
  console.log(item);
  console.log(item.languageFileName);
});

