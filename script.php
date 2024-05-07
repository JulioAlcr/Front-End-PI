<?php
require_once "Conexao.php";
require_once "Despesa.php";
require_once "DespesaDAO.php";

$tipo = $_POST['tipo'];
$descricao = $_POST['descricao'];
$valor = $_POST['valor'];
$data = $_POST['data'];

$despesa = new Despesa($tipo, $descricao, $valor, $data);

$despesaDAO = new DespesaDAO();
$despesaDAO->create($despesa);

echo "Despesa Cadastrada! <br>";
echo "Tipo: $tipo <br> Descrição: $descricao <br> Valor: $valor <br> Data: $data";

