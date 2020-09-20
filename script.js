document.querySelector('.options').addEventListener('click', (e) => {
  const b = ~~(Math.random() * 3)
  document.querySelector('.guess').innerHTML = e.target.innerHTML
  document.querySelector('.ai').innerHTML = ['steen', 'papier', 'schaar'][b]
  document.querySelector('.result').innerHTML = ['win', 'loss', 'tie'][
    (e.target.dataset.index - b + 2) % 3
  ]
})
