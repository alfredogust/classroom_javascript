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

const convertMetersToCentimeters = () => {
    let meters = parseFloat(readline.question("Enter a number in meters: "));

    if (isNaN(meters)) {
        console.log("Please enter a valid number.");
        return;
    }

    let centimeters = meters * 100;
    console.log(`The convertion result: ${centimeters} cm`);
};

const circleRadius = () => {
    let radius = parseFloat(readline.question("Enter the circle radius: "));

    if (isNaN(radius) || radius <= 0) {
        console.log("Please enter a valid number.");
        return;
    }

    const circleData = {
        area: Math.PI * (radius * radius),
        perimeter: 2 * Math.PI * radius
    }

    console.log(`Area of the circle: ${circle.area}`);
    console.log(`Perimeter of the circle: ${circle.perimeter}`);

    // return the object, in case you need to use the data elsewhere
    return circleData;
}

// Exportando todas as funções
module.exports = { helloWorld, informedNumber, sumTwoNumbers, gradeAverage, convertMetersToCentimeters, circleRadius };
