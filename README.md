# Needle JS
Needle is a fast, small, clean and flexible package for finding your needle in a haystack of data. Needle has some 
simple helpers to quickly differentiate your data using chained methods while being only `16KB` in size.

Imagine having to retrieve all items that are active, pretty easy right? These days use an array `.filter()` and you're 
pretty much done. Now consider retrieving all names of the active records in september 2020 where the age is equal to 30. 
This is where Needle comes with just 5 lines of code. 

```javascript
needle
    .is('active')
    .month('created', 'sep', 2020)
    .where('age', '=', 30)
    .values('name');
```

## Topics
1. [Getting started](#getting-started)  
1.1 [Examples](#examples)  
1.2 [Initiate Needle JS](#initiate-needle-js)  
2. [Data](#data)  
2.1 [Retrieve](#retrieve)  
2.2 [Sorting](#sorting)  
2.3 [Visualising](#visualising)  
2.4 [Template](#template) 
3. [Manipulating](#manipulating)  
3.1 [Numbers](#numbers)  
3.2 [Dates](#dates)  
3.3 [Matches](#matches)  
3.4 [Combinations](#combinations)   
4. [Handle](#handle)   
4.1 [CRUD](#crud)   
4.2 [Store](#store) 
5. [Testing](#testing)    
5.1 [Stress Test](#stres-test)  
6. [About](#about)  

## Getting started
Needle has been build taking intuitive use in account. There are multiple helpers to help you sort, retrieve or 
manipulate an array of contents. Let's dive a little deeper into the options you can use with Needle. 

* **Retrieve Data** (12 methods) [Read documentation ⟶](https://github.com/waxs/needle/tree/master/docs/retrieve)
    * `take()` will retrieve an amount of manipulated data
    * `select()` create new items based on given keys
    * `chunk()` create chunks of data contains `next()`, `prev()` and `start()` function.
    * `values()` will retrieve an array of values from the data set
    * `index()` will retrieve a given index from the data set
    * `get()` will return the latest state of the Needle object 
    * `first()` will return the first item from the data set
    * `last()` will return the last item from the data set
    * `count()` will count the amount of results and return a number

* **Sorting** (2 methods) [Read documentation ⟶](https://github.com/waxs/needle/tree/master/docs/sorting)
    * `sort()` will sort the results `asc` or `desc`
    * `sortDate()` will sort the results on date `asc` or `desc`
    
* **Debugging** (3 methods) [Read documentation ⟶](https://github.com/waxs/needle/tree/master/docs/debugging)
    * `log()` will log results to the console
    * `print()` will print results to the DOM
    * `random()` will retrieve a random amount of items 
    
* **Template** (1 method) [Read documentation ⟶](https://github.com/waxs/needle/tree/master/docs/template)
    * `template()` can be used to template results with custom markup
    
* **Numbers** (9 methods)
    * `smaller()` retrieve items smaller than a given parameter
    * `bigger()` retrieve items bigger than a given parameter
    * `between()` retrieve items in between to given parameters
    * `equal()` retrieve an equal to item from the data
    * `min()` retrieve the minimum value from a given key within the data
    * `max()` retrieve the maximum value from a given key within the data
    * `positive()` retrieve all positive items from a given key within the data
    * `negative()` retrieve all negative items from a given key within the data
    * `sum()` sum an amount of numbers from a given key in current data
    
* **Dates** (7 methods)
    * `before()` take items from before a given date
    * `after()` take items from after a given date
    * `period()` take items from in between two dates
    * `month()` take items from a given month
    * `year()` take items from a given year
    * `previous()` take last amount of items based named dates
    * `upcoming()` take next amount of items based named dates
    
* **Matches** (5 methods)
    * `is()` retrieve items with a bool value that is true
    * `has()` retrieve items if a given key is present in the object
    * `hasDeep()` retrieve items if a given key is present in a nested object
    * `find()` find will retrieve objects with a key value pair match
    * `findDeep()` find will retrieve objects with a nested key value pair match

* **Combinations** (3 methods)
    * `where()` find matches based on operator matching key, value pair
    * `orWhere()` exception based data initiated before use of `where()` selector
    * `andWhere()` exception based data initiated after use of `where()` selector

* **CRUD** (8 methods)
    * `create()` create new object in the data set
    * `read()` retrieve single item from the current data set
    * `update()` update single item from data set
    * `updateValue()` update single value from item in data set
    * `updateAll()` update all items from data set
    * `remove()` delete index from data set
    * `removeValue()` delete single value from item in data set
    * `removeAll()` delete all items from data set
    
* **Store** (2 methods) 🚧 Work in progress
    * `save()` save a data set to the store
    * `retrieve()` retrieve a single set from the store
    
### Examples
This repository holds multiple examples of using Needle JS with a simple `index.html` that will visualise results and
 data. The fastest way getting started with Needle is to play around with these examples, you will find that working 
 with the methods of Needle is fast and simple. Let's take a look at a simple example of the ease of use of Needle.
```javascript
const data = [
    {
        active: true,
        created: '1/1/2020',
        name: 'Sander',
        age: 30,
        city: 'Amsterdam'
    },
    {
        active: true,
        created: '7/10/2019',
        name: 'John',
        age: 45,
        city: 'New York'
    },
    {
        active: false,
        created: '3/20/2019',
        name: 'Sara',
        age: 26
    }
]

const needle = new Needle(data);

needle
    .between('age', [20, 40])
    .has('city')
    .log();
```
The example above will return the first object in the array and log the result to the console. This is because 
Sara is lacking a city, and the `has()` method returns only items that have a given key present in the object. 

![Example](http://sanderhidding.nl/assets/needle-example.jpg)
The example folder contains multiple simple queries and visualisations in tables to illustrate the use of Needle in 
real time. 

### Initiate Needle JS
To use Needle we initiate the class as follows, the class expects an array of objects. 
stick with a clean setup for now.

```javascript
const data = [{...}];
const needle = new Needle(data);
```

### Optional initiation
Besides setting the data within the constructor it can also be set using a setter and be retrieved using the getter. 
Data can be retrieved at any given moment after manipulating it using the a chain of methods. Getting the data will 
always result in the original data set that was set on the initial load. 

#### Set data 
```javascript
needle.data = data;
```

#### Retrieve data 
```javascript
console.log(needle.data);
```
 
## Manipulating
### Numbers
Let's say you wanted to know the who has posted the most comments, or display the highest age of a collection of 
users. Working with numbers can be made easy using several options to retrieve items that fit the query. For the 
following examples I will reuse the data array as used within the top example.

#### Smaller or bigger
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

#### Between
It's also possible to retrieve all values within a range of numbers, this can be done in a similar way using the 
between method. It takes two parameters, a `key` and an `array` containing both ends of the range.
```javascript
const result = needle
    .between('age', [25, 35])
    .take();
    
console.log(result);
```

#### Equal
With the `equal()` method a specific number can be found inside the array of given items. 
```javascript
const result = needle
    .equal('age', 30)
    .take();
    
console.log(result);
```

#### Min and max
If needed you can easily retrieve the lowest or highest value from an given haystack. If multiple items in the array 
match the query all items will be returned. The `min()` and `max()` take one parameter that will look for a matching 
key.

```javascript
const result = needle
    .max('age')
    .take();
    
console.log(result);
```

#### Sum
To quickly sum a total amount of values use the `sum()` method and give it a key to select a value from the 
manipulated array. The function will return the total value of all (leftover) items within the array. The example as shown below, based on the data object as present in the first example will result in 101. 

```javascript
const result = needle
    .sum('age');

console.log(result);
```

### Dates
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
instance, the last 2 days, or maybe do 1 week. Besides `last()` there is also a `next()` method, achieving the samen 
result but instead of looking back it will look forward. 

Both `last()` and `next()` support a simple markup for making queries. You can look for days, weeks, months, 
quarters, always based on the current date. Meaning that doing `last('created', 1, 'months')` will not take the month
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
The `next()` method follows a similar syntax. 
```javascript
const result = needle
    .upcoming('created', 2, 'weeks')
    .take();
    
console.log(result);
```
In the above examples `weeks` and `months` could have been replaced with either `days`, `quarters` or years`as well. 

### Matches
Using filters it's possible to manipulate the data and retrieve a new array of items based on the queries given. For 
instance retrieve all items that have a specific key or value. 

#### Is
To quickly check if a value is `true` use the `is()` method and provide it with a key that needs to be checked. 

```javascript
const result = needle
    .is('active')
    .take();
    
console.log(result);
```

#### Has
To retrieve items with a specific key present within the object use the `has()` method. This will only retrieve 
items that have the given key available within the object. Specify the key as a parameter in the method. 

```javascript
const result = needle
    .has('city')
    .take();
    
console.log(result);
```

#### Has Deep
The `hasDeep()` method will look for nested keys inside an item and retrieve all items that match the given criteria.
 This recursive function will demand more performance if large items are provided. 
```javascript
const data = [
    {
        active: true,
        created: '1/1/2020',
        name: 'Sander',
        age: 30,
        city: 'Amsterdam',
        contact: {
            website: 'http://sanderhidding.nl',
            github: 'waxs'
        }
    }
]

const needle = new Needle(data);

needle
    .hasDeep('github')
    .log();
```

#### Find
To find a match on a specific value use the `find()` method. Be aware that find only works on the first layer of keys
 and does not check recursively for nested keys hold within the object. 
```javascript
const result = needle
    .find('city', 'Amsterdam')
    .take();
    
console.log(result);
```
Find will also work with arrays, bools and numbers. Also an array of matches can be declared, to find multiple 
records holding arrays of their own. If any match can be made the item will be retrieved.
```javascript
const data = [
    {
        active: true,
        created: '12/2/2020',
        name: 'Sander',
        age: 30,
        city: 'Amsterdam',
        hobbies: [
            'Music',
            'Movies'
        ]
    }
]

const needle = new Needle(data);

const result = needle
    .find('hobbies', ['Sports', 'Movies'])
    .take();
    
console.log(result);
```

#### Find Deep
The `findDeep()` method is an advanced way of looking for key value pairs within an item. The regular `find()` method
 will only look for the first layer of keys, the `findDeep()` method will also look within nested objects inside the 
 item. This process is more demanding and will take more performance from the browser. 
```javascript
const data = [
    {
        active: true,
        created: '1/1/2020',
        name: 'Sander',
        age: 30,
        city: 'Amsterdam',
        contact: {
            website: 'http://sanderhidding.nl',
            github: 'waxs'
        }
    }
]

const needle = new Needle(data);

needle
    .findDeep('github', 'waxs')
    .log();
```

### Combinations
Without doing to much work your able to create exceptions within a given query using basic operators. For instance 
you want to select data with a value below `10` but also above `40`, skipping values in between 10 and 40. This can 
be achieved using the `where` operator in combination with the `orWhere` and `andWhere()`. 

#### Where
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

#### orWhere
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

#### andWhere
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

## Testing
Needle methods can be tested using Jest, running the `npm run test` command will execute a number of test to make 
sure basic functionality is working as expected. Test scripts can be found in the `__test__` folder.  

#### Stress Test   
We did a stress test on working with a large data set. We can never assume, at least not for now, that JS 
will outperform the magic of SQL, and this is also not what we were aiming for. In this case Needle hold up pretty well 
going through a massive `7.5MB` mockup file containing over `250.000 lines` of data with over `5500 unique items`. This is 
however no guarantee that your dataset will hold up. Overall performance will vary, some keys might hold extensive 
strings or array's containing multiple strings. It's always wise to limit your dataset as much as possible to achieve
 a better performance. If you like to experience performance yourself generate some JSON online and pass it to Needle. 

**Some tips on making the most out of the limitations of JS.** 
* Chain your queries wisely, limit the size first with simple queries.
* Some queries are more expensive to run, if you limit your dataset using the `select()` method first your 
      second query will have less intense data to work with.
* Most API's have options to limit data, don't take it to far, have a talk with your backend engineer, or use 
     native functions to specify your needs first ;)

## Roadmap
- [x] Deconstruct responsibilities
- [x] Refactor on constructor values
- [x] Fix test issue
- [x] Make library exportable
- [x] Finish CRUD methods
- [ ] Decouple methods in folders
- [ ] Finish store methods
- [ ] Set default parameters for keys
- [ ] Refactor on README.md

## About
This repository is mainly intended as an experiment and to have some fun, a folder with examples is available within 
this repo showing multiple examples as documented above. Check out my [personal website](http://sanderhidding.nl) for 
more information. That's all folks! Cheers. 