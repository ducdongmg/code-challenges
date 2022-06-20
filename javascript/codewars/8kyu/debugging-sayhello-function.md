# Debugging sayHello function

[challenge link](https://www.codewars.com/kata/5625618b1fe21ab49f00001f)

The starship Enterprise has run into some problem when creating a program to greet everyone as they come aboard. It is your job to fix the code and get the program working again!

Example output:

`Hello, Mr. Spock`

### Solution

```javascript
const sayHello = (name) => {
  return `Hello, ${name}`;
};
```

### Best solution

```javascript
const sayHello = (name) => `Hello, ${name}`;
```
