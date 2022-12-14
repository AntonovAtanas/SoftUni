const { getUnpackedSettings } = require('http2');

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

let computerGuess = Math.floor(Math.random() * 100);

let maximumAttempts = 3;
let failedAttempts = 0;

let recursiveAsyncReadline = function () {
    readline.question('Guess the number (0-100): ', number => 
    {
        if (number >= 0 && number <= 100){
            if (number == computerGuess){
                console.log('Success! You guessed it!')
                return readline.close()
            } else if (number < computerGuess){
                console.log('Try again! Number is too low!')
                failedAttempts++
                console.log(`Attempts left: ${maximumAttempts - failedAttempts}`)
                if (failedAttempts == 3){
                    console.log(`You have lost.`)
                    return readline.close()
                }
                recursiveAsyncReadline()
            } else {
                console.log('Try again! Number is too big!')
                failedAttempts++
                console.log(`Attempts left: ${maximumAttempts - failedAttempts}`)
                if (failedAttempts == 3){
                    console.log(`Computer's number was ${computerGuess}`)
                    console.log(`You have lost.`)
                    return readline.close() 
                }
                recursiveAsyncReadline()
            }
        } else {
            console.log('Invalid input! Try again...')
            recursiveAsyncReadline()
        }
    });
}
recursiveAsyncReadline();