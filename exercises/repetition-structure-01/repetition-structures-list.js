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

const yearsToSurpassPopulation = () => {
    let repeat = true;
    
    while (repeat) {
        let year = 0; // Counter for years

        // Get valid population for country A
        let countryA = parseInt(readlineSync.question("Enter the population of country A (1,000 - 1,000,000,000): "));
        while (isNaN(countryA) || countryA < 1000 || countryA > 1000000000) {
            console.log("Invalid input. Population must be between 1,000 and 1 billion.");
            countryA = parseInt(readlineSync.question("Enter the population of country A: "));
        }

        // Get valid population for country B
        let countryB = parseInt(readlineSync.question("Enter the population of country B (1,000 - 1,000,000,000): "));
        while (isNaN(countryB) || countryB < 1000 || countryB > 1000000000) {
            console.log("Invalid input. Population must be between 1,000 and 1 billion.");
            countryB = parseInt(readlineSync.question("Enter the population of country B: "));
        }

        // Get valid growth rate for country A
        let growthA = parseFloat(readlineSync.question("Enter the annual growth rate for country A (0.1 - 100%): "));
        while (isNaN(growthA) || growthA <= 0 || growthA > 100) {
            console.log("Invalid input. Growth rate must be between 0.1% and 100%.");
            growthA = parseFloat(readlineSync.question("Enter the annual growth rate for country A: "));
        }

        // Get valid growth rate for country B
        let growthB = parseFloat(readlineSync.question("Enter the annual growth rate for country B (0.1 - 100%): "));
        while (isNaN(growthB) || growthB <= 0 || growthB > 100) {
            console.log("Invalid input. Growth rate must be between 0.1% and 100%.");
            growthB = parseFloat(readlineSync.question("Enter the annual growth rate for country B: "));
        }

        // Convert growth rates from percentage to decimal multiplier
        growthA = 1 + (growthA / 100);
        growthB = 1 + (growthB / 100);

        // Check if country A already has a higher population than country B
        if (countryA >= countryB) {
            console.log("Country A already has a higher or equal population than Country B.");
        } else {
            // Loop until country A surpasses or equals country B
            while (countryA < countryB) {
                countryA *= growthA;
                countryB *= growthB;
                year++;
            }
            console.log(`It will take ${year} years for country A to surpass or equal the population of country B.`);
        }

        // Ask user if they want to repeat
        let response = readlineSync.question("Do you want to perform another calculation? (yes/no): ").toLowerCase();
        if (response !== "yes") {
            repeat = false;
        }
    }
};


module.exports = {
    gradeValidator,
    userAndPasswordValidator,
    collectUserInfo,
    yearsToSurpassPopulation
}