let random_number = parseInt(Math.random() * 100 + 1);
console.log(random_number);

const submit = document.querySelector("#subt");
const userIntput = document.querySelector("#guessField");
const guessSlot = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");
const low_high = document.querySelector(".lowOrHi");
const startOver = document.querySelector(".resultParas");

const p = document.createElement("p");

let preGuess = [];
let attemps = 1;
let playGame = true;

if (playGame) {
  submit.addEventListener("click", function (e) {
    e.preventDefault();
    const guess = parseInt(userIntput.value);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert("Please enter a valid number!");
  } else if (guess < 1) {
    alert("Please enter a number greater than 1!");
  } else if (guess > 100) {
    alert("Please enter a number less than 100!");
  } else {
    preGuess.push(guess);
    if (attemps === 11) {
      displayGuess(guess);
      displayMsg(`Game Over! Random number was ${random_number}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === random_number) {
    displayMsg(`You guessed is right`);
    endGame();
  } else if (guess < random_number) {
    displayMsg(`Number is too low`);
  } else if (guess > random_number) {
    displayMsg(`Number is too high`);
  }
}

function displayGuess(guess) {
  userIntput.value = "";
  guessSlot.innerHTML += `${guess} `;
  attemps++;
  remaining.innerHTML = `${11 - attemps}`;
}

function displayMsg(msg) {
  low_high.innerHTML = `<h2>${msg}</h2>`;
}

function endGame() {
  playGame = false;
  userIntput.value = "";
  userIntput.setAttribute("disabled", "");
  p.classList.add("button");
  p.innerHTML = '<h2 id="newGame">Start new game</h2>';
  startOver.appendChild(p);
  newGame();
}

function newGame() {
  const newGameButton = document.querySelector("#newGame");
  newGameButton.addEventListener("click", function (e) {
    random_number = random_number = parseInt(Math.random() * 100 + 1);
    console.log(random_number);
    preGuess = [];
    attemps=1;
    guessSlot.innerHTML=''
    remaining.innerHTML=`${11-attemps}`
    userIntput.removeAttribute('disabled')
    startOver.removeChild(p)
    playGame = true;
  });
}
