// 1.2 Check Permutation
// Given two strings, write a method to decide if one is a permutation
// of the other.

let checkPermututation = function(a, b) {
  // if different lengths, return false
  if (a.length !== b.length) {
    return false;
  // else sort and compare
  } else {
    let sortA = a.split('').sort().join('');
    let sortB = b.split('').sort().join('');
    return sortA === sortB;
  }
};

console.log(checkPermutation('abc', 'abb'), true);
