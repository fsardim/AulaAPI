const express = require('express');
const request = require('request');
const chalk = require('chalk');

const app = express();

app.get('/', (request, response) => {
    response.status(200).send('API funcionando ok!');
});
app.get('/cep/:cep', (request, response) => {
    const cep = request.params.cep;
    //JSON completo da resposta da API do VIA CEP
    //link: https://viacep.com.br/ws/<CEP DE CONSULTA>/json
});
app.get('/cep/:cep/rua', (request, response) => {
    //Retornar nome da rua
});
app.get('/cep/:cep/bairro', (request, response) => {
    //Retornar nome do bairro
});

app.listen(3000, () => {
    console.log(chalk.green('Servidor rodando na porta 3000'));
});