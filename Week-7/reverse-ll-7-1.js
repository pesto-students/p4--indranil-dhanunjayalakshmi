class SLLNode
{
  constructor(value)
  {
    this.value = value;
    this.next =  null;
  }
}


function createSLL(arr)
{
  let head = new SLLNode(arr[0]);
  let curr =  head;
  for(let i = 1; i < arr.length; ++i)
  {
    curr.next = new SLLNode(arr[i]);
    curr = curr.next;
  }
  return head;
}