const readlineSync = require('readline-sync');

const gradeValidator = () => {
    const MAX_ATTEMPTS = 5;

    for (let attemptCount = 0; attemptCount < MAX_ATTEMPTS; attemptCount++) {
        const gradeInput = parseFloat(readlineSync.question("Enter a grade between 0 and 10: "));

        if (gradeInput >= 0 && gradeInput <= 10) {
            console.log(`${gradeInput}`);
            break;
        } else {
            console.log("Please enter a number within the specified range.");
        }
    }
};

module.exports = {
    gradeValidator
}