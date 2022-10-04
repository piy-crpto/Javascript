console.log('Tut 56');

// for-in and for-of loops
let people = ["Harry","Rohan","SkillF","Shubham","Vikrant"];

//Traditional for loop
// for(let index=0;index<people.length;index++)
// {
//     const element = people[index];
//     console.log(element);
    
// }


//ITERARING AN  OBJECT
let obj = {
    name:"harry",
    language:"javascript",
    hobby:"Android App Development"
}
//console.log(obj);

//Iterating an object using traditional for loop
// for(let index=0;index<Object.keys(obj).length;index++)
//  {
//     const element = obj[Object.keys(obj)[index]];
//     console.log(element);
//  }

//1.2 iterating an object using for-in loop
for(let key in obj)
{
    console.log(obj[key]);
}

//we can use for in with strings to loop through all the characters
//2. ITERATING AN STRING
mystring = "This is my string";
for(let char in mystring)
{
    console.log(mystring[char]);
}


//*********For-of loop *******
console.log("****************For of loop starts  here ******************")
people = ["Harry","Rohan","SkillF","Shubham","Vikrant"];
for(let name of people)
{
    console.log(name);
}

for(let name of mystring)
{
    console.log(name);
}


