let millisec = 0;
let sec = 0;
const millisecElement = document.getElementById("millisec");
const secElement = document.getElementById("sec");
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
}

function stopTimer(){
    clearInterval(Interval);
}