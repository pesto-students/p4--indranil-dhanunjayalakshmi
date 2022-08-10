function createIncrement()
{
  let count = 0;
  function increment()
  {
    count++;
  }

  let message = `Count is ${count}`;

  function log()
  {
    console.log(message);
  }
  return [increment,log];
}

const [increment,log] = createIncrement();

increment(); // Increments the count variable to 1
increment(); // Increments the count variable to 2
increment(); // Increments the count variable to 3
log(); /* What is logged? -- It will print "Count is 0" even though the count is incremented to 3 
    because the log function is printing the message variable which was already evaluated by the time we call increment() */