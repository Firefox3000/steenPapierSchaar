const y = ['steen', 'papier', 'schaar'];

document.querySelector('.options').addEventListener('click', (e) => {
    const guess = Array.prototype.slice.call(document.querySelector('.options').children).indexOf(document.getElementsByClassName(e.target.innerHTML)[0])
    document.querySelector('.guess').innerHTML = y[guess];

    const x = Math.floor(Math.random() * 3);
    document.querySelector('.ai').innerHTML = y[x];
    document.querySelector('.result').innerHTML = (guess == x) ? 'tie' : (guess == x - 1 || guess == 2 && x == 0) ? 'loss' : 'win';
});

//for loop for dramatic effect
