console.log("Welcome tut 31");
class Employee {
        constructor(givenName, givenExperience, givenDivision) {
            this.name = givenName;
            this.experience = givenExperience;
            this.division = givenDivision;
        }

    slogan() {
        return `I am ${this.name} and this company is best`;
    }
    joiningYear() {
        return 2020 - this.experience;
    }
    static add(a, b) {
        return a + b;
    }
    
}
class Programmer extends Employee
    {
        constructor(givenName, givenExperience, givenDivision,givenLanguage,git)
        {
            super(givenName, givenExperience, givenDivision);
            this.language=givenLanguage;
            this.github = git;
        }
         favouriteLanguage()
        {
            if(this.language == 'python')
            {
                return 'python'
            }
            else
            {
                return 'javascript';
            }
        }
        static multiply(a,b)
        {
            return a*b;
        }
    }
// let harry = new Employee("Harry", 56, 3);
// //console.log(harry.joiningYear());
// console.log(Employee.add(34, 5));


let rohan = new Programmer("Rohan",3,"Lays","Go","Rohan420");
 //console.log(rohan);
 console.log(rohan.favouriteLanguage());
 console.log(Programmer.multiply(7,5));