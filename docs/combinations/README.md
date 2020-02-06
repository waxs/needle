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

### query
The `query()` method can be used to write more advanced logic. It will provide you with a new instance of Needle as 
well as a data array that contains all data results. The query method can be initiated and nest multiple checks for 
custom filtering while still providing all the flexibility of Needle. It's expected that the function will return an 
array of items. 
```javascript
const result = needle
    .query(query => {
        const age = query.bigger('age', 40).take();
        const name = query.find('name', 'Sander').take();
        return [...age, ...name];
    })
    .take();

console.log(result);
```

If needed a second parameter is available to retrieve the data as an array, for any custom selections you would like 
to provide. 
```javascript
const result = needle
    .query((query, data) => {
        return data.filter(item => item.name === 'Sander');
    })
    .take();
```

If result are present within multiple times, the `query()` method will flatten the dataset to unique items. 
Meaning an item can only be present once in the array. 

### or
To make inclusive selections based on the `query()` method the `or()` method can be used, it uses a similar syntax as
 it's big brother, the `query()` method. Both an instance of Needle and an array of data are available as parameters. 
```javascript
const result = needle
    .query(query => {
        const age = query.bigger('age', 40).take();
        const name = query.find('name', 'Sander').take();
        return [...age, ...name];
    })
    .or(query => {
        return query.find('name', 'Peter').take();
    })
    .take();

console.log(result);
```

### and
The `and()` method does the opposite of the `or()` method and will make an exclusive selection based on the `query()`
 method. Meaning and will only work if chained to a `query()` method. 
```javascript
const result = needle
    .query(query => {
        const age = query.bigger('age', 40).take();
        const name = query.find('name', 'Sander').take();
        return [...age, ...name];
    })
    .and(query => {
        return query.where('age', 55).take();
    })
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
    .orQuery(query => [
        query.find('name', 'Peter'),
        query.smaller('age', 50)
    ])
    .take();

console.log(result);
```
