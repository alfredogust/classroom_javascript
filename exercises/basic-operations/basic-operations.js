const readline = require("readline-sync");

const helloWorld = () => {
    console.log("Hello, World!");
};

const informedNumber = () => {
    let number = parseInt(readline.question("Enter a number: "), 10);
    console.log(`You entered: ${number}`);
};

const sumTwoNumbers = () => {
    let numbers = [];

    for (let i = 0; i < 2; i++) {
        let number = parseInt(readline.question(`Enter the ${i + 1}º number: `), 10);
        numbers.push(number);
    }

    let sum = numbers[0] + numbers[1];
    console.log(`The sum is: ${sum}`);
};

const gradeAverage = () => {
    let grades = [];

    for (let i = 0; i < 4; i++) {
        let grade = parseFloat(readline.question(`Enter the ${i + 1}º grade: `));
        grades.push(grade);
    }

    let average = grades.reduce((acc, curr) => acc + curr, 0) / grades.length;
    console.log(`The average grade is: ${average.toFixed(2)}`);
};

// Exportando todas as funções
module.exports = { helloWorld, informedNumber, sumTwoNumbers, gradeAverage };
