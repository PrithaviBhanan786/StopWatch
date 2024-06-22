var hr = 0;
var min = 0;
var sec = 0;

var timer= false;

function stopwatch(){
    if(timer==true){
        sec= sec+1;

        if(sec==60){
            min=min+1;
            sec=0;
        }
        if(min==60){
            hr=hr+1;
            sec=0;
            min=0;
        }
        if(hr==100){
            sec=0;
            min=0;
            hr=0;
        }
        
        var hrstr=hr;
        var minstr=min;
        var secstr=sec;

        if(hr<10){
            hrstr='0'+hrstr;
        }
        if(min<10){
            minstr='0'+minstr;
        }
        if(sec<10){
            secstr='0'+secstr;
        }

        document.getElementById("sec").innerHTML= secstr;
        document.getElementById("min").innerHTML= minstr;
        document.getElementById("hr").innerHTML= hrstr;

        setTimeout("stopwatch()", 1000);
    }
}

function start(){
    timer=true;
    stopwatch();
}

function stop(){
    timer=false;
}

function reset(){
    timer=false;
    sec=0;
    min=0;
    hr=0;

    document.getElementById("sec").innerHTML= '00';
    document.getElementById("min").innerHTML= '00';
    document.getElementById("hr").innerHTML= '00';
}