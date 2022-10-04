// primitive data type
//string
var name ="harry";
console.log("My name is " + name);
console.log("Data type is " + (typeof name));

//Numbers
let marks = 56;
console.log("Data type is " + (typeof marks));

//boolean
let isdriver  = true;
console.log("Data type is " + (typeof isdriver));

//Null    data type is object
let nullVar = null;
console.log("Data type is " + (typeof nullVar));

//undefined
let undef = undefined;
console.log("Data type is " + (typeof undef));



//Reference data type
//Arrays
let myarr =[1,2,3,4,false,"string"];
console.log("Data type is " + (typeof myarr));

//object literalsl
let stMarks =
{
    harry : 56,
    sohan : 70,
    rohan : 68


}
console.log(stMarks);
console.log("Data type is " + (typeof stMarks));

function findName() {
    
}
console.log("Data type is " + (typeof findName));

let data=new Date();
console.log("Data type is " + (typeof data));



