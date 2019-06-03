
 var itemlist=document.querySelector('#items');
//parent Node
// console.log(itemlist.parentNode);
// itemlist.parentNode.style.backgroundColor='#f4f4f4';
// console.log(itemlist.parentNode.parentNode);
//parentElement
// console.log(itemlist.parentElement);
// itemlist.parentElement.style.backgroundColor='#f4f4f4';
// console.log(itemlist.parentElement.parentElement);
//parent elemnt and parent node for most part they can be interchanged 
//ChildNodes-notrecommended
//console.log(itemlist.childNodes);
console.log(itemlist.children);
console.log(itemlist.children[1]);
itemlist.children[1].style.backgroundColor='yellow';
// First Child-not recommended
//Use First Element child rather
// console.log(itemlist.firstChild);
// console.log(itemlist.firstElementChild);
// itemlist.firstElementChild.textContent='Hello 1';
//Last Element Child
//console.log(itemlist.lastChild);
// console.log(itemlist.lastElementChild);
// itemlist.lastElementChild.textContent='Hello 1';
//Next Element Sibling
// console.log(itemlist.nextElementSibling);
// //previous Sibling
// console.log(itemlist.previousSibling);
// //previous Element Sibling
// console.log(itemlist.previousElementSibling);
// itemlist.previousElementSibling.style.color='green';
//Create element
//Create a div
var newdiv=document.createElement('div');
//Add a class
newdiv.className='Hello';
//add a id
newdiv.id='Hello';

//Add a attribute
newdiv.setAttribute('title','Hello');
var newdivtext=document.createTextNode('Hello world');
//Add text to div
newdiv.appendChild(newdivtext);
var container=document.querySelector('header .container');
var h1=document.querySelector('header h1');
newdiv.style.fontSize='25px';

//Create a textnode
container.insertBefore(newdiv,h1);
console.log(newdiv);




