<html>

<head>
	<title> Cadastrar Contato </title>
	<meta charset="UFT-8" />
</head>

<body>

	<h1> Cadastrar Contato </h1>

	<form action="contato.php?fun=cadastrar" method="POST" enctype="multipart/form-data">
		<!-- POST -> envio de informações escondidas -->

		<label for="nome"> Nome: </label>
		<input type="text" name="nome" id="nome" value="<?php echo $c->getNome(); ?>" /> <br /><br />

		<label for="email"> Email: </label>
		<input type="text" name="email" id="email" /> <br /><br />

		<label for="telefone"> Telefone: </label>
		<input type="text" name="telefone" id="telefone" /> <br /><br />

		<input type="submit" name="enviar" value="Enviar" />

	</form>

</body>

</html>