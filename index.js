const express = require('express');
const request = require('request');
const chalk = require('chalk');

const app = express();

app.get('/', (request, response) => {
    response.status(200).send('API funcionando ok!');
    // response.sendStatus(200);
});

app.listen(3000, () => {
    console.log(chalk.green('Servidor rodando na porta 3000'));
});