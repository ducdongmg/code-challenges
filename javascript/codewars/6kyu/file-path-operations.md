# File Path Operations

[challenge link](https://www.codewars.com/kata/5844e0890d3bedc5c5000e54/train/javascript)

This kata requires you to write an object that receives a file path and does operations on it.

```javascript
const fm = new FileMaster("/Users/person1/Pictures/house.png");
fm.extension(); // output: 'png'
fm.filename(); // output: 'house'
fm.dirpath(); // output: '/Users/person1/Pictures/'
```

### Solution

```javascript
class FileMaster {
  constructor(filepath) {
    this.fileInfo = filepath.match(/(.*)\/(.*)\.(.*)/);
  }

  extension() {
    return this.fileInfo[3];
  }

  filename() {
    return this.fileInfo[2];
  }

  dirpath() {
    return this.fileInfo[1];
  }
}
```

### Best solution

```javascript
class FileMaster {
  constructor(filepath) {
    this.info = filepath.match(/^(.*\/)([^.]+)\.(.*)$/);
  }

  extension() {
    return this.info[3];
  }

  filename() {
    return this.info[2];
  }

  dirpath() {
    return this.info[1];
  }
}
```
