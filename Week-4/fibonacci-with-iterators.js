const Fib = (n) => ({
    [Symbol.iterator]: function() {
      let i = 1;
      let prev_last =0, prev = 0;
      return {
        next: () => {
          if (i++ <= n) {
            [prev_last, prev] = [prev, (prev_last + prev) || 1];
            return {value: prev_last, done: false};
          }
          else {
            return {done: true};
          }
        }
      }
    }
  });
  
  console.log([...Fib(10)]);
  