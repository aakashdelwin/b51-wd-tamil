// javascript object
let book = {
    author: 'sathish',
    pages: 300,
    price: 2000,
    isAvailable: true,
    title: 'dsa'
}

// converted to JSON string
console.log(JSON.stringify(book));

// JSON: JavaScript Object Notation string
// is a lightweight data interchange format to exchange between a server and a web application
// JSON string
let jsonString = '{"author":"sathish","pages":300,"price":2000,"isAvailable":true,"title":"dsa"}';

// converted to javascript object
console.log(JSON.parse(jsonString));