
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

    // const player1 = createPlayer(prompt("Player 1 please enter your name"), "X")
    // const player2 = createPlayer(prompt("Player 2 please enter your name"), "O")

    let result = "";
    gameState = "Started"

    // work out who takes the first turn through rng
    const turn = Math.random() < 0.5 ? "Player 1" : "Player 2";

    return {gameState, player1, player2, turn, result}
})();


function gameLogic (gameControl, gameBoard) {

    // function that gets player action
    function action() {

        // const player1Turn = `${gameControl.player1.name}'s turn, type where you want to place your ${gameControl.player1.symbol}, e.g: "Top Middle"`;
        // const player2Turn = `${gameControl.player2.name}'s turn, type where you want to place your ${gameControl.player2.symbol}, e.g: "Top Middle"`;

        if (gameControl.turn === "Player 1") {
            // let command = prompt(player1Turn);

            return command.toLowerCase();
        }
             let command = prompt(player2Turn);
             return command.toLowerCase();
    };

    //function for switching player turns
    function turnSwitch () {
        if (gameControl.turn === "Player 1") {
            gameControl.turn = "Player 2";
            return;
        }
        gameControl.turn = "Player 1";
        return;
    }

    //switch statement for setting player actions
    let existingCheck = false;

    switch (action()) {
        case "top left":
            if (gameBoard.gameboard.topLeft !== "") {
                    alert("Spot already taken");
                    existingCheck= true;
                    break;
                }
            if (gameControl.turn === "Player 1") {
                gameBoard.gameboard.topLeft = gameControl.player1.symbol;
                console.log(gameBoard.gameboard.topLeft);
                turnSwitch();
                break;
            }
            gameBoard.gameboard.topLeft = gameControl.player2.symbol;
            console.log(gameBoard.gameboard.topLeft);
            turnSwitch();
            break;

        case "top middle":
            if (gameBoard.gameboard.topMiddle !== "") {
                    alert("Spot already taken");
                    existingCheck= true;
                    break;
            }
            if (gameControl.turn === "Player 1") {
                gameBoard.gameboard.topMiddle = gameControl.player1.symbol;
                console.log(gameBoard.gameboard.topMiddle);
                turnSwitch();
                break;
            }
           gameBoard.gameboard.topMiddle = gameControl.player2.symbol;
            console.log(gameBoard.gameboard.topMiddle);
            turnSwitch();
            break;
        
        case "top right":
            if (gameBoard.gameboard.topRight !== "") {
                    alert("Spot already taken");
                    existingCheck= true;
                    break;
            }
            if (gameControl.turn === "Player 1") {
                gameBoard.gameboard.topRight = gameControl.player1.symbol;
                console.log(gameBoard.gameboard.topRight);
                turnSwitch();
                break;
            }
            gameBoard.gameboard.topRight = gameControl.player2.symbol;
            console.log(gameBoard.gameboard.topRight);
            turnSwitch();
            break;

        case "middle left":
            if (gameBoard.gameboard.middleLeft !== "") {
                    alert("Spot already taken");
                    existingCheck= true;
                    break;
            }
            if (gameControl.turn === "Player 1") {
                gameBoard.gameboard.middleLeft = gameControl.player1.symbol;
                console.log(gameBoard.gameboard.middleLeft);
                turnSwitch();
                break;
            }
            gameBoard.gameboard.middleLeft = gameControl.player2.symbol;
            console.log(gameBoard.gameboard.middleLeft);
            turnSwitch();
            break;

        case "middle middle":
            if (gameBoard.gameboard.middleMiddle !== "") {
                    alert("Spot already taken");
                    existingCheck= true;
                    break;
            }
            if (gameControl.turn === "Player 1") {
                gameBoard.gameboard.middleMiddle = gameControl.player1.symbol;
                console.log(gameBoard.gameboard.middleMiddle);
                turnSwitch();
                break;
            }
            gameBoard.gameboard.middleMiddle = gameControl.player2.symbol;
            console.log(gameBoard.gameboard.middleMiddle);
            turnSwitch();
            break;
        
        case "middle right":
            if (gameBoard.gameboard.middleRight !== "") {
                    alert("Spot already taken");
                    existingCheck= true;
                    break;
            }
            if (gameControl.turn === "Player 1") {
                gameBoard.gameboard.middleRight = gameControl.player1.symbol;
                console.log(gameBoard.gameboard.middleRight);
                turnSwitch();
                break;
            }
            gameBoard.gameboard.middleRight = gameControl.player2.symbol;
            console.log(gameBoard.gameboard.middleRight);
            turnSwitch();
            break;

        case "bottom left":
            if (gameBoard.gameboard.bottomLeft !== "") {
                    alert("Spot already taken");
                    existingCheck= true;
                    break;
            }
            if (gameControl.turn === "Player 1") {
                gameBoard.gameboard.bottomLeft = gameControl.player1.symbol;
                console.log(gameBoard.gameboard.bottomLeft);
                turnSwitch();
                break;
            }
            gameBoard.gameboard.bottomLeft = gameControl.player2.symbol;
            console.log(gameBoard.gameboard.bottomLeft);
            turnSwitch();
            break;

        case "bottom middle":
            if (gameBoard.gameboard.bottomMiddle !== "") {
                    alert("Spot already taken");
                    existingCheck= true;
                    break;
            }
            if (gameControl.turn === "Player 1") {
                gameBoard.gameboard.bottomMiddle = gameControl.player1.symbol;
                console.log(gameBoard.gameboard.bottomMiddle);
                turnSwitch();
                break;
            }
            gameBoard.gameboard.bottomMiddle = gameControl.player2.symbol;
            console.log(gameBoard.gameboard.bottomMiddle);
            turnSwitch();
            break;
        
        case "bottom right":
            if (gameBoard.gameboard.bottomRight !== "") {
                    alert("Spot already taken");
                    existingCheck= true;
                    break;
            }
            if (gameControl.turn === "Player 1") {
                gameBoard.gameboard.bottomRight = gameControl.player1.symbol;
                console.log(gameBoard.gameboard.bottomRight);
                turnSwitch();
                break;
            }
            gameBoard.gameboard.bottomRight = gameControl.player2.symbol;
            console.log(gameBoard.gameboard.bottomRight);
            turnSwitch();
            break;
    }

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

    if (existingCheck === true) {
        let squareCheck = 0;
        for (square in gameBoard.gameboard) {
            if (square === "") {
                squareCheck ++;
            }
        }
        if (squareCheck === 0){
            gameControl.result = "Tie"
        }
    }

    winCheck();
    if (gameControl.result !== "") {
        if (gameControl.result === "Tie") {
            alert(`Game result is a Tie`);
            return;
        }
        alert(`Winner is ${gameControl.result}`);
        return;
    }
}

while (gameControl.result === "") {
        gameLogic(gameControl, gameBoard)
    }

