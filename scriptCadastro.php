<?php
require_once "Conexao.php";
require_once "Usuario.php";
require_once "UsuarioDAO.php";

$usuarioDAO = new UsuarioDAO();
$email = $_POST['email'];

$sql = "SELECT * FROM usuario WHERE email = '$email'";
$stmt = Conexao::getConn()->prepare($sql);
$stmt->execute();

if (strlen($_POST["nome"]) > 0 && strlen($_POST["password"]) > 0 && strlen($_POST["email"]) > 0) {
    if (count($stmt->fetchAll(PDO::FETCH_OBJ)) > 0 || count($_POST) == 0) {
        echo 'O email já existe';
    } else {
        // Valida e processa os dados do formulário
        $nome = $_POST['nome'];
        $email = $_POST['email'];
        $senha = password_hash($_POST['password'], PASSWORD_DEFAULT);

        $usuario = new Usuario($nome, $email, $senha);

        $usuarioDAO->create($usuario);
        header("Location: Login.php");
        exit();
    }
} else {
    echo "Insira todas as credenciais";
}




// echo "eita";
// print_r($_POST);

// <?php
// $senha = 'sua_senha_aqui'; // A senha que você quer fazer hash

// // Use a função password_hash() para criar um hash da sua senha
// $hash = password_hash($senha, PASSWORD_DEFAULT);

// echo $hash; // Isso irá imprimir o hash da senha
//

// <?php
// $senha = 'sua_senha_aqui'; // A senha fornecida pelo usuário
// $hash = 'o_hash_armazenado_no_banco_de_dados'; // O hash da senha armazenado no seu banco de dados

// if (password_verify($senha, $hash)) {
//     echo 'A senha está correta!';
// } else {
//     echo 'A senha está incorreta!';
// }


