<?php
$nome = $_GET["nome"];
$tutor = $_GET["tutor"];




// _GET - array que foi automaticamente criado
// POST - o que foi criado é _POST

echo "Nome: " . $nome . " Tutor: " . $tutor . "<br/><br/>";

$con = mysqli_connect("localhost", "root", "", "veterinaria");

$sql = "INSERT INTO animal (nome, tutor) 
    VALUES('$nome', '$tutor')";

$result = mysqli_query($con, $sql);
