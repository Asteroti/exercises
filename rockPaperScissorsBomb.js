const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();
  if (userInput === "rock" || userInput === "paper" || userInput === "scissors" || userInput === "bomb") {
    return userInput;
  } else {
    console.log("Bro that ain't it...");
    return null;
  }
};

const getComputerChoice = () => {
  const computerInput = Math.floor(Math.random() * 3)
  if (computerInput === 2) {
    return 'rock';
  } else if (computerInput === 1) {
    return 'paper';
  } else if (computerInput === 0) {
    return 'scissors';
  } else {
    console.log('i fucked up somewhere');
    return null;
  }
}
const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    console.log("Wow a tie. We still have a chance against the computer uprising... You were the chosen one after all...! My mom will be calling you soon to sort out the details. Humanity Stands, Now and Forever!");
  } else {
    if (userChoice === 'bomb') {
      console.log("They were the last four of their kind, standing against an eternal torturer that discarded the concept of time as real. They had in their power the switch to create another type of eternity. Without them. To cease. They agreed the day before. The bomb set off. Finally. Death in all creation in Earth's face, and no tear or sigh or significance in any reaction, because Nothing had happened.");
    } else {
      if (userChoice === 'rock') {
        if (computerChoice === 'paper') {
          console.log('Wow the computer won. Oh no what is this?? System Override. Robot uprising activation sequence initialized');
        } else {
          console.log('You won i guess. congrats');
        }
      } else if (userChoice === 'paper') {
        if (computerChoice === 'scissors') {
          console.log('Computer won...the blade cuts the poem...');
        } else {
          console.log('The paper wraps the silly rock. This one is kinda stupid ngl. Like get hugged. .. ? You won btw, very nice.');
        }
      } else if (userChoice === 'scissors') {
        if (computerChoice === 'rock') {
          console.log('Oh look at me I know how to write scissors correctly. Get smashed idiot. PC wins.');
        } else {
          console.log("The cutting edge sketches the line through the paper's skin without remorse...you win. But at what cost?");
        }
      }
    }
  }
}
const playGame = () => {
  const userChoice = getUserChoice('rock');
  console.log("I'm the user and I choose", userChoice);

  const computerChoice = getComputerChoice();
  console.log("Well I'm the computer and you suck:", computerChoice);

  determineWinner(userChoice, computerChoice);
}

playGame();
