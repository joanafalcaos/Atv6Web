let nota = parseFloat(prompt("Digite uma nota entre zero e dez:"));

while (isNaN(nota) || nota < 0 || nota > 10) {
    alert("Valor inválido! Digite uma nota entre zero e dez.");
    nota = parseFloat(prompt("Digite uma nota entre zero e dez:"));
}

alert("Você inseriu a nota: " + nota);
