let millisec = 0;
let sec = 0;
let min = 0;
const millisecElement = document.getElementById("millisec");
const secElement = document.getElementById("sec");
const minElement = document.getElementById("min")
const Interval = setInterval(startTimer, 10);

function startTimer(){
    millisec++;

    if(millisec <= 9){
        millisecElement.innerHTML = "0" + millisec;
    }else if(millisec > 9){
        millisecElement.innerHTML = millisec;
    }

    if(millisec > 99){
        sec++;
        secElement.innerHTML = "0" + sec;
        millisec = 0;
        millisecElement.innerHTML = "0" + millisec;
    }

    if(sec > 9){
        secElement.innerHTML = sec;
    }

    if(sec > 60){
        min++;
        minElement.innerHTML = "0" + min;
        sec = 0;
        secElement.innerHTML = "0" + sec;
    }

    if(min > 9){
        minElement.innerHTML = min;
    }
}

function stopTimer(){
    clearInterval(Interval);
}