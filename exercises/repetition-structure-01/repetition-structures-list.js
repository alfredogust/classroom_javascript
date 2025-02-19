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

const userAndPasswordValidator = () => {
    const MAX_ATTEMPTS = 3;

    for (let attemptCount = 0; attemptCount < MAX_ATTEMPTS; attemptCount++) {
        const userName = readlineSync.question("Enter your username: ");
        const password = readlineSync.question("Enter your password: ");

        if (userName !== password) {
            console.log("Sucess.");
            break;
        } else {
            console.log("Invalid atempt. The username must be different from password.");
            if (attemptCount === MAX_ATTEMPTS - 1) {
                console.log("BLOCKED ACCESS.")
            }
        }
    }
};

module.exports = {
    gradeValidator,
    userAndPasswordValidator
}