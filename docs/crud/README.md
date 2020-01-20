# Needle JS

## CRUD
If you find that in some cases you actually need to add new items to the data set manually, or update values based on 
a certain interaction the CRUD methods provide you with a simple tool for basic operations. If you need additional 
flexibility please take a look at the `customEach()` method to create you own logic. 
    
### Create
The `create()` method will add a new item to the end of the dataset by specifing the new object as a direct parameter
 for the helper function. 
```javascript
needle.create({
    name: 'Sander',
    age: 30
});
```

### Read
With the `read()` method a single item can be retrieved from the dataset. 
```javascript
needle.read(0);
```

### Update
To update an item inside the dataset use the `update()` method. By specifying an index of the, to be, updated item 
and setting a new item, the item will be replaced (updated).
```javascript
needle.update(0, {
    name: 'Sander',
    age: 30
});
```

#### Update Value
To update a single value within the dataset use the `updateValue()` method. This will look for a specific key and 
replace it's content. In the example below, the name of item 0 will be replaced with Sander.
```javascript
needle.updateValue(0, 'name', 'Sander');
```

#### Update All
If needed all items can be updated at once, for instance, to set all items to active. The example below shows how to 
update all keys (active) to `true`. 
```javascript
needle.updateAll('active', true);
```

### Remove
In some cases you might want to remove a particular item from the dataset. This effect can be achieved using the 
`remove()` method. In the example below the item with an index of 0 will be removed from the dataset. 
```javascript
needle.remvove(0);
```

#### Remove Value
If needed a single value (key value pair) can be removed from an item. This can be done using the `removeValue()` 
method. It takes the index of an item and a key. 
```javascript
needle.removeValue(0, 'name');
```

#### Remove All
This method will remove all keys from the dataset. Meaning, for instance you want to remove all "name" keys. The 
example below illustrates this effect. 
```javascript
needle.removeAll('name');
```