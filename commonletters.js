//with common letter
//here I am searching/grouping the words with respect to userInput. 
//It matches the similar words and create an array of matching words


function createResult() {
  let result = [];
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
