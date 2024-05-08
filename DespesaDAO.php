<?php
    require_once("Conexao.php");
    require_once("Despesa.php");

class DespesaDAO {

    public function create(Despesa $despesa) {
        $sql = "INSERT INTO despesas (tipo, descricao, valor, data) VALUES (?, ?, ?, ?)";
        $stmt = Conexao::getConn()->prepare($sql);
        $stmt->bindValue(1, $despesa->getTipo());
        $stmt->bindValue(2, $despesa->getDescrição());
        $stmt->bindValue(3, $despesa->getValor());
        $stmt->bindValue(4, $despesa->getData());
        $stmt->execute();
    }

    public function readDespesas(){
        $sql = "SELECT * FROM despesas where tipo = 'despesa'";
        $stmt = Conexao::getConn()->prepare($sql);
        $stmt->execute();

        return $stmt->fetchAll(PDO::FETCH_OBJ);
    }

    public function readReceitas(){
        $sql = "SELECT * FROM despesas where tipo = 'receita'";
        $stmt = Conexao::getConn()->prepare($sql);
        $stmt->execute();

        return $stmt->fetchAll(PDO::FETCH_OBJ);
    }

    // public function update(Pizza $pizza) {
    //     $sql = "UPDATE pizza SET sabor = ?, preco = ?, tamanho = ? WHERE id = ?";
    //     $stmt = Conexao::getConn()->prepare($sql);
    //     $stmt->bindValue(1, $pizza->getSabor());
    //     $stmt->bindValue(2, $pizza->getPreco());A
    //     $stmt->bindValue(3, $pizza->getTamanho());
    //     $stmt->bindValue(4, $pizza->getId());

    //     $stmt->execute();
    
    // }

    public function delete(Despesa $despesa) {
        $sql = "DELETE FROM despesas WHERE id = ?";
        $stmt = Conexao::getConn()->prepare($sql);
        $stmt->bindValue(1, $despesa->getId());
        $stmt->execute();
    }
}