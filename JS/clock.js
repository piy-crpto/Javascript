console.log("This is clock.js");
function updateClock()
{   
    //Get the current date
    let currentTime = new Date();

    //Extract hour,minute and seconds from the date
    let currentHour = currentTime.getHours();
    let currentMinutes = currentTime.getMinutes();
    let currentSeconds = currentTime.getSeconds();

     //pad 0 if minutes or second is less than 10 (single digit)
    currentMinutes = (currentMinutes<10 ? "0" : "") + currentMinutes;
    currentSeconds = (currentSeconds<10 ? "0" : "") + currentSeconds;
   currentHour = (currentHour<10 ? "0" : "") + currentHour;


   //Convert railway clock to AM/PM clock
  currentHour = (currentHour>12)? currentHour-12:currentHour;
  currentHour = (currentHour==0)? 12:currentHour;

//Choose AM/Pm as per the time of the day
    let timeofDay = (currentHour<12) ? "AM":"PM";


    //Prepare the time string from hours,minutes and seconds
    let currentTimeStr = currentHour + ":" + currentMinutes +  ":" + currentSeconds +  " " + timeofDay;

    //Insert the time string in the DOM
    document.getElementById("clock").innerHTML = currentTimeStr;
}