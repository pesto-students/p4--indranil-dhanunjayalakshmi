const mathOperations = require('./index');

test('adds 1 + 2 to equal 3', () => {
  expect(mathOperations.sum(1, 2)).toBe(3);
});

test('difference of 2 - 1 to equal 1', () => {
  expect(mathOperations.diff(2, 1)).toBe(1);
});

test('product of 6 and 7 is equal to 42', () => {
    expect(mathOperations.product(6, 7)).toBe(42);
  });