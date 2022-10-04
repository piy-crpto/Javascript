const students = [
    {name:"harry",subject:"Javascript"},
    {name:"rohan",subject:"Machine Learning"},
]

function enrollStudent(student,callback)
{
    setTimeout(function()
    {
        students.push(student);
        console.log("Students has been enrolled");
        callback();
    },3000);
}

function getStudents()
{
    setTimeout(function()
    {
        let str = "";
        students.forEach(function(student)
        {
            str += `<li> ${student.name}</li>`
        });
        document.getElementById('students').innerHTML = str;
        console.log("Students have been fetched");
    },1000);
}

let newStudent = {name :"sunny",subject:"Python"}
enrollStudent(newStudent,getStudents);
//getStudents();

