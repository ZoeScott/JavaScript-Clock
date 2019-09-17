//We need a way to get the current time and have that updated each second


//To do this we are going to create a function that contains a timer to call itself against each seond

function showTime() {
    var date = new Date(); //This gets us current day and time

    var hour = date.getHours(); //0-23
    var minute = date.getMinutes(); //0-59
    var seconds = date.getSeconds(); //0-59

    console.log(hour);
    console.log(minute);
    console.log(seconds);

    //We need to make sure the time is properly represented in 12-hr time, and we also need to determine wether we should display AM or PM

    //With our hours being between 0 and 23, 0 would equal 12 AM and anything 12 and above is a PM hour

    if (hour === 0) {
        hour = 12; //If hour equals 0, chamge it to 12.
    } else if (hour >= 12) {
        period = "PM"; 
    }

    if (hour > 12) {
        hour = hour - 12; //If hour is greater than 12, subtract 12 from it: 13 === 1
        period = "PM"; 
    }

    hour = (hour < 10) ? ("0" + hour) : hour; //IF hour is less than 10, set hour equal to 0 plus the value of hour

    minute = (minute < 10) ? ("0" + minute) : minute; 
    \second  (secind < 10)?


    //This is a sting to store the current time
    var time = hour + ":" + minute + ":" + seconds + period;

    document.getElementById("clockDisplay").innerText = time; 

    setTimeout(showTime, 1000)

}

showTime();