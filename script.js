let results = {
    0: 'Steen',
    1: 'Papier',
    2: 'Schaar'
}

function steen(guess) {
    let x = Math.floor(Math.random() * 3);
    document.querySelector('.ai').innerHTML = results[x]

    if (guess == x) {
        document.querySelector('.result').innerHTML = 'tie';
    } else if (guess == x - 1 || guess == 2 && x == 0) {
        document.querySelector('.result').innerHTML = 'loss';
    } else {
        document.querySelector('.result').innerHTML = 'win';
    }
}

document.querySelector('.steen').addEventListener('click', () => {
    document.querySelector('.poepie .guess').innerHTML = 'steen';
    steen(0);
})

document.querySelector('.papier').addEventListener('click', () => {
    document.querySelector('.poepie .guess').innerHTML = 'papier';
    steen(1);
})

document.querySelector('.schaar').addEventListener('click', () => {
    document.querySelector('.poepie .guess').innerHTML = 'schaar';
    steen(2);
})

//for loop voor dramatisch effect
