console.log('welcome tut 18');
//let btn = document.getElementById('btn');

//cliclevent
//btn.addEventListener('click',func1);
//btn.addEventListener('dblclick',func2);
//btn.addEventListener('mousedown',func3);
//function func1(e)
//{
 //   console.log("Thanks",e);
 //   e.preventDefault();

//}

//dblclick
//function func2(e)
///{
  //  console.log("Thanks it is a double click",e);
 //   e.preventDefault();

//}
//mousedown
//function func3(e)
//{
//  console.log("Thanks it is a mouse down ",e);
//   e.preventDefault();

//}

//document.querySelector('.container').addEventListener
//('mouseenter',function()
//{
 //   console.log('You have entered no');
//});

//document.querySelector('.container').addEventListener
//('mouseleave',function()
//});

document.querySelector('.container').addEventListener
('mousemove',function(e)
{
   // console.log('You you triggered mouse move event');
   console.log(e.offsetX,e.offsetY);
   //document.body.style.backgroundColor = 'red';
   document.body.style.backgroundColor = `rgb(${e.offsetX},${e.offsetX},${e.offsetY})`;


});



