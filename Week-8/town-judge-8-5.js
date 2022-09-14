function townJudge(n, arr)
{
  if(arr.length === 0) return -1;
  let judge = arr[0][1];
  for(let i = 1; i < arr.length; i++)
  {
    if(judge !== arr[i][1]) return -1;
  }
  return judge;
}

console.log(townJudge(2, [[1,2]]));
