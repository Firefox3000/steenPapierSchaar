let y = ['steen', 'papier', 'schaar'];

function steen(guess) {
    let x = Math.floor(Math.random() * 3);
    document.querySelector('.ai').innerHTML = y[x];
    document.querySelector('.result').innerHTML = (guess == x) ? 'tie' : (guess == x - 1 || guess == 2 && x == 0) ? 'loss' : 'win';
}

document.querySelectorAll('.guess')[0].childNodes.forEach(item => {
    item.addEventListener('click', (e) => {
        document.querySelector('.poepie .guess').innerHTML = e.target.innerHTML;
        steen(Array.prototype.slice.call(document.querySelector('.guess').children).indexOf(document.getElementsByClassName(e.target.innerHTML)[0]));
    })
});

//for loop voor dramatisch effect
