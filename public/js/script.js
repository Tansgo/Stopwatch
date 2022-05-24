
const timer = document.getElementById("timer");
const startButton = document.getElementById("start");
const pauseButton = document.getElementById("pause");
const resetButton = document.getElementById("reset");

let current = 0;
let dateRegistered = null;
let dateStopped = null;
let stop = true;

let on;

function start(){
    if (stop) {
        if (!dateRegistered) {
            dateRegistered = new Date();
        }
        if (dateStopped) {
            dateStopped = new Date() - dateStopped;
        }
        stop = false;
        on = setInterval(goTimer, 10);
    }
}

function pause(){
    dateStopped = current;
    stop = true;
    clearInterval(on);
}

function reset(){
    pause();
    dateRegistered = dateStopped = null;
    timer.innerText = "00 : 00 : 00.000"
}

function goTimer(){

    let currentDate =  new Date();
    if (dateStopped) {
        current = new Date(currentDate - dateStopped);
    }else{
        current = new Date(currentDate - dateRegistered);
    }
    const hour = current.getUTCHours();
    const minute = current.getUTCMinutes();
    const second = current.getUTCSeconds();
    const millisecond = current.getUTCMilliseconds();

    timer.innerText = `${hour > 9 ? hour : "0" + hour} : ${minute > 9 ? minute : "0" + minute} : ${second > 9 ? second : "0" + second}.${millisecond > 99 ? millisecond : millisecond > 9 ? "0" + millisecond : "00" + millisecond}`;
}

startButton.onclick = start;
pauseButton.onclick = pause;
resetButton.onclick = reset;




