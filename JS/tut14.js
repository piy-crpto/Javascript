//single element selector
//let element = document.getElementById('myfirst');
//element = document.getElementsByClassName('child');
//element = element.className;
//element = element.className;
//element = element.parentNode;
//element.style.color = 'red';
//element.innerText = 'Harry is a good guy';
//element.innerHTML = '<b>Harry is a good guy</b>';
//console.log(element);
//let sel = document.querySelector('#myfirst');
//let sel = document.querySelector('.child');
//let sel = document.querySelector('div');
//console.log(sel);
//sel.style.color = 'red';

//multiple element selector
let eles = document.getElementsByClassName('child');

//console.log(eles);
//console.log(eles[3]);
eles = document.getElementsByClassName('child');
//Array.from(eles).forEach(function(element)
//{
//console.log(element);
  //  element.style.color = 'blue';
//})

for (let index = 0; index < eles.length; index++) {
    const element = eles[index];
    console.log(element);
    element.style.color = 'blue';
    
}
