const { add, multiply } = require("../src/math");

function assertEqual(actual, expected, message) {
  if (actual !== expected) {
    throw new Error(`${message}. Expected ${expected}, but got ${actual}`);
  }
}

assertEqual(add(2, 3), 5, "add(2, 3) should be 5");
assertEqual(multiply(4, 5), 20, "multiply(4, 5) should be 20");

console.log("All Node.js tests passed");
