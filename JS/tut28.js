console.log("This is tut 28");
//object literals : object prototype
let obj ={
    name:"harry",
    channel:"CodeWithHarry",
    adress:"mars"

}
function Object(givenName)
{
    this.name = givenName
}
let obj2 = new Object("Harry")
console.log(obj2);