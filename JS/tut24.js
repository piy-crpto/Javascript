// date() and time()
// data and time are the reference data type
console.log('tut 24');
let today = new Date();
//console.log(today);
//let otherDate = new Date('June 13 1976');
//// otherDate = new Date('09/16/1976');

let otherDate = new Date('8-4-2003 04:54:08');
console.log(otherDate);
let a;
a= otherDate.getDay();
 a = otherDate.getDate();
 a = otherDate.getMinutes();
 a = otherDate.getHours();
 a = otherDate.getSeconds();
 a  = otherDate.getTime;
 a  = otherDate.getMilliseconds;
 a  = otherDate.getMonth;

 console.log(a);
 otherDate.setDate(23);
 otherDate.setMonth(2);
 otherDate.setFullYear(1900);
 otherDate.setMinutes(19);
 otherDate.setHours(10);
 otherDate.setSeconds(50);
 console.log(otherDate);
