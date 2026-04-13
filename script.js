// ||BATTLE
const playerChoiceRps = document.querySelector("#player__choice");
const computerChoiceRps = document.querySelector("#computer__choice");
const stage = document.querySelector(".stage");
const battle = document.querySelector(".battle");
const playerChoices = document.querySelectorAll(".choices");

const btns = document.querySelectorAll(".btn-choice");

// ||SCORE BOARD
const scores = document.querySelectorAll(".player__score");
const yourPoint = document.querySelector("#player-score");
const computerPoint = document.querySelector("#computer-score");
const theResult = document.querySelector(".result");

// ||INITIAL SCORE
let humanScore = 0;
let computerScore = 0;
let winner = "";

function playGame() {
	// ||PLAY ROUND
	function playRound(humanChoice, computerChoice) {
		if (winner === "") {
			stage.classList.add("stage-fadeIn");
			battle.classList.add("battle-initial-one");

			// ||COMPUTER SELECTION
			const computerSelection = getComputerChoice();

			// ||COMPUTER'S CHOICE
			function getComputerChoice() {
				const rockPaperScissors = "rock, paper, scissors";
				const rockPaperScissor = rockPaperScissors.split(", ");
				const choice =
					rockPaperScissor[Math.floor(Math.random() * rockPaperScissor.length)];
				return choice;
			}

			humanChoice = this.dataset.selection;
			computerChoice = computerSelection;

			switch (humanChoice) {
				case "rock":
					playerChoiceRps.style.background =
						"url('img/rock.png') no-repeat center / cover";
					playerChoiceRps.classList.add("choices-bigSmall");

					for (const playerChoice of playerChoices) {
						if (humanScore + 1 === 5 || computerScore + 1 === 5) {
							playerChoice.classList.remove("choices-bigSmall");
						}
					}

					break;
				case "paper":
					playerChoiceRps.style.background =
						"url('img/paper.png') no-repeat center / cover";
					playerChoiceRps.classList.add("choices-bigSmall");

					for (const playerChoice of playerChoices) {
						if (humanScore + 1 === 5 || computerScore + 1 === 5) {
							playerChoice.classList.remove("choices-bigSmall");
						}
					}

					break;
				case "scissors":
					playerChoiceRps.style.background =
						"url('img/scissors.png') no-repeat center / cover";
					playerChoiceRps.classList.add("choices-bigSmall");

					for (const playerChoice of playerChoices) {
						if (humanScore + 1 === 5 || computerScore + 1 === 5) {
							playerChoice.classList.remove("choices-bigSmall");
						}
					}

					break;
			}

			switch (computerChoice) {
				case "rock":
					computerChoiceRps.style.background =
						"url('img/rock.png') no-repeat center / cover";
					computerChoiceRps.classList.add("choices-bigSmall");

					for (const playerChoice of playerChoices) {
						if (humanScore + 1 === 5 || computerScore + 1 === 5) {
							playerChoice.classList.remove("choices-bigSmall");
						}
					}

					break;
				case "paper":
					computerChoiceRps.style.background =
						"url('img/paper.png') no-repeat center / cover";
					computerChoiceRps.classList.add("choices-bigSmall");

					for (const playerChoice of playerChoices) {
						if (humanScore + 1 === 5 || computerScore + 1 === 5) {
							playerChoice.classList.remove("choices-bigSmall");
						}
					}

					break;
				case "scissors":
					computerChoiceRps.style.background =
						"url('img/scissors.png') no-repeat center / cover";
					computerChoiceRps.classList.add("choices-bigSmall");

					for (const playerChoice of playerChoices) {
						if (humanScore + 1 === 5 || computerScore + 1 === 5) {
							playerChoice.classList.remove("choices-bigSmall");
						}
					}

					break;
			}

			if (
				(humanChoice === "rock" && computerChoice === "paper") ||
				(humanChoice === "paper" && computerChoice === "scissors") ||
				(humanChoice === "scissors" && computerChoice === "rock")
			) {
				computerPoint.classList.add("number-effect");
				humanScore += 0;
				computerScore += 1;
			} else if (
				(humanChoice === "paper" && computerChoice === "rock") ||
				(humanChoice === "scissors" && computerChoice === "paper") ||
				(humanChoice === "rock" && computerChoice === "scissors")
			) {
				yourPoint.classList.add("number-effect");
				humanScore += 1;
				computerScore += 0;
			} else if (humanChoice === computerChoice) {
				humanScore += 0;
				computerScore += 0;

				for (const score of scores) {
					score.classList.add("number-effect");
				}
			} else {
				const fail = "Result: You must enter your choice";
				theResult.textContent = fail;
				return;
			}

			for (const btn of btns) {
				btn.addEventListener("animationend", () => {
					yourPoint.classList.remove("number-effect");
					computerPoint.classList.remove("number-effect");
				});
			}

			// ||TOTAL SCORES
			yourPoint.textContent = humanScore;
			computerPoint.textContent = computerScore;

			// ||THE WINNER
			if (humanScore === 5 || computerScore === 5) {
				battle.classList.add("battle-fadeOut");
				theResult.classList.remove("result-fadeOut");
				theResult.classList.add("result-fadeIn");

				for (const btn of btns) {
					btn.classList.add("disabled");
					btn.classList.remove("btn--active", "btn--hover");
					btn.style.cursor = "not-allowed";
				}
			}

			if (humanScore === 5) {
				winner = "The winner is you";
				theResult.textContent = winner;
				theResult.style.color = "#80FF72";
			} else if (computerScore === 5) {
				winner = "The winner is your computer";
				theResult.textContent = winner;
				theResult.style.color = "#FC2F00";
			}
		}
	}

	for (const btn of btns) {
		btn.addEventListener("click", playRound);
	}

	for (const score of scores) {
		score.addEventListener("animationend", (event) => {
			event.target.classList.remove("number-effect");
		});
	}

	for (const playerChoice of playerChoices) {
		playerChoice.addEventListener("animationend", (event) => {
			event.target.classList.remove("choices-bigSmall");
		});
	}
}

playGame();

// ||RESET
const reset = document.querySelector(".reset");

reset.addEventListener("click", () => {
	yourPoint.textContent = 0;
	computerPoint.textContent = 0;
	battle.classList.remove("battle-fadeOut", "battle-initial-one");
	theResult.classList.add("result-fadeOut");
	battle.classList.add("battle-initial");

	for (const score of scores) {
		score.classList.add("number-effect");

		score.addEventListener("animationend", () => {
			score.classList.remove("number-effect");
		});
	}

	for (const btn of btns) {
		btn.style.cursor = "pointer";
		btn.classList.add("btn--active", "btn--hover");
		btn.classList.remove("disabled");
	}

	humanScore = 0;
	computerScore = 0;
	winner = "";
});
