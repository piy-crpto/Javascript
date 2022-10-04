// what is asynchronous programming
console.log("Welcome to tut 34");

setTimeout(() =>{
for(let index = 0;index<45;index++)
{
    const element  = index;
    console.log("This is index number" + index);
}

},100);
console.log('done printing');