# [js_padawan](https://edabit.com/user/evTTY9hwrtogaNxXn)

```js
const carsNeeded = (n) => Math.ceil(n / 5);
```

## Strategy

The strategy involves dividing the total number of passengers by the maximum
capacity per car (5) to determine a preliminary estimate of the number of cars
needed. Then, ensuring that any fractional result is rounded up to the nearest
whole number to account for any remaining passengers, thus providing an accurate
count of the required cars for transportation.

## Implementation

This implementation takes the total number of passengers as input and calculates
the number of cars needed based on the given strategy. It first divides the
total number of passengers by the car capacity (5) to estimate the number of
cars needed. Then, it checks if there are any remaining passengers that cannot
fill a complete car (i.e., if the modulo operation passengers % 5 is not equal
to 0), and if so, it rounds up to the nearest whole number using Math.floor()
and adds 1 to account for these remaining passengers. Finally, it returns the
calculated number of cars needed.

**const carsNeeded**: Declares a constant variable named carsNeeded to hold the
arrow function.

**passengers**: Represents the input parameter of the function, which in this
case is the total number of passengers.

**Array**: Arrow notation, indicating the beginning of the function body.

**parenthesis**: Encloses the function body, where the actual logic of the
function resides.
