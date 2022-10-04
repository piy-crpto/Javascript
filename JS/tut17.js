


console.log('this is tut 17 on events');
document.getElementById('heading').addEventListener
("click",function(e)    // click , mouseover
{
console.log('You have clicked the heading');
//console.log(e);

// e.target give the element
let variable = e.target;
variable = e.target.className;
//variable = e.target.classList;
//variable = Array.from(e.target.className);
//variable = e.target.id;
//variable = e.offsetX;
//variable = e.offsetY;

//variable = e.clientX;



console.log(variable);
// webpage redirect
//location.href = '//codeWithharry.com';
//console.log(e.target);

});