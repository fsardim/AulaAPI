const express = require('express');
const httpReq = require('request');
const chalk = require('chalk');

const app = express();

app.get('/', (request, response) => {
    response.status(200).send('API funcionando ok!');
});
app.get('/cep/:cep', (request, response) => {
    console.log('GET /cep/cep');
    const cep = request.params.cep;
    const url = `https://viacep.com.br/ws/${cep}/json`;
    httpReq(url, (error, resposta, body) => {
        if(error) {
            response.status(500).send(error);
        }
        if(resposta.statusCode === 200) {
            response.status(200).send(body);
        }
    });
});
app.get('/cep/:cep/rua', (request, response) => {
    console.log('GET /cep/cep/rua');
    const cep = request.params.cep;
    const url = `https://viacep.com.br/ws/${cep}/json`;
    httpReq(url, (error, resposta, body) => {
        if(error) {
            response.status(500).send(error);
        }
        if(resposta.statusCode === 200) {
            let api = JSON.parse(body);
            response.status(200).send(api.logradouro);
        }
    });
});
app.get('/cep/:cep/bairro', (request, response) => {
    console.log('GET /cep/cep/bairro');
    const cep = request.params.cep;
    const url = `https://viacep.com.br/ws/${cep}/json`;
    httpReq(url, (error, resposta, body) => {
        if(error) {
            response.status(500).send(error);
        }
        if(resposta.statusCode === 200) {
            let api = JSON.parse(body);
            response.status(200).send(api.bairro);        
        }
    });
});

app.listen(3000, () => {
    console.log(chalk.green('Servidor rodando na porta 3000'));
});