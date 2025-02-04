// index.js - Centralizing the function calls for all exercises

// Importing functions from the exercises file
const { helloWorld, informedNumber, sumTwoNumbers, gradeAverage, convertMetersToCentimeters } = require("./exercises/basic-operations/basic-operations");

const runExercises = () => {
    console.log("Executing all exercises:\n");

    //helloWorld();
    //informedNumber();
    //sumTwoNumbers();
    //gradeAverage();
    convertMetersToCentimeters();
};

runExercises();
