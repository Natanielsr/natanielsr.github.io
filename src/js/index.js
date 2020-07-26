document.getElementById("ganhoMes").value = 2500;
document.getElementById("horasDia").value = 5;
document.getElementById("diasSemana").value = 5;

const semanasPorMes = 30/7;
let ganhoMes;
let horasDia;
let diasSemana;

function calcular(){
    ganhoMes = document.getElementById("ganhoMes").value;
    horasDia = document.getElementById("horasDia").value;
    diasSemana = document.getElementById("diasSemana").value;

    document.getElementById("valorHora").innerHTML = round(calcValorHora(), 2);

    document.getElementById("diasTrabalhados").innerHTML = round(calcDiasTrabalhados(), 0);

    document.getElementById("ganhoDia").innerHTML = round(calcGanhoPorDia(), 2);

    document.getElementById("ganhoSemana").innerHTML = round(calcGanhoPorSemana(), 2);
}

function calcValorHora(){
    return ganhoMes /((calcDiasTrabalhados())*horasDia);
}

function calcDiasTrabalhados(){
    return diasSemana*semanasPorMes;
}

function calcGanhoPorDia(){
    return horasDia*calcValorHora();
}

function calcGanhoPorSemana(){
    return diasSemana*calcGanhoPorDia();
}

function round(num, places){
    return +(parseFloat(num).toFixed(places));
}