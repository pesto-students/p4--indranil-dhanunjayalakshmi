class Queue
{
    constructor()
    {
        this.stack1 = [];
        this.stack2 = [];
    }

    enqueue(data)
    {
        while(this.stack1.length !== 0)
        {
            this.stack2.push(this.stack1.pop());
        }

        this.stack1.push(data);
        while(this.stack2.length !== 0)
        {
            this.stack1.push(this.stack2.pop());
        }
    }

    dequeue()
    {
        if(this.stack1.length === 0)
        {
            return -1;
        }
        return this.stack1.pop();
    }
}

let queue = new Queue();
let arr = [1,2,2,2,1,4];

for(let i=0; i < arr.length; i++)
{
    if(arr[i]===1)
    {
        i++;
        queue.enqueue(arr[i]);
    }
    else if(arr[i]===2)
    {
        console.log(queue.dequeue());
    }
}
