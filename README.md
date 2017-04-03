# Example

```shell
> npm install npm-publishing-sample --save
```

How to use it

```javascript
const { sensitiveWords } = require('npm-publishing-sample');

const response = sensitiveWords('alexis is awesome', ['alexis']);

console.log(response); // *** is awesome
```