<?php
    require_once("Conexao.php");
    require_once("Usuario.php");

class UsuarioDAO {
    public function create(Usuario $usuario) {
        $sql = "INSERT INTO usuario (nome, email, senha) VALUES (?, ?, ?)";
        $stmt = Conexao::getConn()->prepare($sql);
        $stmt->bindValue(1, $usuario->getNome());
        $stmt->bindValue(2, $usuario->getEmail());
        $stmt->bindValue(3, $usuario->getSenha());
        $stmt->execute();
    }

    public function read(){
        $sql = "SELECT * FROM usuario";
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

    public function delete(Usuario $usuario) {
        $sql = "DELETE FROM usuario WHERE id = ?";
        $stmt = Conexao::getConn()->prepare($sql);
        $stmt->bindValue(1, $usuario->getId());
        $stmt->execute();
    }
}