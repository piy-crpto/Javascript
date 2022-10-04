// Type conversion
console.log('Welcome to tut 5');
let myVar;
myVar = String(34);
console.log(myVar,(typeof myVar));

let booleanVar = String(true);
console.log(booleanVar,(typeof booleanVar));

let date = String(new Date());
console.log(date,(typeof date));

//let arr = [1,2,3,4,5];
//console.log(arr,(typeof arr));

//let arr = String([1,2,3,4,5]);
//console.log(arr,(typeof arr));

let arr =String([1,2,3,4,5]);
console.log(arr.length,(typeof arr));

let i =8;
console.log(i.toString());

// type coercion

//let mystr = '698';
let mynum = 32;
//console.log(mystr+mynum);
let mystr = Number('698');
console.log(mystr+mynum);











