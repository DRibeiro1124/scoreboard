// const main = () => {
//   document.querySelector('h1').textContent += '?'
// }

// document.addEventListener('DOMContentLoaded', main)

const homeTeamButtonClickEvent = () => {
  console.log('Home team update button was clicked')
  const currentValue = document.querySelector('.home-team-name').value
  console.log(currentValue)
  document.querySelector('.home-team').textContent = currentValue
}

const awayTeamButtonClickEvent = () => {
  console.log('Away team update button was clicked')
  const currentValue = document.querySelector('.away-team-name').value
  console.log(currentValue)
  document.querySelector('.away-team').textContent = currentValue
}

const homeAddGoalButtonClickEvent = () => {
  console.log('Plus one goal')
  const currentValue = parseInt(document.querySelector('.home-score').textContent)
  console.log(currentValue)
  document.querySelector('.home-score').textContent = currentValue + 1
}

const homeSubtractGoalButtonClickEvent = () => {
  console.log('Minus one goal')
  const currentValue = parseInt(document.querySelector('.home-score').textContent)
  console.log(currentValue)
  if(currentValue > 0) {
    document.querySelector('.home-score').textContent = currentValue -1
  }
}

const awayAddGoalButtonClickEvent = () => {
  console.log('Plus one goal')
  const currentValue = parseInt(document.querySelector('.away-score').textContent)
  console.log(currentValue)
  document.querySelector('.away-score').textContent = currentValue + 1
}

const awaySubtractGoalButtonClickEvent = () => {
  console.log('Minus one goal')
  const currentValue = parseInt(document.querySelector('.away-score').textContent)
  console.log(currentValue)
  if(currentValue > 0) {
    document.querySelector('.away-score').textContent = currentValue -1
  }
}

document.querySelector('.home-team-name-button').addEventListener('click', homeTeamButtonClickEvent)
document.querySelector('.away-team-name-button').addEventListener('click', awayTeamButtonClickEvent)
document.querySelector('.home-add-goal').addEventListener('click', homeAddGoalButtonClickEvent)
document.querySelector('.home-minus-goal').addEventListener('click', homeSubtractGoalButtonClickEvent)
document.querySelector('.away-add-goal').addEventListener('click', awayAddGoalButtonClickEvent)
document.querySelector('.away-minus-goal').addEventListener('click', awaySubtractGoalButtonClickEvent)