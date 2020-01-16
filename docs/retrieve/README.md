# Needle JS

## Retrieve Data 
There are multiple methods to retrieve the data from Needle as a new array that can be used as you please. Main 
function to be used is the `take()` method, this will return the data and can only be used as the last method within 
the chain. 

#### Take
The take method receives an argument to specify the amount of items, this will "take" the first amount of items 
present from the manipulated array. By default the take function will return all the items if no parameter is 
specified. If you need additional info, a second parameter can be declared being a bool value. This will return an 
object with an additional info object. If you don't want to limit the amount of results given but need the info as 
well the first parameter can be declared as `all`, meaning `needle.take('all', true)`.
```javascript
needle.take(3);
```
| Example               | Result |  
| :---                  | :--- |
| take()                | Will return all available items |
| take('all')           | Will return all available items |
| take(3)               | Will return 3 items, if available, meaning if less items are available that amount will be returned |
| take('all', true)     | Will return object with items and info |

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
    start: ƒ this.template(),
    amount: 2,
    size: 5,
    prev: ƒ prev(),
    next: ƒ next()
}
```
In this case we assume we retrieved chunks with a `size` of 5. The `amount` of chunks is equal to 2 based on a 
data set of 10. The `start` key returns the first chunk as a `template()` method and the `current` position of the chunk
 is 
equal to
 0. Using
 the
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
const next = document.getElementById('js-next');

next.addEventListener('click', () => {
    chunks.next().template(data => html(data));
});
```

#### Values
The `values()` method can be used to retrieve a single set of values based on a given key. An array with the 
remaining values will be returned, meaning this method will not return a new instance. The method will look for 
nested keys inside an item and provide the matching value.
```javascript
needle.values('age');
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