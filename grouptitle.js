let title = terms;

function groupTitle() {
  let groupTerms = [];
  for (i = 0; i < terms.length; i++) {
    let singleArray = [];
    title.forEach((item, index) => {
      if (compareInput(terms[i], item)) {
        singleArray.push(item);
      }
    });
    groupTerms.push(singleArray);
  }

  let uniqueArray = removeDuplicate(groupTerms);
  let userInput = prompt("Enter the word");

  console.log(uniqueArray);

  let resultArray = [];
  uniqueArray.find((item) => {
   item.forEach(element => {
      if(element === userInput){
       resultArray= item;
      } 
    });
  });
  console.log(resultArray);
}

function removeDuplicate(groupTerms) {
  return groupTerms.filter((item) => !(groupTerms[item] = item in groupTerms));
}

function compareInput(string1, string2) {
  return new Set(string1).size === new Set(string1 + string2).size;
}
