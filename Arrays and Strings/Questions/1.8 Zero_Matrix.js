function matrix(m) {
  //Create arrays to hold row and column positions
  var rows = [];
  var columns = [];
  for (r = 0; r < m.length; r++) {
    for (c = 0; c < m[r].length; c++) {
      if (m[r][c] === 0) {
        rows.push(r);
        columns.push(c);
      }
    }
  } //Loop through row array to replace with zeros
 rows.forEach((e, l) => {
    for (i = 0; i < m.length; i++) {
      for (j = 0; j < m[i].length; j++) {
        if (i === e) {
          m[i][j] = 0;
        }
      }
    }
  })   //Loop through column array to replace with zeros
   columns.forEach((e, l) => {
    for (i = 0; i < m.length; i++) {
      for (j = 0; j < m[i].length; j++) {
        if (j === e) {
          m[i][j] = 0;
        }
      }
    }
  })//Return our mutated matrix
return m;
}
