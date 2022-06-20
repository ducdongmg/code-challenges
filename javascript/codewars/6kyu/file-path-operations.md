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
    let lastBackSlash = filepath.lastIndexOf("/");
    this.dirPath = filepath.slice(0, lastBackSlash + 1);

    let fileFullName = filepath.slice(lastBackSlash + 1);
    let lastDot = fileFullName.lastIndexOf(".");
    this.fileName = fileFullName.slice(0, lastDot);
    this.ext = fileFullName.slice(lastDot + 1);
  }

  extension() {
    return this.ext;
  }

  filename() {
    return this.fileName;
  }

  dirpath() {
    return this.dirPath;
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
