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
 * @param {*} n 
 * @param {*} k 
 * @returns 
 */
function createLoop(head, n, k)
{
    let pivot = head;
    if(k === 0 || k > n) return;

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

/**
 * 
 * @param {*} head 
 * @returns 
 */
function detectingLoop(head)
{
    let slow =  head, fast = head;
    while(fast && fast.next)
    {
        slow = slow.next;
        fast = fast.next.next;

        if(slow === fast)
        {
            slow =  head;
            while(slow !== fast)
            {
                slow = slow.next;
                fast =  fast.next;
            }
            return true;
        }
    }
    return false;
}

let head = createSLL([1,2,3,4,5,6,7,8,9,10]);
head = createLoop(head, 10, 4);
console.log(detectingLoop(head));