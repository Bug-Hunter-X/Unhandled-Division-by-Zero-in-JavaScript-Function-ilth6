function foo(a, b) {
  if (b === 0) {
    return NaN; // Handle division by zero
  } else if (a === 0 || b === 0) {
    return 0;
  }
  return a / b;
}

console.log(foo(1, 0)); // Output: NaN
console.log(foo(0, 1)); // Output: 0
console.log(foo(0, 0)); // Output: 0
console.log(foo(10,2)); //Output: 5