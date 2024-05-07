<?php

class Despesa {
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

    /**
     * Get the value of tipo
     */ 
    public function getTipo()
    {
        return $this->tipo;
    }

    /**
     * Set the value of tipo
     *
     * @return  self
     */ 
    public function setTipo($tipo)
    {
        $this->tipo = $tipo;

        return $this;
    }

    /**
     * Get the value of descrição
     */ 
    public function getDescrição()
    {
        return $this->descrição;
    }

    /**
     * Set the value of descrição
     *
     * @return  self
     */ 
    public function setDescrição($descrição)
    {
        $this->descrição = $descrição;

        return $this;
    }

    /**
     * Get the value of valor
     */ 
    public function getValor()
    {
        return $this->valor;
    }

    /**
     * Set the value of valor
     *
     * @return  self
     */ 
    public function setValor($valor)
    {
        $this->valor = $valor;

        return $this;
    }

    /**
     * Get the value of data
     */ 
    public function getData()
    {
        return $this->data;
    }

    /**
     * Set the value of data
     *
     * @return  self
     */ 
    public function setData($data)
    {
        $this->data = $data;

        return $this;
    }
}