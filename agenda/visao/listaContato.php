<html>

<head>
	<title> Listagem de Contatos </title>
	<meta charset="UTF-8" />
</head>

<body>
	<?php
	if (isset($status)) {
		echo "<H2>" . $status . "</H2>";
	}
	//Se $status está preenchida, imprimir ela
	?>
	<a href="contato.php?fun=cadastrar"> Cadastrar </a>
	<br /><br />

	<TABLE border="1px">
		<TR>
			<TH> ID </TH>
			<TH> Nome </TH>
			<TH> Email </TH>
			<TH> Telefone </TH>
			<TH> <img src="visao/img/update.png" width='30px' /> </TH>
			<TH> <img src="visao/img/delete.png" width='30px' /> </TH>
		</TR>
		<!-- Primeira linha da tabela com o cabeçalho -->

		<?php
		foreach ($lista as $c) {
			echo "<TR>";

			echo "<TD>" . $c->getId() . "</TD>";

			echo "<TD><a  href='contato.php?fun=exibir&id=" . $c->getId() .
				"'>" . $c->getNome() . "</a></TD>";

			echo "<TD>" . $c->getEmail() . "</TD>";

			echo "<TD>" . $c->getTelefone() . "</TD>";

			echo "<TD><a  href=contato.php?fun=alterar&id=" .
				$c->getId() . "><img src='visao/img/update.png' width='30px'/> 
						  </a></TD>";

			echo "<TD><a  href=contato.php?fun=excluir&id=" .
				$c->getId() . "><img src='visao/img/delete.png' width='30px' /> 
						  </a></TD>";

			echo "</TR>";
		}
		?>
	</TABLE>
</body>

</html>