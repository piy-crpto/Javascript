console.log("Tut 52");

//you have to create an alarm clock in javascript (use you cretivity )

var audio = new Audio('https://programminghead.com/audio/audio.mp3');

//Allow user to set alarm for a certain time
const alarmSubmit = document.getElementById('alarmSubmit');

// add event listener to the submit button
alarmSubmit.addEventListener('click',setAlarm);

// function to play the alarm ring tone
function ringBell()
{
    audio.play();
}
function setAlarm(e)
{   
    e.preventDefault();
    
    const alarm = document.getElementById('alarm');
  //  console.log(`Setting Alarm for ${alarm.value}.....`);
    alarmDate = new Date(alarm.value);
    console.log(`Setting Alarm for ${alarmDate}...`);
    now = new Date();
    let timeToAlarm = alarmDate-now;
    console.log(timeToAlarm);
    if(timeToAlarm>=0)
    {    
        setTimeout(()=>{
            ringBell();
        },timeToAlarm);
    }
}
      
