console.log("tut 50");
const name = document.getElementById('name');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
let validEmail = false;
let validPhone = false;
let validUser = false;

$('#failure').hide();
$('#success').hide();



// console.log(name,email,phone);
name.addEventListener('blur',()=>{
    console.log("Name is blurred");
    //validate name here
    let regex = /^[a-zA-z]([0-9a-zA-z]){2,10}$/;
    let str = name.value;
    console.log(regex,str);
    if(regex.test(str))
    {
        console.log('Your name is valid');
    name.classList.remove('is-invalid');
          validUser = true;
    }
    else
    {
        console.log('Your name is not valid');
        name.classList.add('is-invalid');
        validUser = false;
    }



})

email.addEventListener('blur',()=>{
    console.log("email is blurred");
     //validate email here
     let regex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
     let str = email.value;
     console.log(regex,str);
     if(regex.test(str))
     {
         console.log('Your email is valid');
         email.classList.remove('is-invalid');
         validEmail = true;
     }
     else
     {
        console.log('Your email is not valid');
        email.classList.add('is-invalid');
        validEmail = false;
     }
})

phone.addEventListener('blur',()=>{
    console.log("phone is blurred");
     //validate phone here
     let regex = /^([0-9]){10}$/;
     let str = phone.value;
     console.log(regex,str);

     if(regex.test(str))
     {
         console.log('Your phone is valid');
         email.classList.remove('is-invalid');
         validPhone = true;
     }
     else
     {
        console.log('Your phone is not valid');
        email.classList.add('is-invalid');
        validPhone = false;
     }
})




let submit = document.getElementById('submit');
submit.addEventListener('click',(e)=>{
    e.preventDefault();
    console.log('You clicked on submit');
    console.log(validEmail,validPhone,validUser);
    //submit your form here

    if(validUser && validPhone && validEmail)
    {
        let failure = document.getElementById('failure');
        console.log('Phone ,email and user are valid. Submitting the form');

        let success = document.getElementById('success');
     success.classList.add('show');
     $('#failure').hide();
     $('#success').show();
    }
    else
    {
        console.log('One of Phone ,email or user are not valid. Hence not Submitting the form');
        let failure = document.getElementById('failure');
        failure.classList.add('show');
        $('#success').hide();
        $('#failure').show();
    }
})