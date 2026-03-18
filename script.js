// ||SCORE
let humanScore = 0;
let computerScore = 0;

function playGame() {
	// ||SELECTION
	const humanSelection = getHumanChoice();
	const computerSelection = getComputerChoice();

	// ||COMPUTER'S CHOICE
	function getComputerChoice() {
		const rockPaperScissors = "rock, paper, scissors";
		const rockPaperScissor = rockPaperScissors.split(", ");
		const choice = rockPaperScissor[Math.floor(Math.random() * rockPaperScissor.length)];
		return choice;
	}

	// ||HUMAN'S CHOICE
	function getHumanChoice() {
		const choice = prompt('Choose one of these: "Rock", "Paper", or "Scissors"', "")?.toLowerCase();
		return choice;
	}

	// ||GAME
	function playRound(humanChoice, computerChoice) {
		if (
			(humanChoice === "rock" && computerChoice === "paper") ||
			(humanChoice === "paper" && computerChoice === "scissors") ||
			(humanChoice === "scissors" && computerChoice === "rock")
		) {
			console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
			humanScore += 0;
			computerScore += 1;
		} else if (
			(humanChoice === "paper" && computerChoice === "rock") ||
			(humanChoice === "scissors" && computerChoice === "paper") ||
			(humanChoice === "rock" && computerChoice === "scissors")
		) {
			console.log(`You win! ${humanChoice} beats ${computerChoice}`);
			humanScore += 1;
			computerScore += 0;
		} else if (humanChoice === computerChoice) {
			console.log("it's a tie");
			humanScore += 0;
			computerScore += 0;
		} else {
			const fail = "You must enter your choice";
			console.log(fail);
			return;
		}

		const result = `total of human's score: ${humanScore} and computer's score is ${computerScore}`;
		console.log(result);
	}

	playRound(humanSelection, computerSelection);
}

for (let i = 0; i < 5; i++) {
	playGame();
}
