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

    const [first, second] = [
        parseInt(readline.question("Enther th 1st integer: "), 10),
        parseInt(readline.question("Enter the 2nd integer: "), 10)
    ]
    const third = parseFloat(readline.question("Enter a real number: "));
    
    console.log("\nResults:");
    console.log(`Product of double the first with half the second: ${(2 * first * (second / 2)).toFixed(2)}`);
    console.log(`Sum of triple the first with the third: ${(3 * first + third).toFixed(2)}`);
    console.log(`The third number cubed: ${Math.pow(third, 3).toFixed(2)}`);
}

const calculateIdealWeight = () => {
    const height = parseFloat(readline.question("Enter your height(in meters): "));

    if (isNaN(height) || height < 0) {
        console.log("Please, enter a valid number.");
        return;
    }

    const idealWeight = (72.7 * height) - 58
    console.log(`Your ideal weight is: ${idealWeight.toFixed(2)}`);
    
}

const getIdealWeightByGender = () => {
    const height = parseFloat(readline.question("Enter your height: "));

    if (isNaN(height) || height < 0) {
        console.log("Please, enter a valid height.");
        return;
    }

    const idealWeights  = {
        male: (72.7 * height) - 58,
        female: (62.1 * height) - 44.7
    }

    console.log(`Ideal weight for male is ${idealWeights.male.toFixed(2)}`);
    console.log(`Ideal weight for female is ${idealWeights.female.toFixed(2)}`);
    
}

const calculateExcessWeight = () => {
    const fishWeight = parseFloat(readline.question("Enter the total weight of fish caught today (kg): "));

    const limit = 50.0;
    const finePerKilo = 4.0;

    if (fishWeight <= limit)  {
        console.log("No fines, weight limit not exceeded.");
        return;
    }

    const excessWeight = fishWeight - limit;
    const fineAmount = excessWeight * finePerKilo;

    console.log(`Excess weight: ${excessWeight.toFixed(2)} kg`);
    console.log(`Fine amount: $${fineAmount.toFixed(2)}`);
};

const salaryDiscount = () => {
    const hourlyWage = parseFloat(readline.question("Enter how much you earn per hour: "));
    const hoursWorked = parseFloat(readline.question("Enter the number of hours worked: "));

    const grossSalary = hourlyWage * hoursWorked;

    const deductions = {
        incomeTax: 11,
        socialSecurity: 8,
        unionFee: 5
    }

    const calculatedDeductions = {};

    Object.keys(deductions).forEach((key) => {
        calculatedDeductions[key] = (grossSalary * deductions[key]) / 100;
    });

    const netSalary = grossSalary - (
        calculatedDeductions.incomeTax +
        calculatedDeductions.socialSecurity +
        calculatedDeductions.unionFee
    );

    console.log(`Gross salary: $${grossSalary.toFixed(2)}`);
    console.log(`Income Tax: $${calculatedDeductions.incomeTax.toFixed(2)}`);
    console.log(`Social Security: $${calculatedDeductions.socialSecurity.toFixed(2)}`);
    console.log(`Union Fee: $${calculatedDeductions.unionFee.toFixed(2)}`);
    console.log(`Net salary: $${netSalary.toFixed(2)}`);
};

const calculatePaintCost = () => {
    const areaToBePainted = parseFloat(readline.question("Enter the area to be painted in square meters: "));

    const totalCost = Math.ceil(areaToBePainted / 3 / 18) * 80;

    console.log(`Total cost for paint: R$ ${totalCost.toFixed(2)}`);
};

const calculatePaintCosts = () => {
    const areaToBePainted = parseFloat(readline.question("Enter the area to be painted in square meters: "));

    const necessaryLiters = (areaToBePainted / 6) * 1.1;

    const necessaryCans = Math.ceil(necessaryLiters / 18);
    const cansCost = necessaryCans * 80;

    const necessaryGallons = Math.ceil(necessaryLiters / 3.6);
    const gallonsCost = necessaryGallons * 25;

    // Cálculo da mistura
    let mixedCans = Math.floor(necessaryLiters / 18); // Usa latas inteiras
    let remainingLiters = necessaryLiters - mixedCans * 18; // Calcula os litros restantes

    const mixedGallons = Math.ceil(remainingLiters / 3.6); // Arredonda para cima os galões necessários para o restante
    const mixedCost = (mixedCans * 80) + (mixedGallons * 25);

    console.log(`Using only cans (18L): ${necessaryCans} cans, Total cost: R$ ${cansCost.toFixed(2)}`);
    console.log(`Using only gallon (3,6L): ${necessaryGallons} gallons, Total cost: R$ ${gallonsCost.toFixed(2)}`);
    console.log(`Using mixed cans and gallons: ${mixedCans} cans and ${mixedGallons} gallons, Total cost: R$ ${mixedCost.toFixed(2)}`);
}


// Exportando todas as funções
module.exports = { 
    helloWorld, 
    informedNumber, 
    sumTwoNumbers, 
    gradeAverage, 
    convertMetersToCentimeters, 
    circleRadius, 
    squareAreaAndDouble, 
    calculateSalary, 
    fahrenheitToCelsius, 
    celsiusToFahrenheit, 
    calculateThreeNumbers, 
    calculateIdealWeight, 
    getIdealWeightByGender, 
    calculateExcessWeight, 
    salaryDiscount,
    calculatePaintCost,
    calculatePaintCosts 
};