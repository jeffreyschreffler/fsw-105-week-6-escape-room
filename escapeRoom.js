var readlineSync = require('readline-sync');

let isAlive = true;
let hasKey = false;

let playerName = readlineSync.question(`Welcome to Escape Room Game. May I please have your name? `)
const welcome = `Welcome to the game ${playerName}, I wish you the best of luck!`
console.log(welcome);

// game loop

while(isAlive == true) {
    const menuSelection = readlineSync.keyIn('Enter 1 to put your hand in the hole, Enter 2 to find the key, or Enter 3 to open the door.', {limit: '$<1-3>'})
    if (menuSelection == 1) {
        console.log(`OH NO ${playerName}, you have died! Don\'t put you hand in dark holes. GAME OVER`);
        isAlive = false;
    } else if (menuSelection == 2 && hasKey == false) {
        console.log(`${playerName}, You found the key! Great Job. Move to the next menu option`)
        hasKey = true;
    } else if (menuSelection == 2 && hasKey == true) {
        console.log(`You aready found the key! Move on to the next menu option.`);
        hasKey = true;

    } else if ( menuSelection == 3 && hasKey == false) {
        console.log('You must find the key first!')
    } else if (menuSelection == 3 && hasKey == true) {
       console.log(`Congratulations You Escaped! You Win!`);
       isAlive = false;
    }
}

