const { capitalize } = require('./capitalize.js');
const { reverseString } = require('./reverseString.js');
const { calculator } = require('./calculator.js');
const { caesarCipher } = require('./caesarCipher.js');
const { analyzeArray } = require('./analyzeArray.js');

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

//Tests for the caesarCipher function
describe('caesarCipher', () => {
  test('should shift characters correctly with a positive shift', () => {
    expect(caesarCipher('abc', 3)).toBe('def');
  });

  test('should wrap around from z to a', () => {
    expect(caesarCipher('xyz', 3)).toBe('abc');
  });

  test('should preserve letter case', () => {
    expect(caesarCipher('HeLLo', 3)).toBe('KhOOr');
  });

  test('should leave non-alphabetic characters unchanged', () => {
    expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!');
  });

  test('should handle negative shift correctly', () => {
    expect(caesarCipher('abc', -3)).toBe('xyz');
  });

  test('should handle a shift of 0 (no change)', () => {
    expect(caesarCipher('Hello, World!', 0)).toBe('Hello, World!');
  });

  test('should correctly wrap around uppercase letters', () => {
    expect(caesarCipher('XYZ', 3)).toBe('ABC');
  });

  test('should correctly wrap around negative shift for uppercase letters', () => {
    expect(caesarCipher('ABC', -3)).toBe('XYZ');
  });
});

//Tests for the analyzeArray function
describe('analyzeArray', () => {
  test('should return correct average, min, max, and length for a typical array', () => {
    const result = analyzeArray([1, 2, 3, 4, 5]);
    expect(result.average).toBe(3);
    expect(result.min).toBe(1);
    expect(result.max).toBe(5);
    expect(result.length).toBe(5);
  });

  test('should handle an array with one element', () => {
    const result = analyzeArray([10]);
    expect(result.average).toBe(10);
    expect(result.min).toBe(10);
    expect(result.max).toBe(10);
    expect(result.length).toBe(1);
  });

  test('should handle an array with negative numbers', () => {
    const result = analyzeArray([-1, -2, -3, -4, -5]);
    expect(result.average).toBe(-3);
    expect(result.min).toBe(-5);
    expect(result.max).toBe(-1);
    expect(result.length).toBe(5);
  });

  test('should handle an array with zeros', () => {
    const result = analyzeArray([0, 0, 0, 0, 0]);
    expect(result.average).toBe(0);
    expect(result.min).toBe(0);
    expect(result.max).toBe(0);
    expect(result.length).toBe(5);
  });

  test('should return NaN for an empty array', () => {
    const result = analyzeArray([]);
    expect(result.average).toBeNaN();
    expect(result.min).toBeNaN();
    expect(result.max).toBeNaN();
    expect(result.length).toBe(0);
  });
});
