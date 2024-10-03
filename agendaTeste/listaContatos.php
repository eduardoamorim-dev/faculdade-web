<!DOCTYPE html>
<html lang="pt-BR">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Lista de contatos</title>
</head>

<body>
    <?php
    echo "132";
    $conexao = mysqli_connect("localhost,", "root", "", "agenda");
    // localhost -> equivalente ao 127.0.0.1 - IP local
    // root -> username
    // " " -> passwoard (esta limpo pois estou utilizando XAMPP e não possui senha).
    // agenda -> base de dados

    $dados = mysqli_query($conexao, "SELECT * FROM contato");
    // dados -> ResultSet - matriz
    ?>

    <ul>
        <?php
        $i = 1;
        while ($usuario = mysqli_fetch_array($dados)) {
            echo ("<li> Contato n " . $i . ":" . $usuario["nome"] . "</li>");
            $i++;
        }
        ?>
    </ul>
</body>

</html>