const holes = document.querySelectorAll('.hole');
const scoreBoard = document.querySelector('.score');
const moles = document.querySelectorAll('.mole');
let lastHole;
let timeUp = false;
let score = 0;
function randomTime(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}
function randomHole(holes) {
    const idx = Math.floor(Math.random() * holes.length);
    const hole = holes[idx];
    if (hole === lastHole) {
        console.log('Oh! thats the same one');
        return randomHole(holes);
    }
    lastHole = hole;
    return hole;
}
function hard() {
    const time = randomTime(150, 300);  //Hard Game
    const hole = randomHole(holes);
    hole.classList.add('up');
    setTimeout(() => {
        hole.classList.remove('up');
        if (!timeUp) hard();
    }, time);
}

function medium() {
    const time = randomTime(200, 500);  //Medium Game
    const hole = randomHole(holes);
    hole.classList.add('up');
    setTimeout(() => {
        hole.classList.remove('up');
        if (!timeUp) medium();
    }, time);
}

function easy() {
    const time = randomTime(400, 1000);  //Easy Game
    const hole = randomHole(holes);
    hole.classList.add('up');
    setTimeout(() => {
        hole.classList.remove('up');
        if (!timeUp) easy();
    }, time);
}

function startGame() {
    scoreBoard.textContent = 0;
    timeUp = false;
    score = 0;
    if (randomTime < 300 && randomTime > 150) {
        hard();
        // setTimeout(() => timeUp = true, 3000)
    }
    else if (randomTime < 500 && randomTime > 200) {
        medium();
        // setTimeout(() => timeUp = true, 3000)
    }
    else if (randomTime < 400 && randomTime > 1000) {
        hard();
        // setTimeout(() => timeUp = true, 3000)
    }
    setTimeout(() => timeUp = true, 3000)
}
function bonk(e) {
    if (!e.isTrusted) return; // cheater!
    score++;
    this.parentNode.classList.remove('up');
    scoreBoard.textContent = score;
}
moles.forEach(mole => mole.addEventListener('click', bonk));