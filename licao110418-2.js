const readline = require('readline');
const m = require('./Consulta CEP/funcoes');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Digite o número: ', (answer) => {

    let numDigitado = parseInt(answer);
    
    //Consistências do input
    if (isNaN(answer))
        numDigitado = 0;
    else if (numDigitado < 0)
        numDigitado *= -1;

    let ehPrimo = m.ehPrimo(numDigitado);

    console.log(`2 x ${numDigitado} = ${m.somar(numDigitado, numDigitado)}`);
    if(m.divisivelPorCinco(numDigitado))
        console.log(`${numDigitado} é divisível por 5`);
    else
        console.log(`${numDigitado} não é divisível por 5`);

    if (ehPrimo)
        console.log(`${numDigitado} é primo`);
    else
        console.log(`${numDigitado} não é primo`);

    rl.close();
});