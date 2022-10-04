console.log('Tut 59');
//JAVASCRIPT SYMBOL

//Symbols    -         // primitive type
const sym1 = Symbol('My identifier');
const sym2 = Symbol('My identifier');
//console.log('Symbol is',sym1);
//console.log('Type of Symbol is',typeof sym1);

const a ="This is";
const b ="This is";

console.log(a===b);
console.log(null===null);
console.log(undefined===undefined);

const k1 = Symbol('identifier for k1');
const k2 = Symbol('identifier for k2');

myObj = {};
myObj[k1] = "Harry";
myObj[k2] = "Rohan";
myObj["name"] = "Good Boy";


console.log(myObj);
console.log(myObj[k1]);
console.log(myObj[k2]);
console.log(myObj.k2);    //!!ALERT can not do this to get Rohan because it is same as myObj["k2"]
 

//symbols are ignored in for-in loops
for(key in myObj)
{
    console.log(key,myObj[key]);
}

console.log(JSON.stringify(myObj));


