const { add } = require('../src/string-calculator.js');

// Test 01
test("if given an empty string, return ('')", () => {
    expect(add('')).toBe('');
});

// Test 02
test("if given a single character, return 1", () => {
    expect(add('7')).toBe(7);
});

// Test 03
test("if given two characters, return sum of numbers", () => {
    expect(add('12')).toBe(3);
});

// Test 04
test("if given more than three characters, return sum of all numbers", () => {
    expect(add('123')).toBe(6);
});

// Test 05
test("if give a string with '\n', only add numbers", () => {
    expect(add('1\n2n3')).toBe(6);
});

// Test 06
test("if give a string with any 'delimiter', only add numbers", () => {
    expect(add('1;2,3')).toBe(6);
});

// Test 07
test("if give a string with a negative number, return `negatives not allowed: ${negNum}`", () => {
    expect(add('1,-2,3')).toBe(`negatives not allowed: -2`);
});

// Test 08
test("if give a string with two negative number, return `negatives not allowed: ${negNum}`", () => {
    expect(add('1,-2,-3')).toBe(`negatives not allowed: -2, -3`);
});

// Test 09
test("if given more than two characters, return sum of all numbers", () => {
    expect(add('1,2,3,4,5,6')).toBe(21);
});

// Test 10
test("if give a string with more than two negative number, return `negatives not allowed: ${negNum}`", () => {
    expect(add('1,-2,-3,4,5,-6')).toBe(`negatives not allowed: -2, -3, -6`);
});
