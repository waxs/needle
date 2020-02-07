# Needle JS

## Sorting
Besides setting `random()` results, a sorted array can also be retrieved using the `sort()` method. This will take 
two arguments, a `key` and and the direction either ascending with the `asc` string (will be the default) or 
descending using `desc`. It can be used on strings and numbers. 
```javascript
const result = needle
    .sort('age')
    .take();

console.log(result);
``` 
If needed the same thing can be achieved running date values. Behind the scenes values will be converted into a date. 
Value must be a valid date.
```javascript
const result = needle
    .sortDate('created')
    .take();

console.log(result);
``` 

Overall sorting can be performed on numbers, strings and date values. 
