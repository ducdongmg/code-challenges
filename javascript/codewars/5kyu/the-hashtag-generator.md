# The Hashtag Generator

[challenge link](https://www.codewars.com/kata/52449b062fb80683ec000024/train/javascript)

The marketing team is spending way too much time typing in hashtags.
Let's help them with our own Hashtag Generator!

Here's the deal:

- It must start with a hashtag (#).
- All words must have their first letter capitalized.
- If the final result is longer than 140 chars it must return false.
- If the input or the result is an empty string it must return false.

Examples

```
" Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
"    Hello     World   "                  =>  "#HelloWorld"
""                                        =>  false
```

### Solution

```javascript
function generateHashtag(str) {
  str = str.replace(new RegExp(`\\s+`, "g"), " ").trim();
  return str.length > 0 && str.length < 140
    ? "#" +
        str
          .split(" ")
          .map((s) => s.replace(s[0], s[0].toUpperCase()))
          .join("")
    : false;
}
```

### Best solution

```javascript
function generateHashtag(str) {
  return str.length > 140 || str === ""
    ? false
    : "#" + str.split(" ").map(capitalize).join("");
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
```
