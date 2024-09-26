# web-I

# Tipos de Includes em PHP

Em PHP, os _includes_ são usados para adicionar arquivos externos ao seu código. Eles ajudam a evitar a repetição de código, facilitando a organização do projeto. Abaixo estão os quatro tipos principais:

## 1. `include`

- **O que faz**: Insere o conteúdo de outro arquivo no seu código.
- **Quando usar**: Quando você quer reutilizar partes de código (como cabeçalhos ou rodapés).
- **Exemplo**:
  ```php
  include 'header.php';
  ```
  Isso coloca o conteúdo do arquivo `header.php` no ponto onde o `include` foi chamado.
- **O que acontece se o arquivo não existir?**: O PHP emite um _aviso_ (warning), mas o script continua rodando.

---

## 2. `include_once`

- **O que faz**: Igual ao `include`, mas só inclui o arquivo **uma vez**.
- **Quando usar**: Quando você quer garantir que o mesmo arquivo não seja incluído mais de uma vez, evitando duplicação de código.
- **Exemplo**:
  ```php
  include_once 'header.php';
  ```
  Mesmo que o `include_once` seja chamado várias vezes, o PHP só vai incluir o arquivo uma vez.

---

## 3. `require`

- **O que faz**: Insere o conteúdo de outro arquivo no seu código, assim como o `include`.
- **Diferença principal**: Se o arquivo não for encontrado, o PHP gera um **erro fatal** e o script **para** de rodar.
- **Quando usar**: Quando o arquivo incluído é **essencial** para o funcionamento do código.
- **Exemplo**:
  ```php
  require 'config.php';
  ```
  Se o `config.php` não for encontrado, o script vai parar de rodar.

---

## 4. `require_once`

- **O que faz**: Igual ao `require`, mas só inclui o arquivo **uma vez**.
- **Quando usar**: Quando o arquivo incluído é essencial e você quer garantir que ele não será incluído mais de uma vez.
- **Exemplo**:
  ```php
  require_once 'config.php';
  ```
  Assim como o `require`, se o arquivo não for encontrado, o script para. Além disso, o `require_once` evita incluir o arquivo repetidamente.

---

## Resumindo:

- Use `include` e `include_once` quando o arquivo não for essencial, mas `include_once` é útil para evitar duplicação.
- Use `require` e `require_once` quando o arquivo for essencial para o funcionamento do sistema.
