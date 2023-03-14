const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let answersBuffer = [];
const readAnswers = (answers) => {
  for (const answer of answers) {
    process.stdout.write(answer + '\n');
  }
}


const q1 = () => {
  rl.question('What\'s your name? Nicknames are also acceptable :) ', (answer) => {
    answersBuffer.push(`Nickname: ${answer}`);
    q2();
  });

}
q1();

const q2 = () => {
  rl.question('What\'s an activity you like doing? ', (answer) => {
    answersBuffer.push(`Fav Activity: ${answer}`);
    q3();
  });

}

const q3 = () => {
  rl.question('What do you listen to while doing that? ', (answer) => {
    answersBuffer.push(`Fav Music: ${answer}`);
    q4();
  });

}

const q4 = () => {
  rl.question('Which meal is your favourite (eg: dinner, brunch, etc.) ', (answer) => {
    answersBuffer.push(`Fav Meal: ${answer}`);
    q5();
  });

}

const q5 = () => {
  rl.question('What\'s your favourite thing to eat for that meal? ', (answer) => {
    answersBuffer.push(`Fav Food: ${answer}`);
    q6()
  });
  
}

const q6 = () => {
  rl.question('Which sport is your absolute favourite? ', (answer) => {
    answersBuffer.push(`Fav Sport: ${answer}`);
    q7()
  });
  
}

const q7 = () => {
  rl.question('What is your superpower? In a few words, tell us what you are amazing at! ', (answer) => {
    answersBuffer.push(`Humble Brag: ${answer}`);
  
    rl.close();
    readAnswers(answersBuffer);
  });
  
}


