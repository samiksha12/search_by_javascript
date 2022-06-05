//with initial letter
//here I am searching/grouping the words with respect to initial letter of userInput 
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
  ];
let groupTerms = {};

for (i = 0; i < terms.length; i++) {
  createGroupTermsKey(terms[i][0]);
  pushValueGroupTerms(terms[i][0], terms[i]);
}

function createGroupTermsKey(termInitial) {
  if (Object.keys(groupTerms).length == 0) {
    groupTerms[termInitial] = [];
  }
  if (!groupTerms.hasOwnProperty(termInitial)) {
    groupTerms[termInitial] = [];
  }
}

function pushValueGroupTerms(termInitial, term) {
  for (key in groupTerms) {
    if (key === termInitial) {
      groupTerms[termInitial].push(term);
    }
  }
}
const userInput=prompt("Enter the word");
searchTerms(userInput);

function searchTerms(userInput){
    console.log(groupTerms[userInput[0]]);
}

