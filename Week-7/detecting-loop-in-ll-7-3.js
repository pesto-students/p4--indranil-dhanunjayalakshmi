class SLLNode
{
  constructor(value)
  {
    this.value = value;
    this.next =  null;
  }
}

/**
 * 
 * @param {*} arr 
 * @returns 
 */
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

/**
 * 
 * @param {*} head 
 */
function traverseSLL(head)
{
  let curr = head;
  while(curr != null)
  {
    console.log(curr.value);
    curr = curr.next;
  }
}

/**
 * 
 * @param {*} head 
 * @param {*} k 
 * @returns 
 */
function createLoop(head, k)
{
  let pivot = head;

  while(--k)
  {
    pivot = pivot.next;
  }

  let tail = pivot;
  while(tail.next !== null)
  {
    tail = tail.next;
  }
  tail.next = pivot;
  return head;
}

let head = createSLL([1,2,3,4,5,6,7,8,9,10]);
head = createLoop(head, 4);
traverseSLL(head);