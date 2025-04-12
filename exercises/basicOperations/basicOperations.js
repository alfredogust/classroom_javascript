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
}

module.exports = BasicOperationsExercises;
