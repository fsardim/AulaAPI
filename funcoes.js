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