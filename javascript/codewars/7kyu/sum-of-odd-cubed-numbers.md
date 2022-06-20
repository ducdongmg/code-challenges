# Sum of Odd Cubed Numbers 

[challenge link](https://www.codewars.com/kata/580dda86c40fa6c45f00028a/train/javascript)

Find the sum of the odd numbers within an array, after cubing the initial integers. The function should return undefined if any of the values aren't numbers.

### Solution

```javascript
function cubeOdd(arr) {
  let sum = 0;
  for (let i = 0, total = arr.length; i < total; i++) {
    if (isNaN(arr[i])) {
      return undefined;
    }

    if (arr[i] % 2) sum += Math.pow(arr[i], 3);
  }

  return sum;
}
```

### Best solution

```javascript
let cubeOdd = (a) => {
  var isNumeric = a.every((x) => !isNaN(x));
  return isNumeric
    ? a.filter((n) => n % 2).reduce((s, n) => s + n * n * n, 0)
    : undefined;
};
```
