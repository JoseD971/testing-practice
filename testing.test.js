const { capitalize } = require('./capitalize.js');
const { reverseString } = require('./reverseString.js');

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
