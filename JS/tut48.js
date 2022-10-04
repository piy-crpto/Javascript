
// Regular Expression Character set
//character set - we use []
console.log('tut 48');
//const  regex = /^h/i;
let  regex = /h[ryu]rry/;   //can be r,y or u
 regex = /h[a-z]rry/;    //can be any character from a to z
 regex = /h[^aty]rry/;    //can not be a or t or y
 regex = /h[^aty]rr[yu]/; 
 regex = /h[a-zA-Z]rr[yu0-9][0-9]/;  
 
 //Quantifiers  -we use {}
 regex = /har{2}y/;     //r can occur exactly two times
 regex = /har{0,2}y/;     //r can occur exactly 0 to 2 (0 or 1 or 2) times

 //Groupings -we use paranthesis for grouping ()
 regex = /(har){2}/;
 const str = "harharbhai Bhai";

 regex = /(har){2}([0-9]r){3}/;
 const str = "harhar1r4r5r bhai";
 
//const str = "hirry9 Bhai";


let result = regex.exec(str);
console.log("The result from exec is ",result);

if(regex.test(str))
{
    console.log(`The string ${str} matches the expression ${regex.source}`);
}
else
{
    console.log(`The string ${str} does not matches the expression ${regex.source}`);
}
