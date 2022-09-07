class Stack
{
  constructor()
  {
    this.stackArray = [];
  }

  push(data)
  {
    this.stackArray.push(data);
  }

  pop()
  {
    if(this.stackArray.length === 0)
    {
      console.log("Stack underflow");
      return;
    }
    this.stackArray.pop();
  }

  peek()
  {
    return this.stackArray[this.stackArray.length-1];
  }

  isEmpty()
  {
    if(this.stackArray.length === 0)
      return true;
    else
      return false;
  }
}

/**
 * 
 * @param {*} str 
 * @returns 
 */
function parenthesisChecker(str)
{
  for(let val of str)
  {
    if(val === '(' || val === '{' || val === '[')
      stack.push(val);
    else {
      if(stack.isEmpty())
        return false;
      else
      {
        top = stack.peek();
        if((val === ')' && top === '(') || (val === '}' && top === '{') || (val === ']' && top === '['))
          stack.pop();
        else
          return false;
      }
    }
  }
  if(stack.isEmpty())
    return true;
  else
    return false;
}

let stack =  new Stack();
console.log(parenthesisChecker("[()]{}{()()}"));
console.log(parenthesisChecker("[(])"));
