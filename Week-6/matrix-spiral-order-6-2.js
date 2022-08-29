function spiralOrder(a) {
    let b = [];
    let m = a.length, n = a[0].length;
    let len = m*n;
    let count = 0;
    let i=0, j=0;
    for (let k=0; count<len; k++) {
      i = k;
      j = k;
  
      while ((j<n-1) || (i==k & j==k)) {
        if (a[i][j]!==undefined){
          b.push(a[i][j]);
          a[i][j] = undefined;
          count++;
        }
        j++;
      }
  
      while (i<m-1) {
        if (a[i][j]!==undefined) {
          b.push(a[i][j]);
          a[i][j] = undefined;
          count++;
        }
        i++;
  
      }
  
      while (j>k) {
        if (a[i][j]!==undefined) {
          b.push(a[i][j]);
          a[i][j] = undefined;
          count++;
        }
        j--;
      }
  
      while (i>k) {
        if (a[i][j]!==undefined) {
          b.push(a[i][j]);
          a[i][j] = undefined;
          count++;
        }
        i--;
      }
  
      m = m-1;
      n = n-1;
    }
    console.log(b);
  }
  
  spiralOrder([[1,2],[3,4]]);
  spiralOrder([[1,2,3], [4,5,6], [7,8,9], [10,11,12]])
  spiralOrder([[1,2,3,4], [5,6,7,8], [9,10,11,12], [13,14,15,16]]);
  spiralOrder([[1,2,3,4,5], [6,7,8,9,10], [11,12,13,14,15]]);
  spiralOrder([[1,2,3], [4,5,6],[7,8,9]]);
  