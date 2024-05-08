<?php
require_once "Conexao.php";
require_once "Despesa.php";
require_once "DespesaDAO.php";

$despesaDAO = new DespesaDAO();

//CREATE
if (isset($_POST["submit"]) && $_POST["tipo"] === "despesa") {
    // Valida e processa os dados do formulário
    $tipo = $_POST['tipo'];
    $descricao = $_POST['descricao'];
    $valor = $_POST['valor'];
    $data = $_POST['data'];

    $despesa = new Despesa($tipo, $descricao, $valor, $data);

    $despesaDAO->create($despesa);
    header("Location: index.php");
    exit();
} else if (isset($_POST["submit"]) && $_POST["tipo"] === "receita") {
    $tipo = $_POST['tipo'];
    $descricao = $_POST['descricao'];
    $valor = $_POST['valor'];
    $data = $_POST['data'];
    
    $despesa = new Despesa($tipo, $descricao, $valor, $data);

    $despesaDAO->create($despesa);
    header("Location: index.php");
    exit();
} else if (isset($_GET["id"])){
    $despesa = new Despesa($tipo, $descricao, $valor, $data);
    $despesa->setId(intval($_GET["id"]));
    $despesaDAO->delete($despesa);
    header("Location: index.php");
    exit();
} else {

}

$despesas = $despesaDAO->readDespesas();
$receitas = $despesaDAO->readReceitas();

//teste

// echo "Despesas: </br></br>";
// foreach ($despesas as $despesa) {
//     echo $despesa->descricao." - R$".$despesa->valor." - ".$despesa->data.". </br>";
// }
// print_r($despesas);

// $teste = $_GET["id"];

// print_r($teste);
// echo "deu certo :   $teste";