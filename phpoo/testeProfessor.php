<?php

include_once "Professor.php";

$p = new Professor("Clodovaldo", 1200, "Web I");

echo "O professor " . $p->nome . " recebe um salario de R$ " . $p->salario . " e ministra a matéria de " . $p->disciplina . "<br><br>";

$p->aumentoSalario(2000);
$p->setDisciplina("Web II");

echo "O professor " . $p->nome . " recebe um salario de R$ " . $p->salario . " e ministra a matéria de " . $p->disciplina;

Professor::teste();