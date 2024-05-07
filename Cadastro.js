function cadastrar() {
    var userNameInput = document.querySelector('.creds[placeholder="User Name"]');
    var emailInput = document.querySelector('.creds[placeholder="Email"]');
    var passwordInput = document.querySelector('.creds[placeholder="password"]');
    var dateInput = document.querySelector('.date');
    var checkBox = document.getElementById('chk');

    if (userNameInput.value !== "" && emailInput.value !== "" && passwordInput.value !== "" && dateInput.value !== "" && checkBox.checked) {
        // Redireciona para a página home
        window.location.href = 'Home.html'; // Verifique se o nome do arquivo está correto
    } else {
        // Mostra uma mensagem de erro ou faça o que for necessário para indicar que o formulário não está completamente preenchido
        alert("Por favor, preencha todos os campos e aceite os termos e políticas.");
    }
}
