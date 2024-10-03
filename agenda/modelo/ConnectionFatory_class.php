<?php
class ConnectionFactory
{
    public $con = null;
    public $dbType = "mysql";
    public $host = "localhost";
    public $user = "root";
    public $senha = "";
    public $db = "agenda";
    public $persistente = false;
    // se for persistente a conexao se mantém até que o usuário pare de se comunicar com o sistema

    public function __construct($persistente = false)
    {
        if ($persistente != false) {
            $this->persistente = true;
        }
    }

    public function getConnection()
    {
        try {
            // Persisent Data object
            // Persisent de dados - manipular BD
            $this->con = new PDO(
                $this->dbType . ":host=" . $this->host . ";dbname=" . $this->db,
                $this->user,
                $this->senha,
                array(
                    PDO::ATTR_PERSISTENT => $this->persistente,
                    PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION
                )
            );
            // String de conexão
            //mysql:host=localhost;dbname=agenda
            return $this->con;
        } catch (PDOException $ex) {
            echo "Erro: " . $ex->getMessage();
        }
    }

    public function close()
    {
        if ($this->con != null) {
            $this->con = null;
        }
    }
}
