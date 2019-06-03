// var document=document.getElementById('button').addEventListener('click',function(){
// console.log('Hello world');
// });
//alternatively we can Write
//EVENTS
// var document=document.getElementById('button').addEventListener('click',btnclick);
// function btnclick(e){
    // console.log('Hello World');
    // document.getElementById('header-title').textContent='Hello Universe';
    // document.querySelector('#main').style.backgroundColor='#f4f4f4';
    // console.log(e);
    //it gives us the actual target
    // console.log(e.target);
    // console.log(e.target.id);
    // console.log(e.target.className);
    // console.log(e.target.classList);
    // var output=document.getElementById('output');
    // output.innerHTML='<h3>'+e.target.id+'</h3>';
    // console.log(e.type);
    // console.log(e.clientX);
    // console.log(e.clientY);
    // console.log(e.offsetX);
    // console.log(e.altKey);
    // console.log(e.cntrlKey);
    // console.log(e.shiftKey);
//}
// var button=document.getElementById('button');
// var box=document.getElementById('box');
//button.addEventListener('click',runEvent);
//button.addEventListener('dblclick',runEvent);
 //button.addEventListener('mousedown',runEvent);
 //button.addEventListener('mouseup',runEvent);
// button.addEventListener('click',runEvent);
//box.addEventListener('mouseenter',runEvent);

//box.addEventListener('mouseleave',runEvent);

//box.addEventListener('mouseover',runEvent);

//box.addEventListener('mouseout',runEvent);
var itemsinput=document.querySelector('input[type="text"]');
var form=document.querySelector('form');
var select=document.querySelector('select');
// itemsinput.addEventListener('keydown',runEvent);
// itemsinput.addEventListener('keyup',runEvent);
// itemsinput.addEventListener('focus',runEvent);
// itemsinput.addEventListener('blur',runEvent);
// itemsinput.addEventListener('cut',runEvent);
// itemsinput.addEventListener('paste',runEvent);
//itemsinput.addEventListener('input',runEvent);
// select.addEventListener('change',runEvent);
// select.addEventListener('input',runEvent);
form.addEventListener('submit',runEvent);
function runEvent(e){
    e.preventDefault();
    console.log('EVENT:TYPE'+e.type);
    // console.log(e.target.value);
    //didnt work
    // document.getElementById('output').innerHTML='<h3>'+e.target.value+'</h3>';

    // output.innerHTML='<h3>MouseX:'+e.offsetX+
    // '</h3><h3>MouseX:'+e.offsetY+'</h3>';
    //box.style.backgroundColor="rgb("+e.offsetX+","+e.offsetY+",40)";
    //For the entire body
    // document.body.style.backgroundColor="rgb("+e.offsetX+","+e.offsetY+",40)";
    
}