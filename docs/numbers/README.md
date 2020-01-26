# Needle JS

## Numbers
Let's say you wanted to know the who has posted the most comments, or display the highest age of a collection of 
users. Working with numbers can be made easy using several options to retrieve items that fit the query. For the 
following examples I will reuse the data array as used within the top example.

### Smaller or bigger
With the smaller method a `key` and `value` need to be passed to retrieve all items that match the given query.
```javascript
const result = needle
    .smaller('age', 40)
    .take();
    
console.log(result);
```
In this case `Sander` and `Sara` will be logged in the console, since their age is below 40. If needed the same thing 
applies for values bigger then a given query. 
```javascript
const result = needle
    .bigger('age', 35)
    .take();
    
console.log(result);
```
In this example `John` will be returned. 

### Between
It's also possible to retrieve all values within a range of numbers, this can be done in a similar way using the 
between method. It takes two parameters, a `key` and an `array` containing both ends of the range.
```javascript
const result = needle
    .between('age', [25, 35])
    .take();
    
console.log(result);
```

### Equal
With the `equal()` method a specific number can be found inside the array of given items. 
```javascript
const result = needle
    .equal('age', 30)
    .take();
    
console.log(result);
```

### Min and max
If needed you can easily retrieve the lowest or highest value from an given haystack. If multiple items in the array 
match the query all items will be returned. The `min()` and `max()` take one parameter that will look for a matching 
key.

```javascript
const result = needle
    .max('age')
    .take();
    
console.log(result);
```

### Average
Besides retrieving the minimum or maximum value from a given key, the average method will return the (closest) to an 
average from a given key. Meaning if an "average" number isn't present in the dataset the closest value will be 
returned, potentially multiple items from the dataset. 
```javascript
const result = needle
    .average('age')
    .take();
```

### Sum
To quickly sum a total amount of values use the `sum()` method and give it a key to select a value from the 
manipulated array. The function will return the total value of all (leftover) items within the array. The example as shown below, based on the data object as present in the first example will result in 101. 

```javascript
const result = needle
    .sum('age');

console.log(result);
```