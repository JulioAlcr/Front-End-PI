<?php
    require_once("Conexao.php");
    require_once("Despesa.php");

class DespesaDAO {

    public function create(Despesa $despesa) {
        $sql = "INSERT INTO despesas (tipo, descrição, valor, data) VALUES (?, ?, ?, ?)";
        $stmt = Conexao::getConn()->prepare($sql);
        $stmt->bindValue(1, $despesa->getTipo());
        $stmt->bindValue(2, $despesa->getDescrição());
        $stmt->bindValue(3, $despesa->getValor());
        $stmt->bindValue(4, $despesa->getData());
        $stmt->execute();
    }

    public function read(){
        $sql = "SELECT * FROM despesas";
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

    // public function delete(Pizza $pizza) {
    //     $sql = "DELETE FROM pizza WHERE id = ?";
    //     $stmt = Conexao::getConn()->prepare($sql);
    //     $stmt->bindValue(1, $pizza->getId());
    //     $stmt->execute();
    // }
}