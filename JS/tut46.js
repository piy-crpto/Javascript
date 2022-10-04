console.log("tut 46");

// Regular expression
let reg = /harry/;           //this is regular expression literal in js
let reg = /harry/g;           // g means global
let reg = /harry/i;           // i means case insensitive
console.log(reg);
console.log(reg.source);


let s = "This is great code with harry and also harry bhai ";
//Function to match expressions

//1. exec() - This function will return an array for match or null for no match
let result = reg.exec(s);
if(result){     //we can use multiple exec with global flag
console.log(result); 
console.log(result.input);
console.log(result.index);
}
// let result = reg.exec(s);
// console.log(result);


//2. test()- returns true or false
let result2 = reg.test(s);
console.log(result2);    // this will only print true if the "reg" is there in the string "s"

// 3. match()- It will return an array of result or null
let result3 = s.match(reg);        //this is right
console.log(result3);


//4. search() - Returns index of first match else -1
let result4 = s.search(reg);     //this is right
console.log(result4);

//5. replace() - Returns string with all the replacements (if no flag is givem ,first match will be replaced)

let result5 = s.replace(reg,"SHUBHAM");
console.log(result5);


//quick quiz
