// 1.4 Palindrome Permutation
// Write a function to check if it is a permuation of a palindrome.

const palindrome = (str) => {
  let charMap = new Map();
  for(let i=0; i <str.length; i++){
    if(charMap.get(str[i])) {
      charMap.delete(str[i]);
    } else {
      charMap.set(str[i], 1);
    }
  }
  if(str.length%2 === 0 && charMap.size === 0 ||
    str.length%2 === 1 && charMap.size === 1) {
    return true;
  }
  return false;
}

let x = 'racecar';
console.log(palindrome(x));
