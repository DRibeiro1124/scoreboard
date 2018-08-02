// const main = () => {
//   document.querySelector('h1').textContent += '?'
// }

// document.addEventListener('DOMContentLoaded', main)

const homeTeamButtonClickEvent = () => {
  console.log('Home team button was clicked')
  const currentValue = document.querySelector('.home-team-name').value
}

document.querySelector('.home-team-name-button').addEventListener('click', homeTeamButtonClickEvent)