const { add } = require("./calculator");

// Test for an empty string input
test("should return 0 for an empty string", () => {
  expect(add("")).toBe(0);
});

// Test for single number input
test("should return the number itself when only one number is provided", () => {
  expect(add("1")).toBe(1);
});

// Test for two numbers separated by a comma
test("should return the sum of two numbers separated by a comma", () => {
  expect(add("1,2")).toBe(3);
});

// Test for multiple numbers separated by commas
test("should return the sum of multiple comma-separated numbers", () => {
  expect(add("1,2,3")).toBe(6);
});

// Test for handling new lines between numbers
test("should handle new lines between numbers", () => {
  expect(add("1\n2,3")).toBe(6);
});

// Test for supporting custom delimiters
test("should support custom delimiters", () => {
  expect(add("//;\n1;2")).toBe(3);
});

// Test for handling negative numbers (should throw an error)
test("should throw an error for negative numbers", () => {
  expect(() => add("1,-2")).toThrow("negative numbers not allowed: -2");
});

// Test for handling multiple negative numbers (should throw an error with all negatives)
test("should throw an error listing all negative numbers", () => {
  expect(() => add("1,-2,-3")).toThrow("negative numbers not allowed: -2,-3");
});
