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
        const remainingAttempts = MAX_ATTEMPTS - attemptCount;
        console.log(`You have ${remainingAttempts} attempt(s) remaining.`);

        const userName = readlineSync.question("Enter your username: ");
        const password = readlineSync.question("Enter your password: ", { hideEchoBack: true });

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

const collectUserInfo = () => {
    const userInfo = {};

    let userName;
    while (true) {
        userName = readlineSync.question("Enter your name: ");
        if (userName.length > 3) {
            break;
        }
        console.log("Invalid name. The name must be longer than 3 characters.");
    }
    userInfo.name = userName;

    let userAge;
    while (true) {
        userAge = readlineSync.questionInt("Enter your age: ");
        if (userAge >= 0 && userAge <= 150) {
            break;
        }
        console.log("Invalid age. Age must be between 0 and 150.");
    }
    userInfo.age = userAge;

    let userSalary;
    while (true) {
        userSalary = readlineSync.questionFloat("Enter your salary: ");
        if (userSalary > 0) {
            break;
        }
        console.log("Invalid salary. Salary must be greater than zero.");
    }
    userInfo.salary = userSalary;

    let userGender;
    while (true) {
        userGender = readlineSync.question("Enter your gender ('f' for female, 'm' for male): ");
        if (userGender === 'f' || userGender === 'm') {
            break;
        }
        console.log("Invalid gender. Please enter 'f' for female or 'm' for male.");
    }
    userInfo.gender = userGender;

    let userMaritalStatus;
    while (true) {
        userMaritalStatus = readlineSync.question("Enter your marital status ('s' for single, 'm' for married, 'w' for widowed, 'd' for divorced): ");
        if (['s', 'm', 'w', 'd'].includes(userMaritalStatus)) {
            break;
        }
        console.log("Invalid marital status. Please enter 's', 'm', 'w', or 'd'.");
    }
    userInfo.maritalStatus = userMaritalStatus;

    console.log("Data validated successfully!");
    console.log(userInfo);
};

module.exports = {
    gradeValidator,
    userAndPasswordValidator,
    collectUserInfo
}