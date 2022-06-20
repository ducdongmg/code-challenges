# Simple Pig Latin

[challenge link](https://www.codewars.com/kata/520b9d2ad5c005041100000f/javascript)

Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

#### Examples

```
pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
pigIt('Hello world !');     // elloHay orldway !
```

### Solution

```javascript
function pigIt(str) {
  let ns = str.split(" ");
  return ns
    .map((s) => s.replace(/\w+/g, (word) => word.slice(1) + word[0] + "ay"))
    .join(" ");
}
```

### Best solution

```javascript
function pigIt(str) {
  return str.replace(/(\w)(\w*)(\s|$)/g, "$2$1ay$3");
}
```
