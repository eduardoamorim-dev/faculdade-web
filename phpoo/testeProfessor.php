<?php

include_once "Professor.php";

$p = new Professor("Clodovaldo", 1200, "Web I");

echo "O professor " . $p->nome . " recebe um salario de R$ " . $p->salario . " e ministra a matéria de " . $p->disciplina;
