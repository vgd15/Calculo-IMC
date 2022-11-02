
document.getElementById("botaoenviar").addEventListener("click", validaFormulario);

function validaFormulario() {

    var peso =parseFloat(document.getElementById("peso").value);//document.getElementById("peso").value="";
    var altura = parseFloat(document.getElementById("altura").value);//document.getElementById("altura").value="";
    var calculo = peso / (altura*altura);
        calculo=calculo.toFixed(1);

      
        if (document.getElementById("altura").value =="" || document.getElementById("peso").value=="") {
        alert ("Por favor,  preencha todos os dados!");
        }
        
        if (calculo < 18.5){
           alert (`Seu IMC é ${calculo} você está abaixo do peso.`);
        } else if (calculo >= 18.5 && calculo <= 24.9) {
            alert (`Seu IMC é ${calculo} você está com o  peso normal.`);
        } else if (calculo > 24.9 && calculo <=29.9 ) {
            alert(`Seu IMC é ${calculo} você está com sobrepeso.`);
        } else if (calculo > 29.9 && calculo <= 34.9) {
            alert (`Seu IMC é ${calculo} você está com obesidade grau 1`);
        } else if (calculo > 34.9 && calculo <=39.9) {
            alert(`Seu IMC é ${calculo} você está com obesidade grau 2`);
        } else if (calculo > 39.9) {
            alert (`Seu IMC é ${calculo} você está com obesidade grau 3`);
        }

        document.getElementById("peso").value="";
        document.getElementById("altura").value=""
}