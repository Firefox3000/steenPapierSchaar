let y = ['steen', 'papier', 'schaar'];

function steen(guess) {
    let x = Math.floor(Math.random() * 3);
    document.querySelector('.ai').innerHTML = y[x];
    document.querySelector('.result').innerHTML = (guess == x) ? 'tie' : (guess == x - 1 || guess == 2 && x == 0) ? 'loss' : 'win';
}

document.querySelector('.options').addEventListener('click', (e) => {
    let bro = Array.prototype.slice.call(document.querySelector('.options').children).indexOf(document.getElementsByClassName(e.target.innerHTML)[0])
    document.querySelector('.guess').innerHTML = y[bro];
    steen(bro);
});

//for loop voor dramatisch effect
