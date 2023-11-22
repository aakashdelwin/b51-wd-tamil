function numbersof1 (callback) {
    setTimeout(() => {
        console.log("10");
        callback();
    },1000);
} 

function numbersof2 (callback) {
    setTimeout(() => {
        console.log("9");
        callback();
    },1000);
} 

function numbersof3 (callback) {
    setTimeout(() => {
        console.log("8");
        callback();
    },1000);
} 

function numbersof4 (callback) {
    setTimeout(() => {
        console.log("7");
        callback();
    },1000);
} 

function numbersof5 (callback) {
    setTimeout(() => {
        console.log("6");
        callback();
    },1000);
} 

function numbersof6 (callback) {
    setTimeout(() => {
        console.log("5");
        callback();
    },1000);
} 

function numbersof7 (callback) {
    setTimeout(() => {
        console.log("4");
        callback();
    },1000);
} 

function numbersof8 (callback) {
    setTimeout(() => {
        console.log("3");
        callback();
    },1000);
} 

function numbersof9 (callback) {
    setTimeout(() => {
        console.log("2");
        callback();
    },1000);
} 

function numbersof10 (callback) {
    setTimeout(() => {
        console.log("1");
        callback();
    },1000);
} 


//call back hell 
numbersof1 (function () {
    numbersof2 (function (){
        numbersof3 (function (){
           numbersof4 (function (){
            numbersof5 (function (){
                numbersof6 (function (){
                    numbersof7 ( function (){
                        numbersof8 (function (){
                            numbersof9(function (){
                                numbersof10 (function (){
                                    console.log('happy independence day');
                                });
                            });
                        });
                    });
                });
            });
           });
        });
    });
});

