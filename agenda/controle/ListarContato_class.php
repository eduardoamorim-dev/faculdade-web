<?php
<<<<<<< HEAD
include_once("modeo/ContatoDAO_class.php");

class ListarContato
{

    public function __construct()
    {
        $dao = new ContatoDAO();
        $lista = $dao->listar();

        include_once("../visao/listaContato.php");
    }
}
=======
    include_once("modelo/ContatoDAO_class.php");

    class ListarContato{
        public function __construct()
        {
            $dao = new contatoDAO();
            $lista = $dao->listar();

            include_once("visao/listaContato.php");
        }
    }
?>
>>>>>>> 729a9e6 (feat: controle and index)
