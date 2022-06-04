let result = [];
let terms = [
  "duel",
  "dule",
  "speed",
  "spede",
  "deul",
  "cars",
  "racs",
  "shape",
  "shpea",
  "tiger",
  "triger"
];
function createResult() {
  let userInput = prompt("Enter the word");
  for (i = 0; i < terms.length; i++) {
    if (compareInput(terms[i], userInput)) {
      result.push(terms[i]);
    }
  }
  console.log(result);
}
function compareInput(string1, string2) {
  return new Set(string1).size === new Set(string1 + string2).size;
}

