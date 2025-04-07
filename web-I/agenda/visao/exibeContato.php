<html>

<head>
	<title> Contato <?php echo $cont->getNome(); ?> </title>
</head>

<body>

	<h1> Contato <?php echo $cont->getNome(); ?> </h1>
	<ul>
		<li>Nome: <?php echo $cont->getNome(); ?></li>
		<li>Telefone: <?php echo $cont->getTelefone(); ?></li>
		<li>E-mail: <?php echo $cont->getEmail(); ?></li>
		<li> <img src=<?php echo $cont->getFoto(); ?> width="100" /> </li>
	</ul>

	<a href="contato.php?fun=listar"> Voltar </a>

</body>

</html>