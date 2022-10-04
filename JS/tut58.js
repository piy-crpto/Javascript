console.log("Tut 58");
//Javascript Scripts
//set stores unique values
const mySet = new Set();    //Initialize an empty set
console.log('The set looks like :',mySet);

//Adding values to the set
mySet.add('this');
mySet.add('MY Name');
mySet.add('this');
mySet.add('that');
mySet.add(34);
mySet.add(true);

console.log('The set looks like this now  :',mySet);

//use a constructor to initialize the set
// let mySet2 = new Set([1,45,'this',false,{a:4,b:9},'this']);
// console.log('New Set :',mySet2);

console.log(mySet.size);   // Get the size of the set

console.log(mySet.has(34));    //Check whether set has 34 or not

console.log('before removing : ',mySet.has('this'));
mySet.delete('this');       //Remove an element from the set
console.log('after removing : ',mySet.has('this'));

//Iterating the set
// for(let item of mySet)
// {
//     console.log('Item is :',item);
// }

mySet.forEach((item)=>{
    console.log('Item is :',item);
})

//quiz : can you use Array.from(mySet) to convert set into array?
let myArray = Array.from(mySet);
console.log('Set to array is ',mySet);



