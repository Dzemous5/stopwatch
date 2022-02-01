const btnStart = document.getElementById("btn-start");
const btnStop = document.getElementById("btn-stop");
const btnReset = document.getElementById("btn-reset");

const daysSp = document.getElementById("days");
const hoursSp = document.getElementById("hours");
const minutesSp = document.getElementById("minutes");
const secondsSp = document.getElementById("seconds");

let days = 0;
let hours = 0;
let minutes = 0;
let seconds = 0;

window.onload=()=>{
    daysSp.innerText = days;
    hoursSp.innerText = hours;
    minutesSp.innerText = minutes;
    secondsSp.innerText = seconds;
}

let onOff;

btnStart.addEventListener("click", ()=>{
    if (onOff == null){
    onOff = setInterval(stoper, 1000);
    };
})

btnStop.addEventListener("click", ()=>{
    clearInterval(onOff);
    onOff = null;
})

btnReset.addEventListener("click", ()=>{
    clearInterval(onOff);
    onOff = null;
    days = 0;
    hours = 0;
    minutes = 0;
    seconds = 0;
    daysSp.innerText = days;
    hoursSp.innerText = hours;
    minutesSp.innerText = minutes;
    secondsSp.innerText = seconds;
})


function stoper(){
    if(seconds>=0 && ((seconds+1)<=59)){
        seconds++;
        secondsSp.innerText = seconds;
    }else{
        seconds=0;
        secondsSp.innerText = seconds;
        minutes++;
 
        if(minutes>=0 && ((minutes+1)<=59)){
            minutesSp.innerText = minutes;
        } else{
            minutes=0;
            minutesSp.innerText = minutes;
            hours++;
            
            if(hours>=0 && ((hours+1)<=23)){
                hoursSp.innerText = hours;
            }else{
                hours=0;
                hoursSp.innerText = hours;
                days++;
                daysSp.innerText = days
            }
        }
    }
}


