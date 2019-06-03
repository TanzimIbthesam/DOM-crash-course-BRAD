//Examine the document object
//console.dir(document);
//console.log(document.doctype);
//console.log(document.URL);
// console.log(document.title);
// document.title='DOM Javscript';
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.all[10]);
// //document.all[10].textContent='Hello';
// console.log(document.forms[0]);
// console.log(document.links);
//console.log(document.getElementById('header-title'));
var titleofheader=document.getElementById('header-title');
console.log(titleofheader);
 //var change=titleofheader.textContent='Hello';
 var change=titleofheader.textContent;
 console.log(change);
 //If we write text-content the display none will show
// console.log(titleofheader.textContent);
//titleofheader.innerHTML='<h3>Hello World</h3>';
//titleofheader.style.borderBottom='solid 3px #000';
//Get element by classname
// var items=document.getElementsByClassName('list-group-item');
// console.log(items);
// console.log(items[1]);
// items[1].textContent='Hello 2';
// items[1].style.fontWeight='bold';
// items[1].style.backgroundColor='#ddd';

// for(var i=0;i<items.length;i<i++){
//     items[i].style.backgroundColor='#ddd';
// }
// Get Elements by tag name
// var li=document.getElementsByTagName('li');
// console.log(li);
// console.log(li[1]);
// li[1].textContent='Hello World';
// li[1].style.fontWeight='bold';
// li[1].style.backgroundColor='#ddd';

// for(var i=0;i<li.length;i<i++){
//         li[i].style.backgroundColor='#ddd';
//      }
//Query Selector-It is recommended to use query selector for only one item
var header=document.querySelector('#main-header');
header.style.borderBottom='4px solid black';
var input=document.querySelector('input');
input.value='Hello World';
var submit=document.querySelector('input[type="submit"]');
//submit.value="SEND";
// submit.style.backgroundColor='red';
// submit.style.color='white';
// var item=document.querySelector('.list-group-item');
// item.style.color='red';
// var seconditem=document.querySelector('.list-group-item:nth-child(2)');
// seconditem.style.color='coral';
// var lastitem=document.querySelector('.list-group-item:last-child');
// lastitem.style.color='red';
// //Query SelectorAll-It is recommended to use query selector for only all items
// var titles=document.querySelectorAll('.title');
// console.log(titles);
// titles[0].textContent='Hello All';
//  var odd=document.querySelectorAll('li:nth-child(odd)');
//  var even=document.querySelectorAll('li:nth-child(even)');

//  for(var i=0;i<odd.length;i++){
//      odd[i].style.backgroundColor='#f4f4f4';
//      even[i].style.backgroundColor='#ccc';
//  }
