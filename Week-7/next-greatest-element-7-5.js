/**
 * 
 * @param {*} arr 
 * @param {*} n 
 * @returns 
 */
function nextGreatestElement(arr, n)
{
  let stack = [];
  for(let i = 0; i < n; i++)
  {
    while(stack.length > 0 && stack[stack.length-1]["value"] < arr[i])
    {
      var temp = stack.pop();
      arr[temp["index"]] = arr[i];
    }
    stack.push({"value": arr[i], "index": i});
  }

  while(stack.length > 0)
  {
    temp = stack.pop();
    arr[temp["index"]] = -1;
  }

  return arr;
}

console.log(nextGreatestElement([1,3,2,4], 4));
