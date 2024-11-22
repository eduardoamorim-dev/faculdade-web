		<h1> Cadastro Contato </h1>
		<form action="contato.php?fun=cadastrar" method="POST"
			enctype="multipart/form-data">

			<label for="nome"> Nome: </label>
			<input type="text" id="nome" name="nome" /> <br />

			<label for="email"> Email: </label>
			<input type="text" id="email" name="email" /> <br />

			<label for="tel"> Telefone: </label>
			<input type="text" id="tel" name="telefone" /> <br />

			<input type="submit" name="enviar" value="enviar" />
			<!-- variável enviar (name) recebe o valor "enviar" -->
		</form>