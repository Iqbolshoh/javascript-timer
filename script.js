let i = 0;
let interval;
let timeArray = document.getElementById("time").innerHTML.split(":");
let minute = parseInt(timeArray[0]);
let second = parseInt(timeArray[1]);

if (minute > 60) minute = 60;
else if (minute < 1) minute = 0;

if (second > 60) second = 60;
else if (second < 1) second = 0;

function Time() {
    if (second > 0) second--
    else if (second == 0) second = 59, minute--

    if (minute == 0 && second == 0) {
        clearInterval(interval)
        alert("Time is up!")
        minute = parseInt(timeArray[0]);
        second = parseInt(timeArray[1]);
        clearInterval(interval)
    }

    document.getElementById("time").innerHTML = String(minute).padStart(2, "0") + ":" + String(second).padStart(2, "0");

}

function pauseTime() {
    clearInterval(interval);
}

function playTime() {
    clearInterval(interval);
    interval = setInterval(Time, 1000);
}