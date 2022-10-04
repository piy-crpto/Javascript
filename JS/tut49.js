console.log("tut 49");


//Character classes
let regex = /\war/;          //word character - _ or alphabet or numbers
regex = /\w+d1r/;            //  \w+ mean one or more word characters

regex = /\Wbhai/             //Non word character 
regex = /\W+bhai/            //  \w+ means more than one non word character

regex = /number \d999/       //    \d means digit
regex = /number \d+/         //    \d+ means more than one digit

regex = /D999/;              // \D means non digit
regex = /D+999/;              // \D+ means more than one non digit

str = "harh7rd1r4r5r %&%%&&$@bhai harry ka number 8999999999";


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