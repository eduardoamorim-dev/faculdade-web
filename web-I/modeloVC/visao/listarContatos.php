<html>

<head>
    <title>Lista de contatos</title>
    <meta charset="utf-8">
</head>

<body>
    <?php

    include_once "../controle/controleListas.php";
    ?>

    <h1>Lista de contatos</h1>

    <ul>
        <?php
        foreach ($contato as $i => $nome) {
            $i++;
            echo "<li> Contato n  $i  :  $nome  </li>";
        }
        ?>
    </ul>
</body>

</html>