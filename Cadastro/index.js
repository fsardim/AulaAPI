const express = require('express');
const chalk = require('chalk');
const bodyParser = require('body-parser');
const passwordHash = require('password-hash');

const app = express();

//Middlewares
app.use(bodyParser.json());

//Banco de dados
let _bd = [];
let _idusuario = 0;

app.get('/', (request, response) => {
    response.status(200).send('API funcionando ok!');
});
app.post('/usuario', (request, response) => {
    console.log('POST /usuario');

    let usuario = {
        idusuario: _idusuario,
        nome: request.body.nome,
        sobrenome: request.body.sobrenome,
        senha: request.body.senha
    };

    if(!usuario.nome || usuario.nome === ''){
        response.sendStatus(400);
    }

    usuario.senha = passwordHash.generate(usuario.senha);

    _idusuario++;
    _bd.push(usuario);
    response.sendStatus(201);
});
app.post('/usuario/login', (request,response) => {
    console.log('POST /usuario/:id/login');
    let input = {
        idusuario: request.body.idusuario,
        senha: request.body.senha
    };
    
    let i = 0;

    while(_bd[i]){
        if(_bd[i].idusuario === input.idusuario){
            if(passwordHash.verify(input.senha, _bd[i].senha)){
                return response.sendStatus(200);
            } else {
                return response.sendStatus(400);
            }
        }
        i++;
    }
    response.sendStatus(404);
});
app.get('/usuario', (request, response) => {
    console.log('GET /usuario');
    response.status(200).send(_bd);
});
app.listen(3000, () => {
    console.log(chalk.green('Servidor rodando na porta 3000'));
});