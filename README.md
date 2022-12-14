# Cadastro de Veículos

Permite realizar o cadastro  e a busca de veículos em um banco de dados postgres. 

## Ações permitidas
- Criar um cadastro 
- Atualizar um cadastro
- Deletar um cadastro
- Buscar um cadastro por id
- Buscar cadastros por nome

## Instalação

- Baixar os pacotes necessários na pasta do projeto:

```bash
  npm install 
```

- Criar um arquivo .env de acordo com o modelo do Example.env:
```bash
    PORT=80
    HOST_DB=localhost
    PORT_DB=5432
    USER_DB=user
    PASS_DB=senha
    DATABASE=cadastro-veiculos
```

- Em config/config.json atualizar a parte de development com as informações do .env:

```bash
  "development": {
    "username": "user",
    "password": "senha",
    "database": "cadastro-veiculos",
    "host": "localhost",
    "dialect": "postgres",
    "port" : 5432
  }, 
```

## Schema do banco

```bash
    id: STRING(100),
    nome: STRING(100),
    ano: INTEGER,
    cor: STRING(100)
```
Observação :

 O id está como string devido ao seguinte erro : 

sequelize invalid input syntax for type uuid: "01GEMZ2BZXVJKZD8DKFT50C6FW"


    
