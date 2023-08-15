import './style.css'
const team1ScoreElement = document.querySelector('.team1 h3') as HTMLElement
const team2ScoreElement = document.querySelector('.team2 h3') as HTMLElement
const teamNameInputs = document.querySelectorAll(
  '.team-name'
) as NodeListOf<HTMLInputElement>
const addButtonIcons = document.querySelectorAll(
  '.add'
) as NodeListOf<HTMLElement>
const subtractButtonIcons = document.querySelectorAll(
  '.subtract'
) as NodeListOf<HTMLElement>
const resetButton = document.querySelector('.reset-button') as HTMLElement

let team1Score = 0
let team2Score = 0

addButtonIcons.forEach((icon) => {
  icon.addEventListener('click', () => {
    if (icon.closest('.team1')) {
      team1Score = Math.min(team1Score + 1, 21)
      team1ScoreElement.textContent = team1Score.toString()
    } else if (icon.closest('.team2')) {
      team2Score = Math.min(team2Score + 1, 21)
      team2ScoreElement.textContent = team2Score.toString()
    }

    checkWinner()
  })
})

subtractButtonIcons.forEach((icon) => {
  icon.addEventListener('click', () => {
    if (icon.closest('.team1')) {
      team1Score = Math.max(team1Score - 1, 0)
      team1ScoreElement.textContent = team1Score.toString()
    } else if (icon.closest('.team2')) {
      team2Score = Math.max(team2Score - 1, 0)
      team2ScoreElement.textContent = team2Score.toString()
    }
  })
})

teamNameInputs.forEach((input) => {
  input.addEventListener('input', () => {
    const teamHeader = input.closest('section')!.querySelector('h2')
    teamHeader!.textContent = input.value || 'Team'
  })
})

function checkWinner() {
  if (team1Score === 21) {
    displayWinner('Team 1')
  } else if (team2Score === 21) {
    displayWinner('Team 2')
  }
}
function displayWinner(winner: string) {
  const winnerMessage = document.createElement('p')
  winnerMessage.textContent = `${winner} wins!`
  document.body.appendChild(winnerMessage)
}
resetButton.addEventListener('click', () => {
  team1Score = 0;
  team2Score = 0;
  team1ScoreElement.textContent = '0';
  team2ScoreElement.textContent = '0';
  const winnerMessage = document.querySelector('p');
  if (winnerMessage) {
    winnerMessage.remove();
  }
});