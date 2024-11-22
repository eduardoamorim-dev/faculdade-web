<html>

<head>
	<title> Autorização de Exclusão </title>
</head>

<body>

	<h1> Confirmar exclusão de <?php echo $cont->getNome(); ?> </h1>

	<H2><a href="contato.php?fun=excluir&conf=sim&id=<?php echo $cont->getId(); ?>"> Sim </H2>

	</H2> <a href="contato.php?fun=listar">Não</H2>

</body>

</html>