const display = document.getElementById("displayDiv");
let command = "";
let buttonState = 0;

// create the gameboard through IIFE factory function
let gameBoard = (() => {
    let gameboard = {topLeft: "", topMiddle: "", topRight: "", middleLeft: "",
         middleMiddle: "", middleRight: "", bottomLeft: "", bottomMiddle: "", bottomRight : "",}
    return {gameboard};
})();

// create game control object for game logic checks using IIFE factory function
let gameControl = (() => {

    // create players through factory function
    function createPlayer (name, symbol) {
        return {name, symbol};
    }
    
    //create players using factory function
    const player1 = createPlayer("", "X");
    const player2 = createPlayer("", "O");

    let result = "";
    gameState = "";

    // work out who takes the first turn through rng
    const turn = Math.random() < 0.5 ? "Player 1" : "Player 2";

    return {gameState, player1, player2, turn, result}
})();


function gameLogic (gameControl, gameBoard, command) {

    const player1Turn = `${gameControl.player1.name}'s turn, click to place your ${gameControl.player1.symbol}`;
    const player2Turn = `${gameControl.player2.name}'s turn, click to place your ${gameControl.player2.symbol}`;

    // function for switching player turns
    function turnSwitch () {
        if (gameControl.turn === "Player 1") {
            gameControl.turn = "Player 2";
            return;
        }
        gameControl.turn = "Player 1";
        return;
    }

    // update the display
    function displayUpdate() {
        if (gameControl.turn === "Player 1") {
            display.innerHTML = player1Turn;
        }
        else { 
            display.innerHTML = player2Turn;
        }
    }

    if (gameControl.gameState === "Started") {
        displayUpdate()
    }

    //switch statement for setting player actions
    let existingCheck = false;
    switch (command) {
        case "topLeft":
            if (gameBoard.gameboard.topLeft !== "") {
                    display.innerHTML = "Spot already taken";
                    existingCheck= true;
                    break;
                }
            if (gameControl.turn === "Player 1") {
                gameBoard.gameboard.topLeft = gameControl.player1.symbol;
                console.log(gameBoard.gameboard.topLeft);
                turnSwitch();
                displayUpdate()
                break;
            }
            gameBoard.gameboard.topLeft = gameControl.player2.symbol;
            console.log(gameBoard.gameboard.topLeft);
            turnSwitch();
            displayUpdate()
            break;

        case "topMiddle":
            if (gameBoard.gameboard.topMiddle !== "") {
                    display.innerHTML = "Spot already taken";
                    existingCheck= true;
                    break;
            }
            if (gameControl.turn === "Player 1") {
                gameBoard.gameboard.topMiddle = gameControl.player1.symbol;
                console.log(gameBoard.gameboard.topMiddle);
                turnSwitch();
                displayUpdate()
                break;
            }
            gameBoard.gameboard.topMiddle = gameControl.player2.symbol;
            console.log(gameBoard.gameboard.topMiddle);
            turnSwitch();
            displayUpdate()
            break;
        
        case "topRight":
            if (gameBoard.gameboard.topRight !== "") {
                    display.innerHTML = "Spot already taken";
                    existingCheck= true;
                    break;
            }
            if (gameControl.turn === "Player 1") {
                gameBoard.gameboard.topRight = gameControl.player1.symbol;
                console.log(gameBoard.gameboard.topRight);
                turnSwitch();
                displayUpdate()
                break;
            }
            gameBoard.gameboard.topRight = gameControl.player2.symbol;
            console.log(gameBoard.gameboard.topRight);
            turnSwitch();
            displayUpdate()
            break;

        case "middleLeft":
            if (gameBoard.gameboard.middleLeft !== "") {
                    display.innerHTML = "Spot already taken";
                    existingCheck= true;
                    break;
            }
            if (gameControl.turn === "Player 1") {
                gameBoard.gameboard.middleLeft = gameControl.player1.symbol;
                console.log(gameBoard.gameboard.middleLeft);
                turnSwitch();
                displayUpdate()
                break;
            }
            gameBoard.gameboard.middleLeft = gameControl.player2.symbol;
            console.log(gameBoard.gameboard.middleLeft);
            turnSwitch();
            displayUpdate()
            break;

        case "middleMiddle":
            if (gameBoard.gameboard.middleMiddle !== "") {
                    display.innerHTML = "Spot already taken";
                    existingCheck= true;
                    break;
            }
            if (gameControl.turn === "Player 1") {
                gameBoard.gameboard.middleMiddle = gameControl.player1.symbol;
                console.log(gameBoard.gameboard.middleMiddle);
                turnSwitch();
                displayUpdate()
                break;
            }
            gameBoard.gameboard.middleMiddle = gameControl.player2.symbol;
            console.log(gameBoard.gameboard.middleMiddle);
            turnSwitch();
            break;
        
        case "middleRight":
            if (gameBoard.gameboard.middleRight !== "") {
                    display.innerHTML = "Spot already taken";
                    existingCheck= true;
                    break;
            }
            if (gameControl.turn === "Player 1") {
                gameBoard.gameboard.middleRight = gameControl.player1.symbol;
                console.log(gameBoard.gameboard.middleRight);
                turnSwitch();
                displayUpdate()
                break;
            }
            gameBoard.gameboard.middleRight = gameControl.player2.symbol;
            console.log(gameBoard.gameboard.middleRight);
            turnSwitch();
            displayUpdate()
            break;

        case "bottomLeft":
            if (gameBoard.gameboard.bottomLeft !== "") {
                    display.innerHTML = "Spot already taken";
                    existingCheck= true;
                    break;
            }
            if (gameControl.turn === "Player 1") {
                gameBoard.gameboard.bottomLeft = gameControl.player1.symbol;
                console.log(gameBoard.gameboard.bottomLeft);
                turnSwitch();
                displayUpdate()
                break;
            }
            gameBoard.gameboard.bottomLeft = gameControl.player2.symbol;
            console.log(gameBoard.gameboard.bottomLeft);
            turnSwitch();
            displayUpdate()
            break;

        case "bottomMiddle":
            if (gameBoard.gameboard.bottomMiddle !== "") {
                    display.innerHTML = "Spot already taken";
                    existingCheck= true;
                    break;
            }
            if (gameControl.turn === "Player 1") {
                gameBoard.gameboard.bottomMiddle = gameControl.player1.symbol;
                console.log(gameBoard.gameboard.bottomMiddle);
                turnSwitch();
                displayUpdate()
                break;
            }
            gameBoard.gameboard.bottomMiddle = gameControl.player2.symbol;
            console.log(gameBoard.gameboard.bottomMiddle);
            turnSwitch();
            displayUpdate()
            break;
        
        case "bottomRight":
            if (gameBoard.gameboard.bottomRight !== "") {
                    display.innerHTML = "Spot already taken";
                    existingCheck= true;
                    break;
            }
            if (gameControl.turn === "Player 1") {
                gameBoard.gameboard.bottomRight = gameControl.player1.symbol;
                console.log(gameBoard.gameboard.bottomRight);
                turnSwitch();
                displayUpdate()
                break;
            }
            gameBoard.gameboard.bottomRight = gameControl.player2.symbol;
            console.log(gameBoard.gameboard.bottomRight);
            turnSwitch();
            displayUpdate()
            break;
    }

    

    gameControl.gameState = "Ongoing"

    // function for checking if game is over
    function winCheck() {
        if (gameBoard.gameboard.topLeft === "X" && gameBoard.gameboard.topMiddle === "X" && gameBoard.gameboard.topRight === "X" ||
            gameBoard.gameboard.topLeft === "X" && gameBoard.gameboard.middleLeft === "X" && gameBoard.gameboard.bottomLeft === "X" ||
            gameBoard.gameboard.topLeft === "X" && gameBoard.gameboard.middleMiddle === "X" && gameBoard.gameboard.bottomRight ===  "X" ||
            gameBoard.gameboard.middleLeft === "X" && gameBoard.gameboard.middleMiddle === "X" && gameBoard.gameboard.middleRight === "X" ||
            gameBoard.gameboard.bottomLeft === "X" && gameBoard.gameboard.bottomMiddle === "X" && gameBoard.gameboard.bottomRight === "X" ||
            gameBoard.gameboard.topMiddle === "X" && gameBoard.gameboard.middleMiddle === "X" && gameBoard.gameboard.bottomMiddle === "X" ||
            gameBoard.gameboard.bottomRight === "X" && gameBoard.gameboard.middleRight === "X" && gameBoard.gameboard.topRight === "X" ||
            gameBoard.gameboard.bottomLeft === "X" && gameBoard.gameboard.middleMiddle === "X" && gameBoard.gameboard.topRight === "X")
            {
                gameControl.result = `${gameControl.player1.name}`
            }
        else if (gameBoard.gameboard.topLeft === "O" && gameBoard.gameboard.topMiddle === "O" && gameBoard.gameboard.topRight === "O" ||
            gameBoard.gameboard.topLeft === "O" && gameBoard.gameboard.middleLeft === "O" && gameBoard.gameboard.bottomLeft === "O" ||
            gameBoard.gameboard.topLeft === "O" && gameBoard.gameboard.middleMiddle === "O" && gameBoard.gameboard.bottomRight ===  "O" ||
            gameBoard.gameboard.middleLeft === "O" && gameBoard.gameboard.middleMiddle === "O" && gameBoard.gameboard.middleRight === "O" ||
            gameBoard.gameboard.bottomLeft === "O" && gameBoard.gameboard.bottomMiddle === "O" && gameBoard.gameboard.bottomRight === "O" ||
            gameBoard.gameboard.topMiddle === "O" && gameBoard.gameboard.middleMiddle === "O" && gameBoard.gameboard.bottomMiddle === "O" ||
            gameBoard.gameboard.bottomRight === "O" && gameBoard.gameboard.middleRight === "O" && gameBoard.gameboard.topRight === "O" ||
            gameBoard.gameboard.bottomLeft === "O" && gameBoard.gameboard.middleMiddle === "O" && gameBoard.gameboard.topRight === "O")
            {
                gameControl.result = `${gameControl.player2.name}`;
            }
    };

    let squareCheck = 0;
    for (square in gameBoard.gameboard) {
        if (gameBoard.gameboard[square] === "") {
            squareCheck ++;
        }
    }
    if (squareCheck === 0){
        gameControl.result = "Tie"
    }

    winCheck();
    if (gameControl.result !== "") {
        if (gameControl.result === "Tie") {
            display.innerHTML = `Game result is a Tie`;
            return;
        }
        display.innerHTML = `Winner is ${gameControl.result}`;
        return;
    }
}

function gameStart(gameControl, gameBoard) {

    const startButton = document.getElementById("startRestart");

    // event listener and action depending on start or restart
    startButton.addEventListener("click", () => {
        
        if (buttonState === 1) {
            buttonState = 0;
            startButton.innerHTML = "Start";
            const gameContainer = document.querySelectorAll(".gameContainer>button");
            gameContainer.forEach(function(button) {button.innerHTML = ""});
            gameControl.result = "";
            gameControl.gameState = "";
            display.innerHTML = "Enter names of players";
        }

        else {
            buttonState = 1;
            startButton.innerHTML = "Reset";
            gameControl.gameState = "Started";
            gameLogic(gameControl, gameBoard);
        }

    });

    const gameContainer = document.querySelectorAll(".gameContainer>button");
    gameContainer.forEach(function(button) {
        button.addEventListener("click", () => {
            command = button.id;
            console.log(command);
            if (gameControl.turn === "Player 1" && button.innerHTML === "") {
                button.innerHTML = `${gameControl.player1.symbol}`
            }
            else if (gameControl.turn === "Player 2" && button.innerHTML === "") {
                button.innerHTML = `${gameControl.player2.symbol}`
            }
            if (buttonState === 1) {
                gameLogic(gameControl, gameBoard, command);
            }
            
        });
    });
}

function formAction () {
    const submitButton = document.getElementById("formButton");
    display.innerHTML = "Enter names of players"

    // get data from DOM
    const p1Input = document.getElementById("p1Name");
    const p2Input = document.getElementById("p2Name");

    submitButton.addEventListener("click", (event) => {
        event.preventDefault();
        display.innerHTML = "Use start button to begin!"

        gameControl.player1.name = p1Input.value;
        gameControl.player2.name = p2Input.value;

        // reset fields
        p1Input.value = "";
        p2Input.value = "";

        // populate display
        display.innerText = `Player 1: ${gameControl.player1.name} Player 2: ${gameControl.player2.name}`;
    })
}


formAction()
gameStart(gameControl, gameBoard)