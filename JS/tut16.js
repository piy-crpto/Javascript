console.log('welcome to tut16');
let element =document.createElement('li');
let text = document.createTextNode('I am a text node');
let text = document.createTextNode('I am a text node');
element.appendChild(text);
//create an element

// add classname and id to the element
element.className = 'children';

element.id = 'createdid1';
element.setAttribute('title' , 'mytitle');
//element.innerText ='hello this is created by me';
//element.innerHTML ='<b>hello this is created by me</b>';
//console.log(element);

let ul = document.querySelector('ul.this');
ul.appendChild(element);
//console.log(ul);


//replace an element
let elem2 = document.createElement('h3');
elem2.id = 'elem2';
elem2.className = 'elem2';
let textnode = document.createTextNode('this is created for elem2')
elem2.appendChild(textnode);
console.log(elem2);
element.replaceWith(elem2);

let myul = document.getElementById('myul');
myul.replaceChild(element, document.getElementById('fui'));
myul.removeChild(document.getElementById('lui'));





