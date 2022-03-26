var speed = 1;
var time = "00:00:00:000";
var startTime = Date.now();
var bool = false;
function submit(){
    var speedValue = document.getElementById("speed").value;
    speed = speedValue;
    if(!isNaN(speedValue) && speedValue != ""){
        $("#submit").remove();
        $("#speed").remove();
        $("#time").css("opacity", "1")
        $("#start").css("opacity", "1")
    }
}


function clear(){
    $("#speed").val("")
}

function run(){
    if(bool){
        var now = Date.now();
        var time = (now - startTime) / 1000 * speed;
        var seconds = Math.floor(time % 60);
        var s = seconds.toString(10);
        s = ('00'+s).substring(s.length);
        var minutes = Math.floor((time / 60) % 60);
        var m = minutes.toString(10);
        m = ('00'+m).substring(m.length);
        var hours = Math.floor((time / 3600) % 60);
        var h = hours.toString(10);
        h = ('00'+h).substring(h.length);
        var milliseconds = Math.floor((time * 1000) % 1000);
        var ms = milliseconds.toString(10);
        ms = ('000'+ms).substring(ms.length);
        var time = h + ":" + m + ":" + s + ":" + ms;
        document.getElementById("time").innerHTML = time;
        setTimeout(run, 1);
    }
}

function start(){
    startTime = Date.now();
    bool = !bool;
    if(bool){
        $("#start").val("Stop");
        run();
    }
    else{
        $("#start").val("Start");
    }
}