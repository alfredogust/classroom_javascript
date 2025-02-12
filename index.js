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

const runExercisesBasicOperations = () => {
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
    //calculateDownloadTime();
};

const {
  sizeOfStrings,
  reverseName,
  verticalName,
  invertedVerticalName,
  getFullMonthName
} = require("./exercises/strings-operations/strings");

const runExercisesStringsOperations = () => {
  console.log("Exercises in execution now:\n");

  //sizeOfStrings(),
  //reverseName(),
  //verticalName(),
  //invertedVerticalName(),
  getFullMonthName()
};

//runExercisesBasicOperations();
runExercisesStringsOperations();