let start = document.querySelector('.start');
let end = document.querySelector('.end');
let heart = document.querySelector('.heart');
let restart = document.querySelector('.restart');
let check = document.querySelector('.check');
let message = document.querySelector('.message');
let gameEnd = document.querySelector('.game-end');
const please = document.querySelector('.please');
const inputContainer = document.querySelector('.input-container');
const numberInput = document.querySelector('#number');
let life = 7;
let random = Math.floor(Math.random() * 100 + 1);

console.log(random);


const guessNumber = function () {
    if (life >= 1) {
        if (numberInput.value > 0 && numberInput.value < 100) {
            if (random == numberInput.value) {
                message.innerText = `Are you a mind reader? Congrats!`;
                message.style.color = '#06FF00';
                numberInput.value = '';
                check.style.display = 'none';
                gameEnd.style.display = 'none';
                restart.style.display = 'block';
                numberInput.style.display = 'none';
                winner.play();
            }
            else if (numberInput.value < random) {
                message.innerText = `This is too lower!\nPlease enter a high number.`;
                start.innerText = numberInput.value;
                numberInput.value = '';
                life--;
                heart.innerText = life;
                down.play();
            }
            else if (numberInput.value > random) {
                message.innerText = `This is too high!\nPlease enter a lower number.`;
                end.innerText = numberInput.value;
                numberInput.value = '';
                life--;
                heart.innerText = life;
                up.play();
            }           
        }
        else {
            message.innerText = `Please enter a valid number!`
            numberInput.value = '';
        }        
    }
     else if (life <= 1) {
        numberInput.value = '';
        numberInput.style.display = 'none';
        check.style.display = 'none';
        message.style.display = 'none';
        restart.style.display = 'block';
        gameEnd.innerText = `Sorry! GAME OVER!`;
        gameEnd.style.color = '#FFF323';
        loser.play();
     }     
}

numberInput.addEventListener('keydown', (e)=> {
    if (e.keyCode === 13) {
        check.click();
        numberInput.focus();
    }
 })

window.onload = () => {
    numberInput.focus();
};

check.addEventListener('click', guessNumber);