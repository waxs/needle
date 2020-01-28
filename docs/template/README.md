# Needle JS 

## Template
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
#### How to do a clean native template?
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
#### Handle index for results
A second parameter is also available that will provide the index of the current item. 
```javascript
needle
    .max('age')
    .template((data, index) => {
        console.log(data, index)
    });
```
#### Using this in your template
If you need access to the `this` value referring to Needle, a arrow notation can not be used. This is because arrow 
function expressions are suited as methods, and not be used as constructors. However a workaround is available using 
a traditional `function()`.
```javascript
needle
    .template(function(data) {
        console.log(this);
        html(data);
    });
```

#### Set amount of results
If you need to display the amount of results given by Needle the `results()` method can template it for you. IT can 
only be used in combination with the template function for now, but the results can also be accessed through the use 
of a getter `needle.info`.
```javascript
const needle = new Needle(data);

const showResults = info => {
    const amount = document.body.querySelector('#amount');
    amount.innerText = info.length + '/' + info.set;
}

needle
    .bigger('age', 30)
    .template(data => html(data))
    .results(showResults);
```

#### Set no results 
Needle has a template helper that can be used linked with the `template()` method called `empty()`, it will only 
execute if no results have been found. It can be used as a callback like so. 
```javascript
const needle = new Needle(data);

const noResults = () => {
    const results = document.body.querySelector('#result');
    results.innerText = 'No results found';
}

needle
    .bigger('age', 100)
    .template(data => html(data))
    .empty(noResults);
``` 
Let's say the example above doesn't hold any results, the `template()` won't execute and the `empty()` method will 
take over. Meaning the `noResults` function as shown above will be executed. 