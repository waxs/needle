# Needle JS

## Custom
If Needle doesn't provide you with enough tools and tricks to manipulate or filter your data set you can always go 
custom. These methods can be hooked within in the chain making it easy to hook some custom logic within you Needle 
flow. 

### Custom Each
If you need to iterate over the entire dataset you can use the `customEach()` method using a callback on the method 
that will iterate over every item in the array, meaning you will retrieve the current set of data while making for 
instance changes or adding additional keys. In the example below every item will now hold a new key with the value of
 true. 
```javascript
const result = needle
    .customEach(item => item['example'] = true)
    .take();

console.log(result);
```

### Custom Filter
If you don't need to manipulate the array of data, but make an additional filter this effect can be achieved using 
the `customFilter()` method. Everything that will return true will be added the current dataset. With the `is()` 
method your able to check if something is true, but what if you want to know if a value is false. Let's take a look 
at the example below. 
```javascript
const result = needle
    .customFilter(item => !item.active)
    .take();

console.log(result);
```