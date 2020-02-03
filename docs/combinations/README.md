# Needle JS

## Combinations
Without doing to much work your able to create exceptions within a given query using basic operators. For instance 
you want to select data with a value below `10` but also above `40`, skipping values in between 10 and 40. This can 
be achieved using the `where` operator in combination with the `orWhere` and `andWhere()`. 

### Where
To match a specific operation the where operator can be used. It accepts basic operations comparing values. If this 
method is directly chained with another `where` operator exceptions can be made on the query. Also, the `where()` 
operation will buffer a trail, meaning if combined with other `where` operators a list of operations will execute at 
once making exceptions possible. 
```javascript
const result = needle
    .where('age', '<', 20)
        .orWhere('age', '>', 50)
    .take();

console.log(result);
```

### orWhere
With the `orWhere()` method an exception can be made on the initial `where` operator. It will use the data after the
 `where()` method was initiated. Making additional selections on the previous dataset possible. The example below 
 will show a record where the age is lower then 20 or the city is Amsterdam. Meaning both could be true.
```javascript
const result = needle
    .where('age', '<', 20)
        .orWhere('city', '=', 'Amsterdam')
    .take();

console.log(result);
```

### andWhere
With the `andWhere()` method an exception can be made on the initial `where` operator. It will use the data before the
 `where()` method was initiated. Making additional selections on the previous dataset possible. The example below 
 will show a record where the age is larger then 20 and the city is Rome. Meaning both should be true.
```javascript
const result = needle
    .where('age', '>', 20)
        .andWhere('city', '=', 'Rome')
    .take();

console.log(result);
```

### orQuery
The `orQuery` can run multiple (custom) queries at the same time, and it will flatten, merge and return the matches. 
The method takes a callback that has a query parameter containing Needle methods. Returning an array of queries will 
resolve every hit on one of the queries specified. 

In the example below first the `bigger()` method will return a selection of the dataset containing items with an age 
above 40. Within the `orQuery()` it will select where name is equal to Peter or the age is smaller then 50. 
```javascript
const result = needle
    .bigger('age', 40)
    .orQuery(query => [
        query.find('name', 'Peter'),
        query.smaller('age', 50)
    ])
    .take();

console.log(result);
```

### andQuery
With the `andQuery()` all given queries need to return true for a particular item. Meaning, the queries will exclude 
any item that doesn't match the given array of selectors. 

In the example below first the `bigger()` method will return a selection of the dataset containing items with an age 
above 40. Then if name is equal to Peter "and" the age is smaller then 50 results will be returned. 
```javascript
const result = needle
    .bigger('age', 40)
    .andQuery(query => [
        query.find('name', 'Peter'),
        query.smaller('age', 50)
    ])
    .take();

console.log(result);
```
