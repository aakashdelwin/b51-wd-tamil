// 1. how to compare two JSON have the same properties without order ?
//   a. let obj1 = {name: "person 1", age: 5};
//   b. let obj2 = {age:5 , name: "person1"};

// 2. use the rest countries API URL -> https://restcountries.com/v3.1/all and display all the country flags in the console
// 3. use the same rest countries and print all countries names, regions,sub-region and populations

// 1. how to compare two JSON have the same properties without order ?
//   a. let obj1 = {name: "person 1", age: 5};
//   b. let obj2 = {age:5 , name: "person1"};

let obj1 ={
    name :"person1", 
    age: 5
};

let obj2 ={
    age:5,
    name :"person1"
};

 let obj3 = obj1;
  console.log(obj1 === obj2);


// 2. use the rest countries API URL -> https://restcountries.com/v3.1/all and display all the country flags in the console
let XMLHttpRequest = require('xhr2');

// create an object to the XMLHttpRequest class
let xhr = new XMLHttpRequest();

// open the connection
xhr.open('GET', 'https://restcountries.com/v3.1/all');

// handle the response data
xhr.onload = function () {
    let objects= JSON.parse(xhr.responseText);
    
    for (let data of objects){
        console.log(data['flag']);
    }
};

// send the http request
xhr.send();


//3. use the same rest countries and print all countries names, regions,sub-region and populations


let XMLHttpRequest = require('xhr2');

// create an object to the XMLHttpRequest class
let xhr = new XMLHttpRequest();

// open the connection
xhr.open('GET', 'https://restcountries.com/v3.1/all');

// handle the response data
xhr.onload = function () {
    let objects = JSON.parse(xhr.responseText);
    
    for (let data of objects){
        console.log(data['name']);
        console.log(data['region']);
        console.log(data['subregion']);
        console.log(data['population']);
    }
};

// send the http request
xhr.send();