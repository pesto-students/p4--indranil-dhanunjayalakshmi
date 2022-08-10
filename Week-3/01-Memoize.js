function memoize(fn)
{
  const cache = new Map();
  return function(...args)
  {
    const key = args.toString();
    if (cache.has(key))
    {
      return cache.get(key);
    }
    cache.set(key, fn(...args));
    return cache.get(key);
  }
}

function add()
{
  var sum = 0;
  for (var i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
}

const memoizeAdd = memoize(add);

console.log(memoizeAdd(100,100));
console.log(memoizeAdd(100));
console.log(memoizeAdd(100,200));
console.log(memoizeAdd(100,100));
