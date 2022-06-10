To square(root) or not to square(root)
===

[challenge link](https://www.codewars.com/kata/57f6ad55cca6e045d2000627/train/javascript)

Write a method, that will get an integer array as parameter and will process every number from this array.

Return a new array with processing every number of the input-array like this:

If the number has an integer square root, take this, otherwise square the number.

#### Example
`[4,3,9,7,2,1] -> [2,9,3,49,4,1]`
#### Notes
The input array will always contain only positive numbers, and will never be empty or null.

### Solution
```javascript
function squareOrSquareRoot(array) {
    array.forEach(function(val, idx) {
      let sqrtResult = Math.sqrt(val);
      array[idx] = Number.isInteger(sqrtResult) ? sqrtResult : val*val;
    });
    return array;
}
```

### Best solution
```javascript
function squareOrSquareRoot(array) {
  return array.map(x => {
    const r = Math.sqrt(x);
    return (r % 1 == 0) ? r : (x*x);
  });  
}
```