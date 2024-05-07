<?php

class Conexao {
    private static $instance;

    public static function getConn(){

        if (!isset(self::$instance)){
            self::$instance = new PDO('mysql:host=35.184.211.197;dbname=Sistema_despesas', 'admin', ':P{%xFGoPo[+2tPF');
        }
        return self::$instance;
    }
}