# Unhandled Division by Zero in JavaScript Function

This repository demonstrates a common error in JavaScript: unhandled division by zero.  The `foo` function attempts to divide two numbers, but does not correctly handle the case where the divisor is zero. This results in `Infinity` being returned, which may not be the desired behavior.

The `bug.js` file contains the erroneous code, while `bugSolution.js` provides a corrected version.

## Bug

The original function does not check for division by zero before performing the division operation. 

## Solution

The corrected function includes an explicit check for a zero divisor. If the divisor is zero, it returns `NaN` to indicate an undefined result, thereby avoiding the `Infinity` error and promoting better error handling.