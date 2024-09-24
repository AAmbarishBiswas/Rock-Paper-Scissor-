let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
    const options = ["rock", "paper","scissors"];
   const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};

const drawGame = () => {
    msg.innerText = "Game was Draw. play again.";
    msg.style.backgroundColor = "#081b31";
};

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin) {
        userscore++;
        userScorePara.innerText = userscore;
        msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        compscore++;
        compScorePara.innerText = compscore;
        msg.innerText = `You lost. ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
};
const playGame = (userchoice) => {
    const compchoice = genCompChoice();
    
    if(userchoice === compchoice) {
        drawGame();
    } else {
        let userWin = true;
        if(userchoice === "rock")   {
            userWin = compchoice === "paper"? false : true;
        } else if (userchoice === "paper") {
            userWin = compchoice === "scissors"? false : true;
        } else {
            userWin = compchoice === "rock"? false : true;
        }
        showWinner(userWin,userchoice,compchoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click",() => {
        const userchoice = choice.getAttribute("id");
        playGame(userchoice);
    });
});