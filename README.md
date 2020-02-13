# Needle JS
![test](https://github.com/waxs/needle/workflows/test/badge.svg?branch=master)

Needle is a fast, small, clean and flexible package for finding your needle in a haystack of data. Needle has some 
simple helpers to quickly differentiate your data using chained methods while being only `~18.5KB` (and ~5,5KB gzipped)
 in size.

Imagine having to retrieve all items that are active, pretty easy right? These days use an array `.filter()` and you're 
pretty much done. Now consider retrieving all names of the active records in september 2020 where the age is equal to 30. 
This is where Needle comes with just 5 lines of code. 

```javascript
needle
    .is('active')
    .month('created', 'sep', 2020)
    .where('age', 30)
    .values('name');
```

🚧 Package is under development in beta version. 

## Initiate Needle JS
To use Needle we initiate the class as follows, the class expects an array of objects. 
Let's stick with a clean setup for now. You can also use a setter `needle.data = [{...}]` or a getter `needle.data` 
to retrieve the data from Needle.

```javascript
const data = [{...}];
const needle = new Needle(data);
```

## Getting started
Needle has been build taking intuitive use in account. There are multiple helpers to help you sort, retrieve or 
manipulate an array of contents. Let's dive a little deeper into the options you can use with Needle. 

* **Retrieve Data** (12 methods) [Read documentation ⟶](https://github.com/waxs/needle/tree/master/docs/retrieve/README.md)
    * `take()` will retrieve an amount of manipulated data
    * `select()` create new items based on given keys
    * `chunk()` create chunks of data contains `next()`, `prev()` and `start()` function.
    * `values()` will retrieve an array of values from the data set
    * `index()` will retrieve a given index from the data set
    * `get()` will return the latest state of the Needle object 
    * `first()` will return the first item from the data set
    * `last()` will return the last item from the data set
    * `count()` will count the amount of results and return a number

* **Sorting** (1 methods) [Read documentation ⟶](https://github.com/waxs/needle/tree/master/docs/sorting/README.md)
    * `sort()` will sort the results `asc` or `desc`
    
* **Debugging** (3 methods) [Read documentation ⟶](https://github.com/waxs/needle/tree/master/docs/debugging/README.md)
    * `log()` will log results to the console
    * `print()` will print results to the DOM
    * `random()` will retrieve a random amount of items 
    
* **Template** (3 methods) [Read documentation ⟶](https://github.com/waxs/needle/tree/master/docs/template/README.md)
    * `template()` can be used to template results with custom markup contains `empty()` and `results()` function. 
    
* **Numbers** (9 methods) [Read documentation ⟶](https://github.com/waxs/needle/tree/master/docs/numbers/README.md)
    * `smaller()` retrieve items smaller than a given parameter
    * `bigger()` retrieve items bigger than a given parameter
    * `between()` retrieve items in between to given parameters
    * `min()` retrieve the minimum value from a given key within the data
    * `max()` retrieve the maximum value from a given key within the data
    * `average()` retrieve the (closest) average value from a given key within the data
    * `positive()` retrieve all positive items from a given key within the data
    * `negative()` retrieve all negative items from a given key within the data
    * `sum()` sum an amount of numbers from a given key in current data
    
* **Dates** (7 methods) [Read documentation ⟶](https://github.com/waxs/needle/tree/master/docs/dates/README.md)
    * `before()` take items from before a given date
    * `after()` take items from after a given date
    * `period()` take items from in between two dates
    * `month()` take items from a given month
    * `year()` take items from a given year
    * `previous()` take last amount of items based named dates
    * `upcoming()` take next amount of items based named dates
    
* **Matches** (6 methods) [Read documentation ⟶](https://github.com/waxs/needle/tree/master/docs/matches/README.md)
    * `is()` retrieve items with a bool value that is true
    * `not()` retrieve items with a bool value that is false
    * `has()` retrieve items if a given key is present in the object
    * `hasDeep()` retrieve items if a given key is present in a nested object
    * `find()` find will retrieve objects with a key value pair match
    * `findDeep()` find will retrieve objects with a nested key value pair match

* **Combinations** (8 methods) [Read documentation ⟶](https://github.com/waxs/needle/tree/master/docs/combinations/README.md)
    * `where()` find matches based on operator matching key, value pair
    * `orWhere()` exception based data initiated before use of `where()` selector
    * `andWhere()` exception based data initiated after use of `where()` selector
    * `query()` write advanced custom query logic 
    * `or()` to be linked to `query()` for inclusive queries
    * `and()` to be linked to `query()` for exclusive queries 
    * `orQuery()` pipe of queries with an inclusive outcome
    * `andQuery()` pipe of queries with an exclusive outcome

* **Custom** (2 methods) [Read documentation ⟶](https://github.com/waxs/needle/tree/master/docs/custom/README.md)
    * `customEach()` make a custom manipulator
    * `customFilter()` make a custom filter

* **CRUD** (8 methods) [Read documentation ⟶](https://github.com/waxs/needle/tree/master/docs/crud/README.md)
    * `create()` create new object in the data set
    * `read()` retrieve single item from the current data set
    * `update()` update single item from data set
    * `updateValue()` update single value from item in data set
    * `updateAll()` update all items from data set
    * `remove()` delete index from data set
    * `removeValue()` delete single value from item in data set
    * `removeAll()` delete all items from data set
    
* **Store** (2 methods) [Read documentation ⟶](https://github.com/waxs/needle/tree/master/docs/store/README.md)
    * `save()` save a data set to the store
    * `retrieve()` retrieve a single set from the store
    
## Examples
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

## Development
Needle methods can be tested using Jest, running the `npm run test` command will execute a number of test to make 
sure basic functionality is working as expected. Test scripts can be found in the `test` folder.  

### Testing   
We did a stress test on working with a large data set. We can never assume, at least not for now, that JS 
will outperform the magic of SQL, and this is also not what we were aiming for. In this case Needle hold up pretty well 
going through a massive mockup file containing over `250.000 lines` of data with over `5500 unique items`. This is 
however no guarantee that your dataset will hold up. Overall performance will vary, some keys might hold extensive 
strings or array's containing multiple strings. It's always wise to limit your dataset as much as possible to achieve
 a better performance. If you like to experience performance yourself generate some JSON online and pass it to Needle. 

**Some tips on making the most out of the limitations of JS.** 
* Chain your queries wisely, limit the size first with simple queries.
* Some queries are more expensive to run, if you limit your data set using the `select()` method first your 
      second query will have less intense data to work with.
* Most API's have options to limit data, don't take it to far, have a talk with your backend engineer, or use 
     native functions to specify your needs first ;)

### Roadmap
- [x] Deconstruct responsibilities
- [x] Refactor on constructor values
- [x] Fix test issue
- [x] Make library exportable
- [x] Finish CRUD methods
- [x] Refactor on README.md
- [x] Decouple methods in folders
- [x] Finish store methods
- [x] Split and reduce build
- [ ] Set default parameters for keys
- [ ] Refactor
- [ ] 100% testing coverage

## About
This repository is mainly intended as an experiment and to have some fun, a folder with examples is available within 
this repo showing multiple examples as documented above. Check out my [personal website](http://sanderhidding.nl) for 
more information. That's all folks! Cheers. 