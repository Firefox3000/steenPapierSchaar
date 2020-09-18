const y = ['steen', 'papier', 'schaar']

document.querySelector('.options').addEventListener('click', (e) => {
  document.querySelector('.guess').innerHTML = e.target.innerHTML
  const g = y.indexOf(e.target.innerHTML)

  const x = ~~(Math.random() * 3)
  document.querySelector('.ai').innerHTML = y[x]
  document.querySelector('.result').innerHTML =
    g == x ? 'tie' : g == x - 1 || (g == 2 && x == 0) ? 'loss' : 'win'
})
