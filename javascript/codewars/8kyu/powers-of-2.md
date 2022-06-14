Powers of 2
===

[challenge link](https://www.codewars.com/kata/57a083a57cb1f31db7000028/javascript)

Complete the function that takes a non-negative integer n as input, and returns a list of all the powers of 2 with the exponent ranging from 0 to n ( inclusive ).

#### Examples
```
n = 0  ==> [1]        # [2^0]
n = 1  ==> [1, 2]     # [2^0, 2^1]
n = 2  ==> [1, 2, 4]  # [2^0, 2^1, 2^2]
```

### Solution
```javascript
function powersOfTwo(n){
  let result = [];
  for (let i = 0; i <= n; i++) {
    result.push(Math.pow(2, i));
  }
  return result;
}
```

### Best solution
```javascript
function powersOfTwo(n) {
  return Array.from({length: n + 1}, (v, k) => 2 ** k);
}
```

#### Note
Hàm Array.from() trả lại 1 mảng mới từ bất kỳ object nào có thuộc tính length

Syntax:  
`Array.from(object, mapFunction, thisValue)`

https://www.w3schools.com/jsref/jsref_from.asp