# Needle JS
Remember when jQuery was like a big thing and you used to chain methods just to work around some basic DOM 
manipulation. Chaining is fun, but also a bit harsh on your memory. Despite all that, let's have some fun chaining 
like back in the good 'ol days. Needle is a clean helper to find your needle in a haystack of data. Needle has some 
simple helpers to quickly differentiate your data using chained methods being only `7.3KB` in size.

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
4. [About](#about)  

## Getting started
Needle has been build taking intuitive use in account. There are multiple helpers to help you sort, retrieve or 
manipulate an array of contents. Let's dive a little deeper into the options you can use with Needle. 

* **Retrieve Data**
    * `take()` will retrieve an amount of manipulated data
    * `select()` create new items based on given keys
    * `chunk()` create chunks of data
    * `index()` will retrieve a given index from the manipulated data
    * `get()` will return the latest state of the Needle object 
    * `first()` will return the first item from the manipulated data
    * `last()` will return the last item from the manipulated data
    * `count()` will count the amount of results and return a number

* **Sorting**    
    * `sort()` will sort the results `asc` or `desc`
    
* **Debugging**    
    * `log()` will log results to the console
    * `print()` will print results to the DOM
    * `random()` will retrieve a random amount of items 
    
* **Template**
    * `template()` can be used to template results with custom markup
    
* **Numbers**
    * `smaller()` retrieve items smaller than a given parameter
    * `bigger()` retrieve items bigger than a given parameter
    * `between()` retrieve items in between to given parameters
    * `equal()` retrieve an equal to item from the data
    * `min()` retrieve the minimum value from a given key within the data
    * `max()` retrieve a maximum value from a given key within the data
    * `sum()` sum an amount of numbers from a given key in current data
    
* **Dates**
    * `before()` take items from before a given date
    * `after()` take items from after a given date
    * `period()` take items from in between two dates
    
* **Matches**
    * `is()` retrieve items with a bool value that is true
    * `has()` retrieve items if a given key is present in the object
    * `hasDeep()` retrieve items if a given key is present in a nested object
    * `find()` find will retrieve objects with a key value pair match
    * `findDeep()` find will retrieve objects with a nested key value pair match
    
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

## Data 
### Retrieve
There are multiple methods to retrieve the data from Needle as a new array that can be used as you please. Main 
function to be used is the `take()` method, this will return the data and can only be used as the last method within 
the chain. 

#### Take
The take method receives an argument to specify the amount of items, this will "take" the first amount of items 
present from the manipulated array. By default the take function will return all the items if no parameter is specified.
```javascript
needle.take(3);
```

#### Select
If needed a manipulated selection can be retrieved from the array with the `select()` method. With the `select()` 
method a new object will be returned that contains the given selection of keys. Meaning the original item has been 
reduced to the given keys. Let's look at a example. 
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
    .select(['name', 'age', 'contact.website'])
    .log();
```
This query will result in the following item to be returned. 
```javascript
[
    {
        name: 'Sander',
        age: 30,
        website: 'http://sanderhidding.nl'
    }
]
```
In the above example we also see how to reach nested values inside an object. The select method will also reduce the 
original path to the value, meaning `contact.website` is reduced to a first layer key `website`.

#### Chunk
The `chunk()` method will divide the data into separate chunks of data based on a given amount and return
 an array containing these chunks as separate arrays. Besides the chunks the method will also return some information
  about the amount of chunks and size.
```javascript
needle.chunk(5);
```
The example above will return an array containing chunks of 5. The `chunk()` method will however return an object, 
with multiple sets of data and a `prev()` function as well as a `next()` function to retrieve the data set from the 
next or previous chunk. Here is an example.
```javascript
{
    chunks: [[...], [...]],
    current: 0,
    start: [...],
    amount: 2,
    size: 5,
    prev: ƒ prev(),
    next: ƒ next()
}
```
In this case we assume we retrieved chunks with a `size` of 5. The `amount` of chunks is equal to 2 based on a 
dataset of 10. The `start` key holds the first chunk and the `current` position of the chunk is equal to 0. Using the
 `prev()` or `next()` function we can navigate through the chunks. 
```javascript
const chunks = needle.chunk(5);

chunks
    .next()
    .log();
```
The example above will log the next set of chunks. The`next()` or `prev()` function can be extended with the 
modifiers available within Needle. This makes it easy to individually manipulate every chunk of data. 
```javascript
const chunks = needle
    .chunk(2)
    .start(data => html(data));
```
And initial load can be created using the start function. This will be the first chunk of data. It uses an 
implementation of the `template()` method. An example using events is added in the example folder. A example is shown
 below.
```javascript
const prev = document.getElementById('js-prev');
const next = document.getElementById('js-next');

prev.addEventListener('click', () => {
    chunks.prev().template(data => html(data));
});

next.addEventListener('click', () => {
    chunks.next().template(data => html(data));
});
```

#### Index
To get an exact index use the `index()` method. This will take the third item from the array. It will return a single
 object from the array.
```javascript
needle.index(3);
```

#### Get
Get will retrieve the entire object with attached methods. 
```javascript
needle.get();
```

#### First
The first method will return the first item from the array.
```javascript
needle.first();
```

#### Last
The last method will return the last item from the array.
```javascript
needle.last();
```

#### Count
Count will retrieve the number of items within the current manipulated array.
```javascript
const needle = new Needle(data);

const result = needle
    .between('age', [25, 40])
    .get();

console.log(result.count());
```

### Sorting
Besides setting `random()` results, a sorted array can also be retrieved using the `sort()` method. This will take 
two arguments, a `key` and and the direction either ascending with the `asc` string (will be the default) or 
descending using `desc`. It can be used on strings and numbers.
 
```javascript
const result = needle
    .sort('age')
    .take()

console.log(result);
``` 

### Visualising
Before using any filters let's take a look at how to retrieve data from Needle for testing purposes. Data can either 
be logged inside the console or be printed in the DOM, this will use a stringify without any markup. Both functions 
can only be used at the end of a chain. 

#### Log
Log will display the results in the console. An optional number can be given to limit the amount of results. 
```javascript
needle.log(3);
```

#### Print
Print will stringify the (manipulated) data to the DOM. By default it will look for an element with an id of 
`#result`, a specific class or id can also be specified as a parameter, as shown in the example below. If no argument
 is passed and `#result` is not present in the DOM, the results will be printed within the `body` tag, meaning, 
 `print()` will always execute and print results.
```javascript
needle.print('.results');
```

#### Random
If you need a random items for testing use the random method to retrieve a random amount of items. By default the 
random method will return 1 item if used as `random()`.
```javascript
needle
    .random(3)
    .log();
```

### Template
Let's say you want to style some of the results and return them to the DOM. It can be done with a callback function 
in the `template()` method. An example is shown below.
```javascript
needle
    .max('age')
    .template(data => {
        const item = document.createElement('li');
        item.textContent = data.name;
        document.body.appendChild(item);
    });
```
A cleaner way of handling templates is to store the logic in a separate function for instance.
```javascript
const html = data => {
    const item = document.createElement('li');
    item.textContent = data.name;
    document.body.appendChild(item);
}
```
Then use the html function inside the `template()` method to execute the script. 
```javascript
needle
    .max('age')
    .template(data => html(data));
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

## About
This repository is mainly intended as an experiment and to have some fun, a folder with examples is available within 
this repo showing multiple examples as documented above. Check out my [personal website](http://sanderhidding.nl) for 
more information. That's all folks! Cheers. 