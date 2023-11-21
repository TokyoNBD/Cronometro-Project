var display = document.getElementById('display');

var minuto = document.getElementById('minuto');
var segundo = document.getElementById('segundo');
var começar = document.getElementById('começar');

var cronometroSeg;

var minutoAtual;
var segundoAtual;

var interval;

for(var i = 0; i <= 60; i++){
 minuto.innerHTML+='<option value="'+i+'"> '+i+'</option>';
}
for(var i = 1; i <= 60; i++){
segundo.innerHTML+='<option value="'+i+'"> '+i+'</option>';
}

começar.addEventListener('click',function() {
    minutoAtual = minuto.value;
    segundoAtual = segundo.value;

    display.childNodes[1].innerHTML = minutoAtual + ":"+segundoAtual

        interval = setInterval(function(){

        segundoAtual--;

        if(segundoAtual<= 0){
            if(minutoAtual > 0){
                minutoAtual--;
                segundoAtual = 59;
            }else{
                alert("Acabou!!!")
                document.getElementById("sound").play();
                clearInterval(interval)
            }
        }
    display.childNodes[1].innerHTML = minutoAtual + ":" + segundoAtual
     },1000);
})