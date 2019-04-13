# Projeto Teste

## Banco de Horas

O Projeto consiste em criar um sistema de registro de horas trabalhadas por uma pessoa. A ideia é criar uma api onde eu possa cadastrar os usuários e possa registrar a entrada e a saída dele.

### Estrutura do banco

O banco de dados deve conter duas tabelas/collections:

#### User

Referência ao usuário

- id
- nome
- documento

#### Timecard

Referência ao registro de ponto do usuário

- id do usuário
- data e hora que foi batida
- tipo de ponto (entrada ou saída)

### API

A API do projeto deve possuir os seguintes endpoints

#### `GET /users` - Listar Usuários

lista todos os usuários cadastrados

#### `POST /users` - Cadastrar Usuário

Cadastra um usuário no sistema

#### `GET /users/:id` Consultar Usuário

Consulta um usuário no sistema.

##### OPCIONAL

Nessa consulta, retorne a quantidade de horas já trabalhadas pelo usuário **no dia**.

#### `PUT /users/:id` - Editar Usuário

Editar os dados do usuário

#### `DELETE /users/:id` - Remover Usuário

Remover o usuário do sistema

#### `GET /users/:id/timecard` - Listar Pontos batidos pelo usuário

Lista os pontos batidos pelo usuário.

##### OPCIONAL

Faça com a possibilidade de filtrar por dia

#### `POST /users/:id/timecard` - Bater o ponto

Insere um ponto batido pelo usuário.

##### IMPORTANTE

A entrada do endpoint só vai conter a data e hora em que foi batido o ponto. O sistema deve selecionar automaticamente se esse ponto foi de entrada ou de saída.

### Nota

Neste repositório há uma pré-configuração para a utilização do Node.js. Caso desejar, pode ser feita a clonagem desta para dar uma "mãozinha" no seu projeto.
