# Needle JS

## Dates
Besides numbers you might want to select all items `before()` or `after()` a certain time. This can be achieved using
 the date helpers that can be chained on Needle.
 
#### Before or after
Using the before or after method a selection of items can be retrieved from either before or after a specific date. 
Both a `key` and `value` need to be passed to retrieve all items that match the given query. 
```javascript
const result = needle
    .before('created', '10/1/2020')
    .take();
    
console.log(result);
```

#### Period
It's also possible to retrieve all items within a range of dates, this can be done in a similar way using the 
period method. It takes two parameters, a `key` and an `array` containing both ends of the range.
```javascript
const result = needle
    .period('created', ['1/1/2020', '1/1/2021'])
    .take();
    
console.log(result);
```

#### Month
If you need to retrieve information about a certain month this can be done using the `month()` method. It will 
retrieve all items within a given month. For example `month('created', 'sep', 2020)`. It uses a abbreviation of the 
month name, it will support an English abbreviation. 
```javascript
const result = needle
    .month('date', 'jan', 2020)
    .take();
    
console.log(result);
```

#### Year
If you need results from a complete year, this can be done using the `year()` method. It will take all items from the
 data set starting with the first of January and end at 31st of December. 
```javascript
const result = needle
    .year('date', 2020)
    .take();
    
console.log(result);
```

#### Previous & upcoming
Last will always retrieve a set of data based on today. Meaning, instead of taking a static year, you could do for 
instance, the last 2 days, or maybe do 1 week. Besides `previous()` there is also a `upcoming()` method, achieving the 
samen 
result but instead of looking back it will look forward. 

Both `previous()` and `upcoming()` support a simple markup for making queries. You can look for days, weeks, months, 
quarters, always based on the current date. Meaning that doing `previous('created', 1, 'months')` will not take the 
month
 January if the current month would be February. It will look 30 days in the past from the current date. 
 
Why? Well this method is their to be more dynamic, every time you visit the query the result may vary based on what 
happend in the last or will happen in the upcoming days. If you need to retrieve a specific month of data use the 
`month()` method. Here are a couple of examples. 
```javascript
const result = needle
    .previous('created', 6, 'months')
    .take();
    
console.log(result);
```
The `upcoming()` method follows a similar syntax. 
```javascript
const result = needle
    .upcoming('created', 2, 'weeks')
    .take();
    
console.log(result);
```
In the above examples `weeks` and `months` could have been replaced with either `days`, `quarters` or years`as well. 
