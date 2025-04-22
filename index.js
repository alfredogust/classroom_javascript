const readlineSync = require('readline-sync');
const BasicOperationsExercises = require('./exercises/basicOperations/basicOperations');

const basicOps = new BasicOperationsExercises();

function showMenu() {
  console.log('\n=== Exercise Menu ===');
  console.log('1. Hello World');
  console.log('2. Show a number entered by the user');
  console.log('3. Show sum of two numbers');
  console.log('4. Show the average of four requested grades');
  console.log('5. Show the max number of two given numbers');
  console.log('6. FizzBuzz');
  console.log('7. Convert meters to centimeters');
  console.log('8. Circle Area and Perimeter Calculation');
  console.log('0. Exit');
}

function main() {
  let exit = false;

  while (!exit) {
    showMenu();
    const choice = parseInt(readlineSync.question('\nChoose an option: '));

    console.log('\n--- Exercise Output ---');
    switch (choice) {
      case 1:
        console.log(basicOps.helloWorld());
        break;
      case 2:
        console.log(basicOps.showNumber());
        break;
      case 3:
        console.log(basicOps.showSumOfTwoNumbers());
        break;
      case 4:
        console.log(basicOps.showGradeAverage());
        break;
      case 5:
        console.log(basicOps.showMaxNumber());
        break;
      case 6:
        console.log(basicOps.fizzBuzz());
        break;
      case 7:
        console.log(basicOps.convertMetersToCentimeters(600));
        break;
      case 8:
        console.log(basicOps.showCircleAreaAndPerimeter());
        break;
      case 0:
        console.log('Goodbye...');
        exit = true;
        break;
      default:
        console.log('Invalid option. Try again. ');
    }

    if (!exit) {
      readlineSync.question('\nPress Enter to return to the menu...');
      console.clear();
    }
  }
}

main();