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
    const radius = parseFloat(readline.question("Enter the circle radius: "));

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

const squareAreaAndDouble = () => {
    const squareHeight = parseInt(readline.question("Enter the square height: "));

    const squareArea = squareHeight * squareHeight;
    const doubledArea = squareArea * 2;

    console.log(`The doubled area of the square is: ${doubledArea}`);
}

const calculateSalary = () => {
    const hourlyWage = parseFloat(readline.question("Enter your hourly wage: "));
    const hoursWorked = parseFloat(readline.question("Enter the number of hours worked this month: "));

    if (isNaN(hourlyWage) || isNaN(hoursWorked) || hourlyWage <= 0 || hoursWorked <= 0) {
        console.log("Please enter valid numbers.");
    }

    const monthlySalary = hourlyWage * hoursWorked;
    console.log(`Your salary for this month is: $${monthlySalary.toFixed(2)}`);
}

const fahrenheitToCelsius = () => {
    const fahrenheit = parseFloat(readline.question("Enter the temperature in fahrenheit: "));

    if (isNaN(fahrenheit)) {
        console.log("Please, enter a valid number.");
        return;
    }

    const celsius = 5 * ((fahrenheit - 32) / 9);
    console.log(`Temperature in Celsius: ${celsius.toFixed(2)}`);
}

const   celsiusToFahrenheit = () => {
    const celsius = parseFloat(readline.question("Enter the temperature in celsius: "));

    if (isNaN(celsius)) {
        console.log("Please, enter a valid number.");
        return;
    }

    const fahrenheit = celsius * 1.8 + 32;
    console.log(`Temperature in Fahrenheit: ${fahrenheit.toFixed(2)}`);
}

const calculateThreeNumbers = () => {

    const numbers = [];

    for (let i=0; i<2; i++) {
        numbers.push(parseInt(readline.question(`Enter the ${i+1}º number:`)));
    }
    numbers.push(parseFloat(readline.question("Enter a real number: ")));

    const first = numbers[0];
    const second = numbers[1];
    const third= numbers[2]

    const result = {
        productDoubleFirstHalfSecond: (2 * first) * (second / 2),
        sumTripleFirstWithThird: (3 * first) + third,
        thirdCubed: Math.pow(third , 3) 
    }
    
    console.log("\nResults:");
    console.log(`Product of double the first with half the second: ${result.productDoubleFirstHalfSecond.toFixed(2)}`);
    console.log(`Sum of triple the first with the third: ${result.sumTripleFirstWithThird.toFixed(2)}`);
    console.log(`The third number cubed: ${result.thirdCubed.toFixed(2)}`);
}

// Exportando todas as funções
module.exports = { helloWorld, informedNumber, sumTwoNumbers, gradeAverage, convertMetersToCentimeters, circleRadius, squareAreaAndDouble, calculateSalary, fahrenheitToCelsius, celsiusToFahrenheit, calculateThreeNumbers};
