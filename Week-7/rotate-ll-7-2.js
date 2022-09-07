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
function rotateListKTimes(head, k)
{
    let tail = head, node = null;
    while(tail.next)
    {
        k--;
        if(k === 0)
        {
            node = head;
            head = tail.next;
            tail.next = null;
            tail = head;
        }
        else
        {
            tail = tail.next;
        }
    }
    if(k === 0)
    {
        return head;
    }
    tail.next = node;

    return head;
}

let head = createSLL([1,2,3,4,5,6,7,8,9,10]);
head = rotateListKTimes(head, 3);
traverseSLL(head);