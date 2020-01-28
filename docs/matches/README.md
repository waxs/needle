# Needle JS

## Matches
Using filters it's possible to manipulate the data and retrieve a new array of items based on the queries given. For 
instance retrieve all items that have a specific key or value. 

### Is
To quickly check if a value is `true` use the `is()` method and provide it with a key that needs to be checked. 

```javascript
const result = needle
    .is('active')
    .take();
    
console.log(result);
```

### Has
To retrieve items with a specific key present within the object use the `has()` method. This will only retrieve 
items that have the given key available within the object. Specify the key as a parameter in the method. 

```javascript
const result = needle
    .has('city')
    .take();
    
console.log(result);
```

### Has Deep
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

### Find
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
Find method will now also support matching an array of values with a string or single number. For instance, if name 
is either Sander or Nicole. 
```javascript
const result = needle
    .find('name', ['Sander', 'Nicole'])
    .take();
    
console.log(result);
```
To give a little more insight in the power of the `find()` method here are a few examples based on a simple dataset. 
```javascript
const data = [
    {
        name: 'Sander',
        age: 30,
        city: 'Amsterdam',
        hobbies: ['Music', 'Movies']
    },
    {
        name: 'Nicole',
        age: 32,
        city: 'Paris',
        hobbies: ['Dancing', 'Music']
    }
];
```

| Example                               | Result |  
| :---                                  | :--- |
| find('name', 'Sander')                | Will return the first item from the data set (match name Sander)
| find('name', ['Sander', 'Nicole'])    | Will return both items from the data set (match name Sander or Nicole)
| find('age', [25, 30, 35])             | Will return the first item from the data set (match age 30)
| find('hobbies', 'Music')              | Will return both items from the data set (match hobbies Music)
| find('hobbies', ['Dancing']           | Will return the last item from the data set (match hobbies Dancing)
| find('hobbies', ['Dancing', 'Movies'] | Will return both items from the data set (match hobbies Dancing or Movies)

All these variations are covered in Needle. 

### Find Deep
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