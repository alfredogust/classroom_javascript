// index.js - Centralizing the function calls for all exercises

// Importing functions from the exercises file
const {
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
    calculatePaintCosts,
    calculateDownloadTime

  } = require("./exercises/basic-operations/basic-operations");

const runExercises = () => {
    console.log("Exercises in execution now:\n");

    //helloWorld();
    //informedNumber();
    //sumTwoNumbers();
    //gradeAverage();
    //convertMetersToCentimeters();
    //circleRadius();
    //squareAreaAndDouble();
    //calculateSalary();
    //fahrenheitToCelsius();
    //celsiusToFahrenheit();
    //calculateThreeNumbers();
    //calculateIdealWeight();
    //getIdealWeightByGender();
    //calculateExcessWeight();
    //salaryDiscount();
    //calculatePaintCost();
    //calculatePaintCosts();
    calculateDownloadTime();
};

runExercises();
