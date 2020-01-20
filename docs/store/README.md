# Needle JS

## Store
If you temporally need to save a couple of queries you can do so using the store methods. It will provide you with 
some additional information about the moment the store was created an create an ID for each saved selection. 
This method is additional, obviously you can also store you dataset using the `take()` method. 
    
### Save
The `save()` method will create the store, taking a variable (used as store) and a potential name for the stored 
selection. This name is optional, Needle will create an ID for the selection. 
```javascript
const store = [];

needle
    .find('name', 'Sander')
    .save(store);
```
If you need haven't provided the name the generated ID will be returned. 
```javascript
const store = [];

const id = needle
    .find('name', 'Sander')
    .save(store);

console.log(id);
```

### Retrieve
To help you retrieve one of your selections you can use the `retrieve()` method. With the ID provided it can be used 
to retrieve a specific selection from you store as follows. 
```javascript
const result = needle
    .retrieve(id, store);

console.log(result);
```