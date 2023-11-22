// console.log("hello");
document.getElementById("info").textContent=`welcome subi`
let items=['coffee','tea','green tea','lemon juice']
let list=document.createElement('ul');

items.forEach(items=> {
    let listitem=document.createElement('li');
    listitem.textContent=items;
    list.appendChild(listitem)
}