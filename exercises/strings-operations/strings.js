const readlineSync = require('readline-sync');
const fs = require('fs');

const sizeOfStrings = () => {
    const string01 = "Brasil Hexa 2006";
    const string02 = "Brasil! Hexa 2006!";

    const lengthString01 = string01.length;
    const lengthString02 = string02.length;

    console.log(`Length of "${string01}": ${lengthString01} characters.`);
    console.log(`Length of "${string02}": ${lengthString02} characters.`);

    if (lengthString01 !== lengthString02) {
        console.log("The two strings have different lengths.");
    } else if (string01 !== string02) {
        console.log("The two strings have different content.");
    } else {
        console.log("The two strings are equal in length and content.");
    }
}

const reverseName = () => {
    const userName = readlineSync.question("Enter your name: ");

    const reversedName = userName.split('').reverse().join('');
    console.log(`${reversedName.toUpperCase()}`);
}

const verticalName = () => {
    const name = readlineSync.question("Enter your name: ");

    const dividedName = name.split('');
    const acc = [];

    for (let i=0; i < dividedName.length; i++) {
        acc.push(dividedName[i]);
        console.log(acc.join(''));
    }
};

const invertedVerticalName = () => {
    const name = readlineSync.question("Enter your name: ");

    let currentName = name;

    for (let i = name.length; i > 0; i--) {
        console.log(currentName);
        currentName = currentName.slice(0, -1);
    }
};

const getFullMonthName = () => {
    const birthDate = readlineSync.question("Enter your birth date in the format (mm/dd/yyyy): ");
    const dateParts = birthDate.split("/");

    const monthNumber = parseInt(dateParts[0]);

    const months = [
        "January",    
        "February",   
        "March",      
        "April",      
        "May",        
        "June",       
        "July",       
        "August",     
        "September",  
        "October",    
        "November",   
        "December"    
    ];

    const correctMonthIndex = monthNumber - 1;
    const monthName = months[correctMonthIndex];

    console.log(`Birth date: ${birthDate}`);
    console.log(`You were born on ${monthName} ${dateParts[1]}, ${dateParts[2]}`);
};

const countSpacesAndVowels = () => {
    const sentence = "O rato roeu a roupa do rei de Roma.";

    let spacesFound = 0;

    const vowelCounter = {
        a: 0,
        e: 0,
        i: 0,
        o: 0,
        u: 0
    };

    for (let i = 0; i < sentence.length; i++) {
        const lowercaseChar = sentence[i].toLowerCase();

        if (lowercaseChar === ' ') {
            spacesFound++;
        } else if (vowelCounter.hasOwnProperty(lowercaseChar)) {
            vowelCounter[lowercaseChar]++;
        }
    }

    console.log(`Sentence: ${sentence}`);
    console.log(`Spaces: ${spacesFound}`);
    console.log(`Vowels: a: ${vowelCounter.a}, e: ${vowelCounter.e}, i: ${vowelCounter.i}, o: ${vowelCounter.o}, u: ${vowelCounter.u}`);
};

const palindrome = () => {
    const characterSequence = readlineSync.question("Enter a word or phrase: ");

    const treatedSequence = characterSequence.replace(/[^a-zA-Z]/g, '').toLocaleLowerCase();
    const reversedSequence = treatedSequence.split('').reverse().join('');

    if (treatedSequence === reversedSequence) {
        console.log("It's a palindrome!");
    } else {
        console.log("It's not a palindrome.");
    }
};

const checkCpf = () => {
    const cpfNumber = readlineSync.question("Enter your CPF in the following format:xxx.xxx.xxx-xx: ");

    if (cpfNumber.length !== 14) {
        console.log("Invalid CPF: the format must be xxx.xxx.xxx-xx.")
        return;
    }

    if (cpfNumber[3] !== '.' || cpfNumber[7] !== '.' || cpfNumber[11] !== '-') {
        console.log("Invalid CPF: the formatting characters are incorrect.");
        return;
    }

    for (let i = 0; i < cpfNumber.length; i++) {
        if (i !== 3 & i !== 7 && i !== 11) {
            if (isNaN(cpfNumber[i])) {
                console.log("Invalid CPF: all characters, except dots and dasha, must be numbers.");
                return;
            }
        }
    }

    console.log("Valid CPF: the format is correct.")
};

const numberToWords = () => {
    const number = parseInt(readlineSync.question("Enter a number from 1 to 99: "));

    if (number < 1 || number > 99) {
        console.log("Specified number out of interval.");
        return;
    }

    const numbersInWords = [
        "", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine",
        "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"
    ];

    if (number >= 1 &&  number <= 19) {
        console.log(`Number: ${number}`);
        console.log(`Result: ${numbersInWords[number]}`);
        return;
    }

    const tensInWords = [
        "", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"
    ];

    let tens = Math.floor(number / 10);
    let units = number % 10;

    let result = tensInWords[tens];
    if (units !== 0) {
        result += ` and ${numbersInWords[units]}`
    }

    console.log(`Number: ${number}`);
    console.log(`Result: ${result}`);
};

const hangmanGame = () => {
    const filePath = './words.txt'; // Path to the file containing the words

    try {
        // 1. Read the file content and load the words
        const content = fs.readFileSync(filePath, 'utf-8'); // Reads the file in UTF-8 format
        const words = content.split('\n').map(word => word.trim()); // Splits the words by line and removes extra spaces
        const word = words[Math.floor(Math.random() * words.length)]; // Randomly selects a word from the list
        let correctLetters = []; // List that will store the correct letters guessed by the player
        let errors = 0; // Counter for incorrect attempts
        const maxAttempts = 6; // The maximum number of incorrect guesses before the player loses the game

        // Function to show the word with the guessed letters and remaining letters as '_'
        const displayWord = () => {
            let currentState = '';
            // Loop through each letter in the word to check if it was guessed correctly
            for (let i = 0; i < word.length; i++) {
                if (correctLetters.includes(word[i])) {
                    currentState += word[i] + ' '; // Display the letter if it was guessed correctly
                } else {
                    currentState += '_ '; // Display '_' if the letter has not been guessed
                }
            }
            console.log('Word: ' + currentState.trim()); // Display the word with the correctly guessed letters and the remaining ones
        };

        // Function to check if the player's guessed letter is in the word
        const checkLetter = (letter) => {
            return word.includes(letter); // Returns true if the letter is in the word
        };

        console.log('Welcome to Hangman Game!');

        // Main game loop where the player has up to 6 attempts
        while (errors < maxAttempts) {
            displayWord(); // Shows the current state of the word with guessed letters
            const letter = readlineSync.question("Enter a letter: ").toLowerCase();
            
            // Check if the player entered a valid letter
            if (letter.length !== 1 || !/[a-z]/.test(letter)) {
                console.log('Please, enter a valid letter!');
                continue; // Ask the player to try again if the input is invalid
            }
            
            // Check if the entered letter is in the word
            if (checkLetter(letter)) {
                correctLetters.push(letter); // Add the correct letter to the list of guessed letters
                console.log('Good! The letter is in the word.');
            } else {
                errors++; // Increment the error counter if the letter is not in the word
                console.log(`-> You made your ${errors}th mistake. Try again!`);
            }

            // Check if the player has guessed all the letters in the word
            if (correctLetters.length === new Set(word.split('')).size) {
                console.log('Congratulations, you guessed the word!');
                displayWord(); // Display the complete word
                break; // End the game when the player guesses the word
            }
        }

        // If the player reached the maximum errors, they lose the game
        if (errors === maxAttempts) {
            console.log('You lost! The word was: ' + word);
        }
    } catch (err) {
        console.error('Error reading the file: ', err); // Handle any errors that may occur while reading the file
    }
};

const validateAndCorrectPhoneNumber = () => {
    const phoneNumber = readlineSync.question("Enter the phone number: ");
    const formattedPhoneNumber = phoneNumber.replace('-', '');

    console.log(`Phone Number: ${phoneNumber}`);
    if (formattedPhoneNumber.length === 7) {
        console.log(`The phone number has 7 digits. I'll add the digit 3 in front.`);

        const correctedNumber = '3' + formattedPhoneNumber;
        console.log(`Corrected phone number without formatting: ${correctedNumber}`);

        const formattedCorrectedNumber = correctedNumber.slice(0, 4) + '-' + correctedNumber.slice(4);
        console.log(`Corrected phone number with formatting: ${formattedCorrectedNumber}`);
    }
};

module.exports = {
    sizeOfStrings,
    reverseName, 
    verticalName,
    invertedVerticalName,
    getFullMonthName,
    countSpacesAndVowels,
    palindrome,
    checkCpf,
    numberToWords,
    hangmanGame,
    validateAndCorrectPhoneNumber
};