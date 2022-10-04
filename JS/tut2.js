console.time();
console.log('CodeWithHarry');  
console.log(1); 
console.log(true); 
console.log(null); ;  
console.log([1, 2, 3]); // array inside log
console.log({name:"Harry", language:"JavaScript", tutorial:2}); // object inside log
console.table({name:"Harry", language:"JavaScript", tutorial:2});
 console.log({name:"Harry", language:"JavaScript", tutorial:2}); 

 console.assert(1>2,"Expression is false");
 console.warn(1>2,"This is warning");
// console.clear();
console.timeEnd();
console.error("This is a simple error");
for( i = 0;i < 4;i++)
{
    console.count(i);
}
console.group('simple'); 
console.log('Grouped'); 
console.groupEnd('simple'); 
console.log('new section');
const spacing = '8px'; 
const mystyle =  
`padding: ${spacing}; background-color: white; color: blue ; font-style:
italic; border: 1px solid black dotted; font-size: 2em;`; 
console.log('%cCode With Harry', mystyle);




