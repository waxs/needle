# Needle JS

## Debugging
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