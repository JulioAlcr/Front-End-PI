<?php

class Usuario {
    private $id;
    private $nome;
    private $email;
    private $senha;

    // Construtor (opcional)
    public function __construct($nome, $email, $senha) {
        $this->nome = $nome;
        $this->email = $email;
        $this->senha = $senha;
    }

    public function getId() {
        return $this->id;
    }

    public function getNome() {
        return $this->nome;
    }

    public function getEmail() {
        return $this->email;
    }

    public function getSenha() {
        // Por questões de segurança, 
        // é comum não retornar a senha no getter.
        // Você pode retornar um valor alternativo 
        // ou lançar uma exceção.
        return $this->senha;
    }

    public function setId($id) {
        $this->id = $id;
    }

    public function setNome($nome) {
        $this->nome = $nome;
    }

    public function setEmail($email) {
        $this->email = $email;
    }

    public function setSenha($senha) {
        // Por questões de segurança, 
        // é comum criptografar a senha antes de armazená-la.
        // Você pode usar funções como `password_hash()` para isso.
        $this->senha = password_hash($senha, PASSWORD_DEFAULT);
        // $this->senha = $senha;
    }
}
