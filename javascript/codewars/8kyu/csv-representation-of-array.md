Create a function that returns the CSV representation of a two-dimensional numeric array.
===

[source link](https://www.codewars.com/kata/5a34af40e1ce0eb1f5000036/train/javascript)

```
input:
   [[ 0, 1, 2, 3, 4 ],
    [ 10,11,12,13,14 ],
    [ 20,21,22,23,24 ],
    [ 30,31,32,33,34 ]] 
    
output:
     '0,1,2,3,4\n'
    +'10,11,12,13,14\n'
    +'20,21,22,23,24\n'
    +'30,31,32,33,34'
```

### solution
```javascript
function toCsvText(array) {
  array.forEach((elm, idx) => {array[idx] = elm.join(',')});
  return array.join('\n');
}
```

### best solution

function toCsvText(array) {
   return array.map(list => list.join(',')).join('\n')
}
