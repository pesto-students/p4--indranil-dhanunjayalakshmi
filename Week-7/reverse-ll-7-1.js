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

function traverseSLL(head)
{
  let curr = head;
  while(curr != null)
  {
    console.log(curr.value);
    curr = curr.next;
  }
}

let head = createSLL([1,2,3,4,5,6,7,8,9,10]);
traverseSLL(head);
