# [Goran](https://edabit.com/user/3WtHp4MBzciz4AE8M)

```js
function carsNeeded(n) {
  return Math.ceil(n / 5);
}
```

## Strategy

This solution employs a straightforward approach by mapping out all potential
inputs and their corresponding outputs. Given the nature of the problem, where
the number of passengers directly dictates the number of cars needed, Goran
chose to list all feasible scenarios and their outcomes. By dividing the total
number of passengers by the maximum capacity of each car (5 passengers per car),
he accounts for any fractional remainder, ensuring that each passenger is
transported efficiently. This strategy simplifies the function's logic, making
it easy to understand and implement.

## Implementation

The implementation of the carsNeeded function divides the total number of
passengers by 5 to calculate the number of cars needed, rounding up to ensure
all passengers are accommodated. It returns this value as the result, offering a
concise and efficient solution for determining the required number of cars to
transport passengers.

**Math.ceil(`number`)**: it rounds a number up to the nearest whole number.

**parenthesis**: As the normal order of operations would not work, Goran used
parenthesis to group the mathematical operators differently.

**/**: these operators combine the argument with hard-coded values to calculate
the correct solution.

- operator precedence:
  [scriptingmaster](http://www.scriptingmaster.com/javascript/operator-precedence.asp),
  [Avelx, BOMDAS](https://www.youtube.com/watch?v=v-L5v6GEFcY),
  [GreeneMath](https://www.youtube.com/watch?v=XI2KKC_7FAM)
- `Math.floor`:
  [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/floor)
