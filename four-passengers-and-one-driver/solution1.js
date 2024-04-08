'use strict';

const carsNeeded = (n) => Math.floor((n + 4) / 5);

/*

Strategy:

To determine the number of cars needed, divide the total number of passengers
by the maximum capacity per car, considering any remaining passengers. Adjust 
the estimation as necessary to ensure all passengers are accommodated, then 
implement this logic into a function for calculation.


Implementation:

(n + 4) / 5: Adds 4 to the total number of passengers n before dividing by 5.
This ensures that when we divide by 5, any fractional result is rounded up.

Math.floor: Rounds the result down to the nearest whole number, ensuring that the
number of cars needed is always rounded down.

*/
