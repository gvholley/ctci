// 1.3 URLify
// Write a method to replace all spaces in a string with '%20'
// Example: "Mr John Smith -> Mr%20John%20Smith"

const urlify = (str) => {
  const stringToArray = str.trim().split('');
  for(let i in stringToArray) {
    if(stringToArray[i] === " ") {
     stringToArray[i] = "%20"
    }
  }
  return stringToArray.join('');
}

 console.log(urlify("Mr John Smith"));
