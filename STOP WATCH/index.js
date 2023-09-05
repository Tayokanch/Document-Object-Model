
const startStopBtn = document.querySelector('#startStopBtn');
const resetBtn = document.querySelector('#resetBtn');

let seconds = 0;
let minutes = 0;
let hours = 0;

let loadingSeconds = 0;
let loadingMinutes = 0;
let loadingHours = 0;

let timerInterval = null;
let timerStatus = "Stopped";

function stopWatch() {
    //This condition is to stop seconds once it get to 60 and return it back to zero(0)
    seconds++;
    if (seconds / 60 === 1) {
        seconds = 0;
        minutes++;
        if (minutes / 60 === 1) {
            minutes = 0;
            hours++;
        }
    }

    //Ternary Operator
    //loadingSeconds = seconds < 10 ? "0" + seconds : seconds;
    //loadingMinutes = minutes < 10 ? "0" + minutes : minutes;
    //loadingHours = hours < 10 ? "0" + hours : hours;

    if(seconds < 10){
        loadingSeconds = "0" + seconds.toString();
    }
    else{
        loadingSeconds = seconds;
    }


    if(minutes < 10){
        loadingMinutes = "0" + minutes.toString();
    }
    else{
        loadingMinutes = minutes;
    }

    if(hours < 10){
        loadingHours = "0" + hours.toString();
    }
    else{
        loadingHours = hours;
    }


    let displayTimer = document.getElementById('timer').innerText = `${loadingHours}:${loadingMinutes}:${loadingSeconds}`;
}

//This is to add the function stopWtach to the startStopBtn button
startStopBtn.addEventListener('click', function () {
    //START
    if (timerStatus === "Stopped") {
        timerInterval = window.setInterval(stopWatch, 1000);
        startStopBtn.innerHTML = `<i class="fa-solid fa-pause" id="pause"></i>`;
        timerStatus = "Started";
    } else {
        //PAUSE
        window.clearInterval(timerInterval);
        startStopBtn.innerHTML = `<i class="fa-solid fa-play" id="play"></i>`;
        timerStatus = "Stopped";
    }
});

//RESET
resetBtn.addEventListener('click', function () {
    window.clearInterval(timerInterval);
    seconds = 0;
    minutes = 0;
    hours = 0;

    document.getElementById('timer').innerHTML = "00:00:00"
});
