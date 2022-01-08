
const body = document.querySelector("body");
let game_parts = ["paper", "rock", "scissors"];
let ele = document.querySelectorAll(".rps-game .game-part");
let playerResultElement = document.querySelector(".rps-resulte span");
playerResultElement.textContent =0;
  ele.forEach((e) => {
    e.onclick = function () {
      let random = game_parts[Math.floor(Math.random() * game_parts.length)];

      if(e.getAttribute("data-game-part") === random){
        tie();
      }else{
        switch (e.getAttribute("data-game-part")) {
          case "paper":
            paper();
            break;
          case "rock":
            rock();
            break;
          case "scissors":
            scissors();
            break;
        }
      }

      function tie(){
          interface("tie",random ,random);
      }
      // Paper
      function paper() {
        if (e.getAttribute("data-game-part") == "paper" && random == "rock") {
          console.log("You Win");
          interface(true,"paper" ,random);
          playerResultElement.textContent = +playerResultElement.textContent + 1;
        } else {
          console.log("You Lose");
          interface(false,"paper",random)
        }
      }
  
      // Rock
      function rock() {
        if (e.getAttribute("data-game-part") == "rock" && random == "scissors") {
          console.log("You Win");
          interface(true,"rock",random);
          playerResultElement.textContent = +playerResultElement.textContent + 1;
        } else {
          console.log("You Lose");
          interface(false,"rock",random);
        }
      }
  
      // Scissors
      function scissors() {
        if (e.getAttribute("data-game-part") == "scissors" && random == "paper") {
          console.log("You Win");
          interface(true,"scissors",random);
          playerResultElement.textContent = +playerResultElement.textContent + 1;
        } else {
          console.log("You Lose");
          interface(false,"scissors",random);
        }
      }
    };
  });


function interface(win, ele,house) {
  var block = document.createElement("div");
  block.classList.add("result");
  let result_text = win == "tie" ? "Tie" : win === true ? "You Win" : win === false ? "You Lose" :"Error";
  block.innerHTML = `
    <div class="result-box">
        <h3>YOU PICKED</h3>
        <div class="game-part winner ${ele}" data-game-part='paper'>
            <img src="images/icon-${ele}.svg" alt="">
        </div>
    </div>
    <div class="text-result">
        <h1>${result_text}</h1>
        <button class="play-again" id='play-again'>
            Play Again
        </button>
    </div>
    <div class="result-box">
        <h3>THE HOUSE PICKED</h3>
        <div class="game-part ${house}" data-game-part='rock'>
            <img src="images/icon-${house}.svg" alt="">
        </div>
    </div>`;
    document.querySelector(".rps-game").style.display = "none";
    body.insertBefore(block,body.childNodes[2]);
    let playAgainBtn = document.querySelector(".play-again");
    playAgainBtn.onclick = function(){
      block.style.display = "none";
      document.querySelector(".rps-game").style.display = "block"
    }
    
}


