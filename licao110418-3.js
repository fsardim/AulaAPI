//Imprimir na tela os 10 primeiros números primos conhecidos
const m = require('./Consulta CEP/funcoes');
const chalk = require('chalk');

let primos = 0;
let num = 1;
let vetorPrimos = [];

while(primos < 10){
    if(m.ehPrimo(num)){
        vetorPrimos.push(num);
        primos++;
    }
    num++;
}
console.log(chalk.red(`Os ${vetorPrimos.length} primeiros números primos são `) + chalk.green(`${vetorPrimos}`));