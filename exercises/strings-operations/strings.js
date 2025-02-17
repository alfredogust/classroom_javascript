const readlineSync = require('readline-sync');

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

module.exports = {
    sizeOfStrings,
    reverseName, 
    verticalName,
    invertedVerticalName,
    getFullMonthName,
    countSpacesAndVowels,
    palindrome,
    checkCpf,
    numberToWords
};