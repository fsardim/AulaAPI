console.log('Hello world');

const b = 0;
var a = 0;
let i = 1, c = 1;

// i = false; 
// console.log(i);
// i = 2.07;
// console.log(i);
// i = 'Aline';
// console.log(i);

// = > < >= <= && || === == !== !=

if(i === 10){
    //o que quiser para true;
    console.log('Idade é ' + i);
}else{
    //o que quiser para false;
    console.log(`Idade não é ${i}, é ${a}`);
    console.log('Idade não é ' + i + ', é ' + a);
}

let endereco={
    rua:"Av do Estado",
    bairro:"Mooca",
    cidade:"São Paulo",
}

while(i < 5){ //executa enquanto a condição for verdadeira
    // i+=10;
    console.log(i++);
    // console.log(i);
    console.log(++c);
}