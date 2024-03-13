

```markdown
# API de Usuários em Node.js

Esta é uma aplicação simples de API de usuários desenvolvida em Node.js com Express. Ela fornece endpoints para manipular dados de usuários, como adicionar, atualizar, buscar e excluir usuários.

## Dependências

Este projeto utiliza as seguintes dependências:

- express
- uuid
- cors

## Como Utilizar

Para utilizar esta API em sua máquina local, siga estas etapas:

1. Clone este repositório para sua máquina local usando o seguinte comando:

   ```
   git clone https://github.com/seu-usuario/api-de-usuarios-node.git
   ```

2. Navegue até o diretório do projeto:

   ```
   cd api-de-usuarios-node
   ```

3. Instale as dependências necessárias utilizando o npm:

   ```
   npm install
   ```

4. Após a instalação das dependências, inicie o servidor:

   ```
   npm start
   ```

5. O servidor estará rodando em http://localhost:3001.

## Endpoints

### GET /projects

Este endpoint retorna uma lista de todos os usuários cadastrados.

### POST /projects

Este endpoint permite adicionar um novo usuário. Ele espera um objeto JSON com os campos `name` e `age`.

Exemplo de requisição:
```
POST /projects
{
  "name": "Nome do Usuário",
  "age": 25
}
```

### PUT /projects/:id

Este endpoint permite atualizar um usuário existente com o ID fornecido. Ele espera um objeto JSON com os campos `name` e `age`.

Exemplo de requisição:
```
PUT /projects/1
{
  "name": "Novo Nome do Usuário",
  "age": 30
}
```

### DELETE /projects/:id

Este endpoint permite excluir um usuário existente com o ID fornecido.

Exemplo de requisição:
```
DELETE /projects/1



