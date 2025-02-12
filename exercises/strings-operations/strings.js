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

    for (let i=0; i < dividedName.length; i++) {
        console.log(dividedName[i]);
    }

}

module.exports = {
    sizeOfStrings,
    reverseName, 
    verticalName
};