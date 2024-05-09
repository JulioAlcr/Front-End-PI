<?php
require_once "Conexao.php";
require_once "Usuario.php";
require_once "UsuarioDAO.php";

if (isset($_POST)) {
    $usuarioDAO = new UsuarioDAO();
    $email = $_POST['email'];
    $password = $_POST['password'];

    $sql = "SELECT * FROM usuario WHERE email = '$email'";
    $stmt = Conexao::getConn()->prepare($sql);
    $stmt->execute();

    $usuario = $stmt->fetchAll(PDO::FETCH_OBJ);

    if (strlen($email) == 0 || strlen($password) == 0) {
        echo "Email ou senha não foram inseridos";
    } else {
        if (count($usuario) == 0) {
            echo "O email não existe";
        } else {
            // Valida e processa os dados do formulário
            $sql = "SELECT senha FROM usuario WHERE email = '$email'";
            $stmt = Conexao::getConn()->prepare($sql);
            $stmt->execute();

            $hash = $stmt->fetchAll(PDO::FETCH_OBJ)[0]->senha;

            if (password_verify($password, $hash)) {
                echo 'A senha está correta!';
                if(!isset($_SESSION)) {
                    session_start();
                }
                $_SESSION['id'] = $usuario[0]->id;
                $_SESSION['nome'] = $usuario[0]->nome;
                header("Location: index.php");
                exit();
            } else {
                echo 'A senha está incorreta!';
            }

        }

    }
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


