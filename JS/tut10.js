//Function

function greet(name,thank)
{
let msg= ` ${name} How I wish I could fly to you riht now . Happy birthday  ${thank}!`;
return msg;
}

 let name1 = 'SkillF';
 let name2 = 'Roshan';
let val =greet(name1,'thanks a lot');
console.log(val);

const obj=
{
    name:"skilf",
    game:function()
    {
        return" GTA";
    }
}
console.log(obj.game());

arr=['fruit','vegetable','furniture'];
arr.forEach(function(element,index,array)
{
   console.log(element,index);
});


// very important 
//SCOPE
if(1)
{
var i =234;
console.log(i);
}
console.log(i);
function ui(name)
{  
     i =9;
     console.log(i);
   return `This is a ${name} ui`;
}
console.log(ui("harry"),i);
