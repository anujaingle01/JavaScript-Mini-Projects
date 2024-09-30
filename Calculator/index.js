
function display(val){
document.getElementById('result').value+=val
}

function clearScreen(){
    document.getElementById('result').value=""
}

function calculate(val){
    var p = document.getElementById('result').value
    var q = eval(p)
    document.getElementById('result').value=q
}