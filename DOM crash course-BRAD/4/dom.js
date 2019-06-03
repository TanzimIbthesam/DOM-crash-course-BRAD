var form=document.getElementById('addForm');
var itemlist=document.getElementById('items');
var filter=document.getElementById('filter');
form.addEventListener('submit',addItem);
//Delete item
itemlist.addEventListener('click',removeitem);
//Additem
filter.addEventListener('keyup',filteritems);
function addItem(e){
e.preventDefault();
console.log('Clicked');
//Get input value
var newitem=document.getElementById('item').value;
//Create new li element
var li=document.createElement('li');
li.className='list-group-item';
li.appendChild(document.createTextNode(newitem));
//Create del button
var deleteBtn=document.createElement('button');
//Add classes to delete button
deleteBtn.className='btn btn-danger btn-sm float-right delete';
deleteBtn.appendChild(document.createTextNode('X'));
//Append button to li
li.appendChild(deleteBtn);
//Append li to list
itemlist.appendChild(li);
itemlist.appendChild(li);
//console.log(li);
}
//Remove item
function removeitem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are you sure?')){
            var li=e.target.parentElement;
            itemlist.removeChild(li);
        }
    }
}
//Filter items
function filteritems(e){
    //convert text to lowercase
 var text=e.target.value.toLowerCase();
 var items=itemlist.getElementsByTagName('li');
 //Convert to an array
 Array.from(items).forEach(function(item){
     var itemname=item.firstChild.textContent;
    console.log(itemname);
    if(itemname.toLowerCase().indexOf(text)!=-1){
        item.style.display='block';
    }else{
        item.style.display='none';
    }
 });
 
}