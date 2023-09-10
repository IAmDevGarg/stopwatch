
var x = y = z = 0
var myinterval
var state = false
var disable

function start(){
 x = y = z = 0
 myinterval = setInterval(mytimer,10)
 state = false
 disable = document.getElementById('btn1')
 disable.disabled = true
}
function mytimer(){
    x = x+1
    if(x===100){
        y= y + 1
        x=0
        if(y===60){
            z = z+1
            y=0
            
        }
        if(z===60){
            x = y = z =0
        }
    }
    document.getElementById('result').innerHTML=
    '<h1>'+ String(z).padStart(2,'0')+' : '+String(y).padStart(2,'0')+' : '+String(x).padStart(2,'0')+'</h1>'
}
function pause(){
    state = !state
    if(state === true){
        clearInterval(myinterval)
    }
    else{
        myinterval = setInterval(mytimer,10)
    }
}
function restart(){
    clearInterval(myinterval)
    state = false
    x=y=z=0
    disable =  document.getElementById('btn1')
    disable.disabled = false
    document.getElementById('result').innerHTML=
    '<h1>'+ String(z).padStart(2,'0')+' : '+String(y).padStart(2,'0')+' : '+String(x).padStart(2,'0')+'</h1>'
}