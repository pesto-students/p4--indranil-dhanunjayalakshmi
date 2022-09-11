class TreeNode
{
  constructor(value)
  {
    this.value = value;
    this.left = null;
    this.left = null;
  }
}

function insertIntoTree(i, arr)
{
  let curr = null;
  if(i < arr.length)
  {
    curr = new TreeNode(arr[i]);
    curr.left = insertIntoTree(2*i + 1, arr);
    curr.right = insertIntoTree(2*i + 2, arr);
  }
  return curr;
}

function calculateHeight(root)
{
  if(root === null)
    return 0;

  let leftHeight = calculateHeight(root.left);
  let rightHeight = calculateHeight(root.right);

  if(leftHeight > rightHeight)
    return leftHeight + 1;
  else
    return rightHeight + 1;
}

root = insertIntoTree(0, [3,9,20,null,null,15,7]);
console.log(calculateHeight(root));