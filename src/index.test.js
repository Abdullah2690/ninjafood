const { sum, subtract } = require('../src/index');

test('sum function should return the sum of two numbers', () => {
  expect(sum(1, 2)).toBe(3);
});

test('subtract function should return the difference between two numbers', () => {
  expect(subtract(5, 3)).toBe(2);
});