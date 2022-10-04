console.log("Tut 47");
let regex = /harry/;
 regex = /harrshdb/;
//lets look into some metacharacter symbol
regex = /^harrdc/; //^ means expression will match if string starts with 
regex = /ry$/;      //$ at the end of the string means "string end with"
regex = /h.rry/;  // match any one character
regex = /h*rry/;  // matches 0 or more character
regex = /h*rry/;  // matches 0 or more character
regex = /ha?rryi?t/; // ? after character means that character is optional
regex = /h\*arry/;

//let str = "Harry is a good boy and harry is code with harry";
let str = "harry is harry";

let result  = regex.exec(str);
console.log("The result from exec is ",result);

if(regex.test(str))
{
    console.log(`The string ${str} matches the expression ${regex.source}`);
}
else
{
    console.log(`The string ${str} does not matches the expression ${regex.source}`);
}
