const { capitalize } = require('./capitalize.js');
const { reverseString } = require('./reverseString.js');
const { calculator } = require('./calculator.js');

// Test for the capitalize function
describe('capitalize', () => {
  test('should capitalize the first letter of a word', () => {
    expect(capitalize('hello')).toBe('Hello');
  });

  test('should return an empty string if the input is an empty string', () => {
    expect(capitalize('')).toBe('');
  });

  test('should return the same word if the first letter is already capitalized', () => {
    expect(capitalize('Hello')).toBe('Hello');
  });

  test('should capitalize only the first letter, keeping the rest lowercase', () => {
    expect(capitalize('hELLO')).toBe('Hello');
  });
});

// Test for the reverseString function
describe('reverseString', () => {
  test('should reverse a string', () => {
    expect(reverseString('hello')).toBe('olleh');
  });

  test('should return an empty string if the input is an empty string', () => {
    expect(reverseString('')).toBe('');
  });

  test('should reverse a string with special characters', () => {
    expect(reverseString('hello!')).toBe('!olleh');
  });

  test('should return the same string if it is a single character', () => {
    expect(reverseString('a')).toBe('a');
  });
});

// Test for the calculator object
describe('add', () => {
  test('should add two numbers correctly', () => {
    expect(calculator.add(2, 3)).toBe(5);
  });

  test('should handle negative numbers', () => {
    expect(calculator.add(-2, 3)).toBe(1);
  });

  test('should handle adding zeros', () => {
    expect(calculator.add(0, 0)).toBe(0);
  });
});

describe('subtract', () => {
  test('should subtract two numbers correctly', () => {
    expect(calculator.subtract(5, 3)).toBe(2);
  });

  test('should handle negative numbers', () => {
    expect(calculator.subtract(-2, 3)).toBe(-5);
  });

  test('should handle subtracting zeros', () => {
    expect(calculator.subtract(0, 0)).toBe(0);
  });
});

describe('multiply', () => {
  test('should multiply two numbers correctly', () => {
    expect(calculator.multiply(2, 3)).toBe(6);
  });

  test('should handle negative numbers', () => {
    expect(calculator.multiply(-2, 3)).toBe(-6);
  });

  test('should handle multiplying by zero', () => {
    expect(calculator.multiply(0, 5)).toBe(0);
  });
});

describe('divide', () => {
  test('should divide two numbers correctly', () => {
    expect(calculator.divide(6, 3)).toBe(2);
  });

  test('should handle negative numbers', () => {
    expect(calculator.divide(-6, 3)).toBe(-2);
  });

  test('should throw an error when dividing by zero', () => {
    expect(() => {
      calculator.divide(6, 0);
    }).toThrow('Cannot divide by zero');
  });
});