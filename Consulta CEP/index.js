const express = require('express');
const httpReq = require('request');
const chalk = require('chalk');
const funcao = require('./funcoes');

const app = express();

app.get('/', (request, response) => {
    response.status(200).send('API funcionando ok!');
});
// Endpoint de exemplo: sem utilização de função para diminuir o código fonte
// app.get('/cep/:cep', (request, response) => {
//     console.log('GET /cep/cep');
//     const cep = request.params.cep;
//     const url = `https://viacep.com.br/ws/${cep}/json`;
//     httpReq(url, (error, resposta, body) => {
//         if(error) {
//             response.status(500).send(error);
//         }
//         if(resposta.statusCode === 200) {
//             response.status(200).send(body);
//         }
//     });
// });
app.get('/cep/:cep', (request, response) => {
    console.log('GET /cep/cep');
    const cep = request.params.cep;
    funcao.acessarAPICep(cep, resposta => {
        if(resposta.erro || resposta.resposta.statusCode !== 200) response.status(400).send(resposta.erro || 'CEP inválido');
        if(resposta.body) response.status(200).send(resposta.body);
    });
});
app.get('/cep/:cep/rua', (request, response) => {
    console.log('GET /cep/cep/rua');
    const cep = request.params.cep;
    funcao.acessarAPICep(cep, resposta => {
        if(resposta.erro || resposta.resposta.statusCode !== 200) response.status(400).send(resposta.erro || 'CEP inválido');
        if(resposta.body) {
            let rua = JSON.parse(resposta.body).logradouro
            response.status(200).send(rua);
        }
    });
});
app.get('/cep/:cep/bairro', (request, response) => {
    console.log('GET /cep/cep/bairro');
    const cep = request.params.cep;
    funcao.acessarAPICep(cep, resposta => {
        if(resposta.erro || resposta.resposta.statusCode !== 200) response.status(400).send(resposta.erro || 'CEP inválido');
        if(resposta.body) {
            let bairro = JSON.parse(resposta.body).bairro
            response.status(200).send(bairro);
        }
    });
});

app.listen(3000, () => {
    console.log(chalk.green('Servidor rodando na porta 3000'));
});