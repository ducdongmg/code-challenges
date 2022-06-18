Strip Comments
===

[challenge link](https://www.codewars.com/kata/51c8e37cee245da6b40000bd/javascript)

Complete the solution so that it strips all text that follows any of a set of comment markers passed in. Any whitespace at the end of the line should also be stripped out.

Example:

Given an input string of:
```
apples, pears # and bananas
grapes
bananas !apples
```

The output expected would be:
```
apples, pears
grapes
bananas
```

The code would be called like so:
```javascript
var result = solution("apples, pears # and bananas\ngrapes\nbananas !apples", ["#", "!"])
// result should == "apples, pears\ngrapes\nbananas"
```

### Solution
```javascript
function solution(input, markers) {
    let tmparr = input.split('\n');

    let rs = tmparr.map(function(currentValue) {
        markers.forEach(element => {
             currentValue = currentValue.indexOf(element) == -1 ? currentValue : currentValue.slice(0, currentValue.indexOf(element)).trim();
        });
        
        
        return currentValue;
    });


    return rs.join('\n');
}
```

### Best 1 solution
```javascript
function solution(input, markers) {
  return input.split('\n').map(
    line => markers.reduce(
      (line, marker) => line.split(marker)[0].trim(), line
    )
  ).join('\n')
}
```

### Best 2 solution
```javascript
function solution(input, markers){
  return input.replace(new RegExp(`\\s*[${markers.join('|')}].+`,'g'),'');
  // return input.replace(new RegExp("\\s?[" + markers.join("") + "].*(\\n)?", "gi"), "$1");
}
```