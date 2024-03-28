let nome, idade, salario, sexo, estadoCivil;

do {
    nome = prompt("Digite seu nome:");
    idade = parseInt(prompt("Digite sua idade:"));
    salario = parseFloat(prompt("Digite seu salário:"));
    sexo = prompt("Digite seu sexo (feminino ou masculino):").toLowerCase();
    estadoCivil = prompt("Digite seu estado civil (solteiro, casado, divorciado, viúvo):").toLowerCase();

    if (nome.length <= 3) {
        alert("Erro: O nome deve ter mais de 3 caracteres. Por favor, tente novamente.");
    } else if (idade < 0 || idade > 150) {
        alert("Erro: A idade deve estar entre 0 e 150 anos. Por favor, tente novamente.");
    } else if (salario <= 0) {
        alert("Erro: O salário deve ser maior que 0. Por favor, tente novamente.");
    } else if (sexo !== "feminino" && sexo !== "masculino") {
        alert("Erro: O sexo deve ser 'feminino' ou 'masculino'. Por favor, tente novamente.");
    } else if (estadoCivil !== "solteiro" && estadoCivil !== "casado" && estadoCivil !== "divorciado" && estadoCivil !== "viúvo") {
        alert("Erro: O estado civil deve ser 'solteiro', 'casado', 'divorciado' ou 'viúvo'. Por favor, tente novamente.");
    }
} while (nome.length <= 3 || idade < 0 || idade > 150 || salario <= 0 || (sexo !== "feminino" && sexo !== "masculino") || (estadoCivil !== "solteiro" && estadoCivil !== "casado" && estadoCivil !== "divorciado" && estadoCivil !== "viúvo"));

alert("Informações válidas: \nNome: " + nome + "\nIdade: " + idade + "\nSalário: " + salario.toFixed(2) + "\nSexo: " + sexo + "\nEstado Civil: " + estadoCivil);
