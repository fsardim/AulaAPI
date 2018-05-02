const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// rl.question('Digite a palavra: ', answer => {
let palavra1, palavra2;
rl.question('Digite a palavra: ', function(answer) {
    palavra1 = answer;
    rl.question('Segunda palavra: ', segunda => {

    });

    // console.log(`Palavra invertida ${novaPalavra}`);
    
    rl.close();
});