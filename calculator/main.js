var number1, number2, operator;
var ip = document.getElementById('ip-result');

function getValueAndSetToInput(result){
    ip.value += result;  
}

function Ac(){
    ip.value = '';
}