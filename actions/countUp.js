function animateValue(id){
    var obj = document.getElementById(id);
    var current = obj.innerHTML;
    
    setInterval(function(){
        obj.innerHTML = current++;
    },1000);
}

window.onload = animateValue('countNumber');