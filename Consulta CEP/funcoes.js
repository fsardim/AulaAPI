const request = require('request');
const ehPrimo = num => {
    let primo = true;

    for (var i = 2; i <= num; i++) {
        if(num % i === 0 && num !== i){
            primo = false;
            break;
        }
    }
    return primo;
}
exports.ehPrimo = ehPrimo;

const divisivelPorCinco = (num) => {
    return (num % 5 === 0);
}
exports.divisivelPorCinco = divisivelPorCinco;

const somar = (a, b) => {
    return a + b;
}
exports.somar = somar;

const acessarAPICep = (cep, callback) => {
    const url = `https://viacep.com.br/ws/${cep}/json`;
    let retorno = {
        erro: '',
        resposta: '',
        body: ''
    };
    request(url, (error, rocky, body) => {
        retorno.erro = error;
        retorno.resposta = rocky;
        retorno.body = body;
        return callback(retorno);
    });
};
exports.acessarAPICep = acessarAPICep;