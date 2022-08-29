function maxSum(a) {
    let cur_sum = 0;
    let max_sum = Number.MIN_VALUE;
    for (i in a) {
      if (cur_sum+a[i]>0){
        cur_sum = cur_sum + a[i];
      }
      else {
        cur_sum = 0;
      }
      if (cur_sum > max_sum) {
        max_sum = cur_sum;
      }
    }
    return max_sum;
  }
  
  console.log(maxSum([1, 2, 3, 4, -10]));
  