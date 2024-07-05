// FOR-IN => [Object, Array]

// On Object------------------------------------------------------------------------
const obj = {
  js: "javascript",
  cpp: "C++",
  rb: "ruby",
  swift: "swift by apple",
};

for (const key in obj) {
  console.log(`${key} ahortcut is for ${obj[key]}`);
}

// On Array------------------------------------------------------------------------
const programming=["js","rb","py","java","cpp"];
for(const i in programming){
  console.log(i); //print keys of array => arrays key always starts from 0
  console.log(programming[i]); //print values
}

// Iteration of Map by For-Of loop is not possible