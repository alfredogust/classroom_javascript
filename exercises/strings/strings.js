const readlineSync = require('readline-sync');

const sizeOfStrings = () => {
    const string01 = "Brasil Hexa 2006";
    const string02 = "Brasil! Hexa 2006!";

    const tamanhoString01 = string01.length;
    const tamanhoString02 = string02.length;

    console.log(`Tamanho de "${string01}": ${tamanhoString01} caracteres.`);
    console.log(`Tamanho de "${string02}": ${tamanhoString02} caracteres.`);

    if (tamanhoString01 !== tamanhoString02) {
        console.log("As duas strings são de tamanhos diferentes.");
    }

    if (string01 !== string02) {
        console.log("As duas strings possuem conteúdo diferente.");
    }
}

module.exports = {
    sizeOfStrings
}