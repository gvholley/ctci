// 1.5 One Away
// Given two strings, write a function to chek if they are one edit or zero edits away

var oneAway = function(string1, string2) {
  // insert a char for str1 -> remove a char for str2
  var checkOneMissing = function(first, second) {
    if (first.length !== second.length - 1) {
      return false;
    } else {
      var mulligan = false;
      var fP = 0; // first Pointer
      var sP = 0; // second Pointer
      while (fP < first.length) {
        if (first[fP] !== second[sP]) {
          if (mulligan) {
            return false;
          } else {
            mulligan = true;
            sP++; // second length is longer
          }
        } else {
          fP++;
          sP++;
        }
      }
      return true;
    }
  };
