<?php
    try{

            //CRIANDO AS CONSTANTES PARA A CONEXÃO
            $host = "172.16.54.174:3310";
            $username = 'root';
            $password = '';
            $DB_PORT = '3310';
            $BASE = 'rafael';
            $pdo = new PDO("mysql:host=$host;dbname=$BASE;charset=utf8", $username, $password);
            echo "Conectado";
    } catch (Exception $e) {
        echo ' Erro ao conectar ao banco de dados!<br>';
        echo $e;
    }
?>