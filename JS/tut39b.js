const students = [
    {name:"harry",subject:"Javascript"},
    {name:"rohan",subject:"Machine Learning"},
]

function enrollStudent(student)
{   return new Promise(function(resolve,reject){
    setTimeout(function()
    {
        students.push(student);
        console.log("Students has been enrolled");
        const error = false;
        if(!error)
        {
            resolve();

        }
        else{
            reject();
        }
    },3000);
})
   
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
enrollStudent(newStudent).then(getStudents).catch(function()
{
    console.log("Some error occured");
});
//getStudents();


// function in inside then is ran as  = resolve()
// function in inside catch is ran as  = reject()

// quick quiz 
