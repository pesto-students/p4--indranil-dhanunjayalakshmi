function difference(arr, b) {
    const set1 =  new Set();
    for (i in arr) {
      set1.add(arr[i]);
    }
    for (i in arr) {
      if ((set1.has(b+arr[i])) || (set1.has(arr[i]-b))) {
          return 1;
        }
    }
    return 0;
  }
  
  console.log(difference([5, 10, 3, 2, 50, 80], 78));
  