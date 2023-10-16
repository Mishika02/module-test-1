const pScore = document.getElementById("playerScore");
const cScore = document.getElementById("computerScore");
console.log("pScore",pScore);
console.log("cScore",cScore);
debugger;
const buttons = document.querySelectorAll(".div1, .div2, .div3");
const yourChoice = document.querySelector(".trial1 ");
const computerChoice = document.querySelector(".trial2 ");
const nextBtn = document.querySelector(".next");
const playbtn = document.querySelector(".play");
const replybtn = document.querySelector(".replay")

let computerScore = 1;
let playerScore = 1;

// const rock = "div1";
// const paper = "div2";
// const scissors = "div3";

const randomClasses = ['rock', 'paper', 'scissors'];
const text = document.getElementById("result");

function updateUserScore() {
  var computerScoreElement = document.getElementById("userCurrentscore");
  var currentScore = parseInt(computerScoreElement.innerText);
  const updateUser = currentScore + 1;
  computerScoreElement.innerText = updateUser;
  localStorage.setItem("UserScore", updateUser);
}

function updateComputerScore() {
  var computerScoreElement = document.getElementById("computerCurrentscore");
  var currentScore = parseInt(computerScoreElement.innerText);
  const updateComputer = currentScore + 1;
  computerScoreElement.innerText = updateComputer;
  localStorage.setItem("computerScore", updateComputer);
}

const tie = () => {
  text.innerHTML = "TIE - UP ! ";
  text.style.color = "orange";
  nextBtn.style.display = "none";
  playbtn.style.display = "block";
  // replybtn.style.display = "block";
  updateScore();
  // document.getElementById("counter-1").value = playerScore;
  // document.getElementById("counter-2").value = computerScore;
};

const win = () => {
  text.innerHTML = "YOU WIN AGAINST PC ! ";
  text.style.color = "rgb(1, 146, 1)";
  nextBtn.style.display = "block";
  playbtn.style.display = "block";
  updateUserScore();
  // replybtn.style.display = "none";
  // updateScore();
  // document.getElementById("counter-1").value = playerScore;
  // document.getElementById("counter-2").value = computerScore;
  debugger;
};

const lose = () => {
  text.innerHTML = "YOU LOST AGAINST PC ! ";
  text.style.color = "red";
  nextBtn.style.display = "none";
  playbtn.style.display = "block";
  // replybtn.style.display = "none";
  updateComputerScore();
  // document.getElementById("counter-1").value = playerScore;
  // document.getElementById("counter-2").value = computerScore;
};

function userPick(userSelect,clickedBtn) {
  console.log('clickedBtn')
  console.log(userSelect)
  if (clickedBtn=="rock") {
    var rock = clickedBtn;
  }
  document.getElementById('userResult').innerHTML = userSelect;
  userResult.innerHTML = `<img class=${clickedBtn} src=${clickedBtn}.png alt='${clickedBtn} image'>`;
  // debugger;  
}
function pcPicker(pcPick){
  document.getElementById('pcResult').innerHTML = pcResult;
  pcResult.innerHTML = `<img class=${pcPick} src=${pcPick}.png alt='${pcPick} image'>`;
  // debugger;
}

const game = () => {
  buttons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const clickedBtn = e.target.className;
      console.log("e.target", e.target)
      const userSelect = e.target;
      userPick(userSelect,clickedBtn);
      // debugger;
      yourChoice.className = clickedBtn;
      const randomNum = Math.floor(Math.random() * randomClasses.length);
      computerChoice.className = randomClasses[randomNum];
      const pcPIck = computerChoice.className;
      pcPicker(pcPIck);
      // const computerChoiceImage = document.querySelectorAll(".trial2 img");
      // computerChoiceImage.src = 'pcPIck.png'
      // debugger;

      switch (yourChoice.className) {
        case "rock":
          switch (computerChoice.className) {
            case "rock":
              tie();
              break;
            case "scissors":
              win();
              break;
            case "paper":
              lose();
              break;
          }
          break;
        case "paper":
          switch (computerChoice.className) {
            case "rock":
              win();
              break;
            case "scissors":
              lose();
              break;
            case "paper":
              tie();
              break;
          }
          break;
        case "scissors":
          switch (computerChoice.className) {
            case "rock":
              lose();
              break;
            case "scissors":
              tie();
              break;
            case "paper":
              win();
              break;
          }
          break;
      }
      // debugger;
    });
  });
};

game();

const toggleDivs = () => {
  const box2 = document.getElementById("box-2");
  const box3 = document.getElementById("box-3");

  switch (box2.style.display) {
    case "none":
      box2.style.display = "block";
      box3.style.display = "none";
      break;
    default:
      box2.style.display = "none";
      box3.style.display = "flex";
      box3.style.justifyContent = "space-around";
      break;
  }
};

const displayPopup = () => {
  const popup = document.getElementById("box-4");
  popup.style.display = "block";
};

const closePopup = () => {
  const popup = document.getElementById("box-4");
  popup.style.display = "none";
};

const replay=()=>{
  location.href='index.html'
}
window.onload = function() {
  var storedScore = localStorage.getItem("computerScore");
  var userStoredScore = localStorage.getItem("UserScore");
  debugger;
  if (storedScore !== null) {
    debugger;
      var computerScoreElement = document.getElementById("computerCurrentscore");
      computerScoreElement.innerText = storedScore;
  }
  if (userStoredScore !== null) {
    var computerScoreElement = document.getElementById("userCurrentscore");
      computerScoreElement.innerText = userStoredScore;
  }
}