# race_generator - ATENÇÃO - LEIA ATÉ O FINAL

<br>
express - utilizei o express por ser pequeno e prático.

<br>
<br>
`sequelize - utilizei pois seria mais prático de usar um orm para se conectar e fazer operações com o banco de dados e aproveitei para dar uma praticada, além a abstração que o orm faz já expõe a regra de negócio desejada deixando o código mais legivel.

<br>
<br>
sequelize-cli - deixa o sequelize ainda mais prático na criação de projetos, migrações, models, seeders, etc...

<br>
<br>
sqlite3 - drive necessário para usar o sequelize

<br>
<br>
axios - usado para ser um client para fazer os testes de integração com o jest --watch.

<br>
<br>
jest - suite de testes completa, fácil e prática. 

<br>
<br>
nodemon - usado para dar um refresh automatico no servidor e focar no desenvolvimento.

<br>
<br>

## Prepar o ambiente e testar tudo de uma vez só.

1. Instale os pacotes
```shell
    npm i
```
2. Crie o banco de dados e migre de uma vez
```shell
    npm run prepare-test-db
```
3. Inicie o servidor de test em um terminal
```shell
    npm run test-server
```
4. Inicie o jest watch em outro terminal
```shell
    npm run test:watch
```

<br>

## Comandos

<br>

Para migrar e criar banco de desenvolvimento
```shell
    npx run sequelize-cli db:migrate
```

Para iniciar servidor
```shell
    npm run start:watch    
```

Para preparar ou resetar o banco de dados de teste
```shell
    npm run reset-test-db
    npm run prepare-test-db
```

Para iniciar servidor de teste
```shell
    npm run test-server
```

Para para testar as rotas
```shell
    npm run test:watch
```


