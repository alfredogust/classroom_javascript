const readlineSync = require('readline-sync');

class BasicOperationsExercises {
  helloWorld() {
    return 'Hello World!';
  }

  showNumber() {
    const number = parseInt(readlineSync.question('Enter a number: '));
    return `The entered number was ${number}`;
  }

  showSumOfTwoNumbers() {
    const firstNumber = parseInt(readlineSync.question('Enter the first number: '));
    const secondNumber = parseInt(readlineSync.question('Enter the second number: '));

    const sum = firstNumber + secondNumber;

    return `The result is ${sum}`;
  }

  showGradeAverage() {
    let grades = [];
    let sum = 0;

    for (let i = 0; i < 4; i++) {
      const grade = parseFloat(readlineSync.question(`Enter the ${i + 1}° grade: `));
      grades.push(grade);

      sum += grade;
    }
    const average = sum / 4;
    return `The average of the grades is ${average}`;
  }

  showMaxNumber() {
    const number01 = parseInt(readlineSync.question('Enter the first number: '));
    const number02 = parseInt(readlineSync.question('Enter the second number: '));

    return number01 > number02 
    ? `${number01} is greater than ${number02}`
    : `${number02} is greater than ${number01}`;
  }

  fizzBuzz () {
    const number = parseInt(readlineSync.question('Enter a number: '));

    if (isNaN(number)) {
      console.log(`${number} is not a number.`);
      return;
    }

    let output = '';

    for (let i = 0; i <= number; i++) {
      if (i % 3 === 0 && i % 5 === 0) {
        output += `${i}: FizzBuzz\n`;
      } else if (i % 3 === 0) {
        output += `${i}: Fizz\n`;
      } else if (i % 5 === 0) {
        output += `${i}: Buzz\n`;
      } else {
        output += `${i}\n`;
      }
    }

    return output;
  }

  convertMetersToCentimeters(meters) {
    const centimeters = meters * 100;
    return `The result of the conversion is ${centimeters}`;
  }
}

module.exports = BasicOperationsExercises;
