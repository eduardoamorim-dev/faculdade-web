<html>

<head>
	<title> Excluir Contato </title>
	<meta charset="UFT-8" />
</head>

<body>

	<h1> Você realmente deseja excluir o contato <?php echo $c->getNome(); ?> </h1>

	<a href="contato.php?fun=excluir&conf=sim&id=<?php echo $c->getId(); ?>"> SIM </a>

	<a href="contato.php?fun=listar">NÃO</a>

	</form>

</body>

</html>