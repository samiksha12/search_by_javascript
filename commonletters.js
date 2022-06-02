//with common letters
let terms = ["spdee","speed", "shape", "spede", "age", "aeg", "tiger", "triger"];
const userInput=prompt("Enter the word");
let result = [];

for (i = 0; i < terms.length; i++) {
  if(compareInput(terms[i], userInput)){
      result.push(terms[i]);
  }
}

function compareInput(string1, string2) {
  return new Set(string1).size === new Set(string1 + string2).size;
}
console.log(result);