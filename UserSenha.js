let usuario, senha;

do {
    usuario = prompt("Digite o nome de usuário:");
    senha = prompt("Digite a senha:");

    if (usuario === senha) {
        alert("Erro: A senha não pode ser igual ao nome de usuário. Por favor, tente novamente.");
    }
} while (usuario === senha);


