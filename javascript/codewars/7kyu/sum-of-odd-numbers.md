Sum of odd numbers
===

[challenge link](http)

Given the triangle of consecutive odd numbers:

```
             1
          3     5
       7     9    11
   13    15    17    19
21    23    25    27    29
```

Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)
```
1 -->  1
2 --> 3 + 5 = 8
```

### Solution
```javascript
function rowSumOddNumbers(n) {
  let beginNum = (n-1)*n + 1;
  
  let sum = 0;
  for (let idx = 0; idx < n ; idx++) {
    sum += beginNum + idx*2;
  }
  
	return sum;
}
```

**Note:**

Ta có thể dễ dàng nhận ra mối liên quan giữa số bắt đầu mỗi hàng với n qua công thức:

`(begin - 1) / n = n -1`

Các số tiếp theo có giá trị bằng số liền kề + 2.

### Best solution
```javascript
function rowSumOddNumbers(n) {
  return Math.pow(n, 3);
}
```

**Note:**

The rows' start numbers are Hogben's centered polygonal numbers:
`1, 3, 7, 13, 21, 31, 43 = b[n] = n^2 - n + 1.`

<https://oeis.org/A002061>

The sum of one row is given by:
`s[n] = n^2 + n(b[n] - 1).`

<https://www.quora.com/What-is-the-sum-of-n-consecutive-odd-integers/answer/Xavier-Dectot>

`Inline b[n]:`
```
s[n] = n^2 + n(n^2 - n + 1 - 1)
    = n^2 + n(n^2 - n)
    = n^2 + n^3 - n^2
    = n^3
```