var current = document.querySelector('.current');
var next = document.querySelector('.next');
var interval;

function startCounter(){

    var input = document.getElementById('input-box').value;
    interval = setInterval(animate, 1000, input);

}

var count = 0;
current.innerHTML = "0";

function animate(input){

    next.innerHTML = ++count;

    if(count > input){
        clearInterval(interval);
        alert("Counter Stopped");
        current.innerHTML = "0";
        count = -1;
        return;
    }

    next.classList.add('animate');
    
    setTimeout(function(){
        current.innerHTML = count;
        next.classList.remove('animate');
    }, 500);

}