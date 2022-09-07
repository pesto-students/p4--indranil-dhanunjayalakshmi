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
 * @returns 
 */
function reverseList(head)
{
  let prev = null, curr = head, after = null;
  while(curr.next !== null)
  {
    after = curr.next;
    curr.next = prev;
    prev = curr;
    curr =  after;
  }
  curr.next = prev;
  head = curr;
  return head;
}

let head = createSLL([1,2,3,4,5,6,7,8,9,10]);
head = reverseList(head);
traverseSLL(head);
