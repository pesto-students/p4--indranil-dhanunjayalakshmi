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

function isBST(root, left, right)
{
  if(root === null)
    return true;
  
  if(left !== null && root.value <= left.value) return false;
  if(right !== null && root.value >= right.value) return false;
  return(isBST(root.left, left, root) && isBST(root.right, root, right));
}

root = insertIntoTree(0, [5,1,4,null,null,3,6]);
console.log(isBST(root, null, null));