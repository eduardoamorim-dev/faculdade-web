<html>

<head>
	<title> Alterar Contato </title>
	<meta charset="UTF-8" />
</head>

<body>

	<h1> Alterar Contato </h1>

	<form action="contato.php?fun=alterar" method="POST">

		<input type="hidden" name="id"
			<?php echo "value='" . $cont->getId() . "'"; ?> />

		<label for="nome"> Nome: </label>
		<input type="text" id="nome" name="nome"
			<?php echo "value='" . $cont->getNome() . "'"; ?> /> <br />

		<label for="email"> Email: </label>
		<input type="text" id="email" name="email"
			<?php echo "value='" . $cont->getEmail() . "'"; ?> /> <br />

		<label for="tel"> Telefone: </label>
		<input type="text" id="tel" name="telefone"
			<?php echo "value='" . $cont->getTelefone() . "'"; ?> /> <br />

		<input type="submit" name="enviar" value="enviar" />

		<!-- $_POST["enviar"]="enviar" -->

	</form>

</body>

</html>