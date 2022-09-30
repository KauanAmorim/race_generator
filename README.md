# race_generator - ATENÇÃO - LEIA ATÉ O FINAL

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


