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
  if(i < arr.length && arr[i] !== null)
  {
    curr = new TreeNode(arr[i]);
    curr.left = insertIntoTree(2*i + 1, arr);
    curr.right = insertIntoTree(2*i + 2, arr);
  }
  return curr;
}

function levelOrder(root)
{
  if(root)
  {
    let level = [];
    if(root.left)
      level.push(root.left.value);
    
    if(root.right)
      level.push(root.right.value);
      
    if(level.length) result.push(level);
    levelOrder(root.left);
    levelOrder(root.right);
  }
}

root = insertIntoTree(0, [3,9,20,null,null,15,7]);
let result = [];
if(root) result.push([root.value]);
levelOrder(root);
console.log(result);