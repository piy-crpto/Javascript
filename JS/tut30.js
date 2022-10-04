console.log('tut 30');

const proto ={
    slogan:function()
    {
        return `This company is best`;
    },
    changeName:function(newName)
    {
        this.name = newName
    }
}
const harry = Object.create(proto);
harry.name = "Harry";
harry.role = "Harry";
//console.log(harry);

const harry1 = Object.create(proto,{
       name:{value:"harry",writable:true},
       role:{value:"Programmer"},

});
harry1.changeName("Harry2");
//
//console.log(harry1);

//employee constructor
function Employee(name,salary,experience)
{
    this.name = name;
    this.salary = salary;
    this.experience = experience;
}

//slogan
Employee.prototype.slogan = function()
{
    return `This company is the best, Regards, ${this.name}`;
}
let harryobj = new Employee("Harry",34000,67);
//console.log(harryobj.slogan());

//Programmer
function Programmer(name,salary,experience,language)
{
    Employee.call(this,name,salary,experience);
    this.language = language;
}
//inherit the prototype
Programmer.prototype = Object.create(Emloyee.prototype);

//manually set the prototype
Programmer.prototype.constructor = Programmer;

Programmer.prototype = Object,create
let rohan = new Programmer("Rohan",2,0,"Javascript");
console.log(rohan);
