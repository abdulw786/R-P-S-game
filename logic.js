    var wins = 0;
    var losses = 0;
    var ties = 0;
    var computerChoices = ["r", "p", "s"]


    var gameDiv = document.getElementById("game");
    var playerDiv = document.getElementById("player");
    var computerDiv = document.getElementById("computer");
    var winsDiv = document.getElementById("wins");
    var lossesDiv = document.getElementById("losses");
    var tiesDiv = document.getElementById("ties");

    
    
    document.onkeyup = function (event) {
        // console.log(event)
        var player = event.key.toLowerCase();
        var computer = computerChoices[Math.floor(Math.random() * computerChoices.length)];
        console.log("player select " + player, " computer select " + computer)

        if (player === "r" || player === "p" || player === "s") {
            if ((player == "p" && computer == "r") ||
                (player == "r" && computer == "s") ||
                (player == "s" && computer == "p")) {
                wins++;
            }else if (player == computer){
                ties++;
            }else{
                losses++;
            }
        };

        gameDiv.textContent = "";
        playerDiv.textContent = "you select" +" "+  player;
        computerDiv.textContent = "computer select" +" "+  computer;
        winsDiv.textContent = "wins" +" "+  wins;
        lossesDiv.textContent = "losses" +" "+  losses;
        tiesDiv.textContent = "ties" +" "+  ties;
    };
