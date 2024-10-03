<?php
$conexao = mysqli_connect("localhost", "root", "", "agenda");

$dados = mysqli_query($conexao, "SELECT * FROM contato");

while ($usuario = mysqli_fetch_array($dados)) {
    $contato[] = $usuario["nome"];
}
