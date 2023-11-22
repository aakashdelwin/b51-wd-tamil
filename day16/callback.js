// // set timeout-callback


// let sayhello=function(){
//     console.log('hello');
// }

// // settime is a method of window object
// setTimeout(sayhello,3000);

function incrementby5(n){
    return n+5;
}
function multiplyby3(n){
    return n*3;
}
function arithmetic(n,increment){
    n=increment(n);
    n=multiplyby3(n);
    console.log(n);

}
let n=5;
arithmetic(n incrementby5);