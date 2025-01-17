let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".logo")
const msg = document.querySelector("#msg")

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () =>{
    let options =["rock", "paper", "scissors"];
    const ranIdx = Math.floor(Math.random() * 3);
    return options[ranIdx];
}

const drawGame = () => {
    msg.innerText = ("Game Draw! Play Again");
    msg.style.backgroundColor = "black";
}

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = (`You Win! Your ${userChoice} beats ${compChoice}.`);
        msg.style.backgroundColor = "green";
    } else {
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = (`You Lose! ${compChoice} beats your ${userChoice}`);
        msg.style.backgroundColor = "red";
    }
}

const playGame = (userChoice) => {
    const compChoice = genCompChoice();

    if (userChoice === compChoice){
        drawGame();
    } else {
        let userWin = true;
        if (userChoice === "rock"){
            //scissors, paper
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            // rock, scissors
            userWin = compChoice === "scissors" ? false : true;
        } else {
            //rock , paper
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
}

choices.forEach((logo) => {
    logo.addEventListener("click", () => {
        const userChoice = logo.getAttribute("id");
        playGame(userChoice);
    })

})