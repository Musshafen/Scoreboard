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
let team1Score = 0
let team2Score = 0

addButtonIcons.forEach((icon) => {
  icon.addEventListener('click', () => {
    if (icon.closest('.team1')) {
      team1Score += 1
      team1ScoreElement.textContent = team1Score.toString()
    } else if (icon.closest('.team2')) {
      team2Score += 1
      team2ScoreElement.textContent = team2Score.toString()
    }
  })
})

subtractButtonIcons.forEach((icon) => {
  icon.addEventListener('click', () => {
    if (icon.closest('.team1')) {
      team1Score -= 1
      team1ScoreElement.textContent = team1Score.toString()
    } else if (icon.closest('.team2')) {
      team2Score -= 1
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
