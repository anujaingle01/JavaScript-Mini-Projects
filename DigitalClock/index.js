var hourspan = document.getElementById("hour")
var minspan = document.getElementById("min")
var secspan = document.getElementById("sec")
var ampmspan = document.getElementById("amorpm")

function changeTime(){
    var date = new Date()

    var hour = date.getHours()
    hourspan.textContent=hour
    var min = date.getMinutes()
    minspan.textContent=min
    var sec = date.getSeconds()
    secspan.textContent=sec
    
    if(hour===0){
        amorpm="AM"
    }else if(hour>0 && hour<12){
        amorpm="AM"
    }else{
        amorpm="PM"
    }
    ampmspan.textContent=amorpm
}
setInterval(changeTime,1000)

changeTime()