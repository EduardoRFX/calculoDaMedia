var notaDoPrimeiroBimestre = document.getElementById("primeiraNota");
var notaDoSegundoBimestre = document.getElementById("segundaNota");
var notaDoTerceiroBimestre = document.getElementById("terceiraNota");
var notaDoQuartoBimestre = document.getElementById("quartaNota");

function calcularNota() {
    var nome = document.getElementById("nome").value;
    var nomeDoAluno = nome;
    var nota1 = parseFloat(notaDoPrimeiroBimestre.value);
    var nota2 = parseFloat(notaDoSegundoBimestre.value);
    var nota3 = parseFloat(notaDoTerceiroBimestre.value);
    var nota4 = parseFloat(notaDoQuartoBimestre.value);
    var notaFinal = (nota1 + nota2 + nota3 + nota4) / 4;
    console.log(notaFinal);
    var ResultadoFinal = document.getElementById("resultadoFinal");
    ResultadoFinal.innerHTML = "Sua nota Final foi: " + notaFinal;

    if (notaFinal >= 7){
        var aprovadoOuReprovado = document.getElementById("aprovadoOuReprovado");
        aprovadoOuReprovado.innerHTML = nomeDoAluno + " " + "você foi aprovado!! " + "com nota final de: " + notaFinal;
    } else{
        var aprovadoOuReprovado = document.getElementById("aprovadoOuReprovado");
        aprovadoOuReprovado.innerHTML = nomeDoAluno + " " + "você foi reprovado!! " + "com nota final de: " + notaFinal;
    }
}
