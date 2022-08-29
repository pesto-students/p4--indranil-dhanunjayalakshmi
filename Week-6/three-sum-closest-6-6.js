function threeSumClosest(nums, target) {
    let len = nums.length;
    let result = nums[0]+nums[1]+nums[2];
    let sum = 0;
    let l=0, r=0;
    nums.sort((a,b) => (a-b));
    for (let i=0; i<len-2; i++) {
      if(i>0 && nums[i]===nums[i-1]) continue;
      l = i+1;
      r = len-1;
      while (l<r) {
        sum = nums[i]+nums[l]+nums[r];
        if (sum < target) {
          l++;
        }
        else if (sum > target) {
          r--;
        }
        else {
          return sum;
        }
        if (Math.abs(sum - target) < Math.abs(result - target)) result = sum;
      }
    }
    return result;
  }
  
  console.log(threeSumClosest([-1,2,1,-4], 1));  