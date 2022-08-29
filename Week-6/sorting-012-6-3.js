function sorting(arr) {
    let a=0,b=0;
    for (let i = 0; i <= arr.length-1; i++) {
      if (arr[i] == 0) {
        a += 1;
      }
      else if (arr[i] == 1) {
        b += 1;
      }
    }
  
    for (let i = 0; i <= arr.length-1; i++){
      if (a > 0) {
        arr[i] = 0;
        a -= 1;
      }
      else if (b > 0) {
        arr[i] = 1;
        b -= 1;
      }
      else {
        arr[i] = 2;
      }
    }
  
    return arr;
  }
  
  console.log(sorting([0,2,1,2,0]));
  