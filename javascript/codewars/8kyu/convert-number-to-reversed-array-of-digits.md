Convert number to reversed array of digits
===

[challenge link](https://www.codewars.com/kata/5583090cbe83f4fd8c000051)

Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

#### Example(Input => Output):
```
348597 => [7,9,5,8,4,3]
0 => [0]
```

### Solution
```javascript
function digitize(n) {
  return n.toString().split('').reverse().map(v => v*1);
}
```

### Best solution
```javascript
function digitize(n) {
  return String(n).split('').map(Number).reverse()
}
```