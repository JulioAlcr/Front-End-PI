<?php

class Despesa {
    private int $id;
    private $tipo;
    private $descrição;
    private $valor;
    private $data;


    public function __construct($tipo, $descrição, $valor, $data) {
        $this->tipo = $tipo;
        $this->descrição = $descrição;
        $this->valor = $valor;
        $this->data = $data;
    }
    public function getTipo()
    {
        return $this->tipo;
    }

    public function setTipo($tipo)
    {
        $this->tipo = $tipo;
    }

    public function getDescrição()
    {
        return $this->descrição;
    }

    public function setDescrição($descrição)
    {
        $this->descrição = $descrição;
    }

    public function getValor()
    {
        return $this->valor;
    }

    public function setValor($valor)
    {
        $this->valor = $valor;
    }

    public function getData()
    {
        return $this->data;
    }

    public function setData($data)
    {
        $this->data = $data;

    }

    public function getId()
    {
        return $this->id;
    }

    public function setId($id)
    {
        $this->id = $id;

    }
}