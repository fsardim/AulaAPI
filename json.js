let numero=200;
let num1=0, num2=0, num3=0, num4=0, contador=0;
let endereco={
    rua:"Av do Estado",
    bairro:"Mooca",
    cidade:"São Paulo",
    numero: numero
}
let pos;
let matriz=[0,1,2,3,4]

let apagar=2;
pos=matriz.length-3;

while(contador<pos){
    contador++;
    matriz.unshift(matriz[matriz.length]);
    matriz.pop();
}

matriz.pop();

for (num2;num2<matriz.length;num2++){

    console.log("Posição ", contador, ": ", matriz[num3]);
    num3++;
}





//console.log("WHILE");
// while(num1<10){
//     num2+=5;
//     console.log(num2);
//     num1++;
// }
// num2=0;
// console.log("FOR");
// matriz.push("FIM");
// for (num2;num2<matriz.length;num2++){
//     console.log("VARIAVEL: ", num2);
//     console.log("MATRIZ: ", matriz[num3]);
//     num3++;
// }
