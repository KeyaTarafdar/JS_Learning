// FOR-OF => [Array, String, Map]

// On Array------------------------------------------------------------------------
const arr = [1, 2, 3, 4, 5];
for (const i of arr) {
  console.log(i);
}

// On String------------------------------------------------------------------------
const greeting = "hello worlds!";
for (const i of greeting) {
  console.log(i);
}

// On Map------------------------------------------------------------------------
// MAP =>
// [Map object holds key-value pairs and remembers the original insertion order of the keys]
// [Keys in Map is unique]
const map = new Map();
map.set("IN", "India");
map.set("USA", "United states of America");
map.set("FR", "France");
console.log(map);

for (const el of map) {
  console.log(el); //give result in the form of array => convert each entry in map into an array
}
for (const [key, value] of map) {
  console.log(key, ":-", value); //destructuring of output array
}

// Iteration of Object by For-Of loop is not possible