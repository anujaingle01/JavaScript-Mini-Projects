
var colors =["White","Green","Yellow","Orange","Blue","Pink"]
var len = colors.length-1

var btncontrol = document.getElementById("btn")
var namecontrol = document.querySelector(".color")

btncontrol.addEventListener("click",()=>{
    var indexno = colorIndex()
    console.log(indexno)

    document.body.style.backgroundColor=colors[indexno]
    namecontrol.textContent=colors[indexno]
})

function colorIndex(){
    return Math.round(Math.random()*len)
}

