// const main = () => {
//   document.querySelector('h1').textContent += '?'
// }

// document.addEventListener('DOMContentLoaded', main)

const homeTeamButtonClickEvent = () => {
  console.log('Home button was clicked')
  const currentValue = document.querySelector('.home-team-name').value
  console.log(currentValue)
  document.querySelector('.home-team').textContent = currentValue
}

document.querySelector('.home-team-name-button').addEventListener('click', homeTeamButtonClickEvent)