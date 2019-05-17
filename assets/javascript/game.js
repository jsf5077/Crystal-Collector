

        //WINS TALLY
        var wins = 0;
        $("#wins").text("Wins: "+wins);

        //LOSSES TALLY
        var losses = 0;
        $("#losses").text("Losses: "+losses);

        //BOX CONTAINING NUMBER POPULATED BY USER PICKS
        var userNum = 0;
        console.log("Your Number: "+userNum); 

        //DECLARE A VARIABLE FOR THE COMPUTER NUMBER
        var compNum = 0;

        //RANDOM NUMBER ASSIGNED TO BUTTON 1
        var butt1 = Math.floor(Math.random() * 12) +1;

        //RANDOM NUMBER ASSIGNED TO BUTTON 2
        var butt2 = Math.floor(Math.random() * 12) +1;

        //RANDOM NUMBER ASSIGNED TO BUTTON 3
        var butt3 = Math.floor(Math.random() * 12) +1;

        //RANDOM NUMBER ASSIGNED TO BUTTON 4
        var butt4 = Math.floor(Math.random() * 12) +1;

        function gameStart() {

            // INITIALIZE/RESET THE USER NUMBER TO ZERO
            userNum = 0;
            $("#user-total").text("Your Number: "+userNum)

            //RANDOM NUMBER REASSIGNED TO BUTTON 1
            butt1 = Math.floor(Math.random() * 12) +1;

            //RANDOM NUMBER REASSIGNED TO BUTTON 2
            butt2 = Math.floor(Math.random() * 12) +1;

            //RANDOM NUMBER REASSIGNED TO BUTTON 3
            butt3 = Math.floor(Math.random() * 12) +1;

            //RANDOM NUMBER REASSIGNED TO BUTTON 4
            butt4 = Math.floor(Math.random() * 12) +1;

            //COMPUTER PICKS A RANDOM NUMBER BETWEEN 35 AND 100*
            compNum = Math.floor(Math.random() * 65) +35; 
            $("#game-total").text("Match Number: "+compNum);
        }

        //START THE GAME
        gameStart();

        //USER PRESSED BUTTON 1
        //RANDOM NUMBER ASSIGNED TO BUTTON IS ADDED TO USER TOTAL
        $("#button-1").on("click", function() {
            userNum = userNum + butt1;
            $("#user-total").text("Your Number: "+userNum);
            console.log("button one pressed");
            console.log("User total: "+userNum);
            checkWin();
        });

        //USER PRESSED BUTTON 2
        //RANDOM NUMBER ASSIGNED TO BUTTON IS ADDED TO USER TOTAL
        $("#button-2").on("click", function() {
            userNum = userNum + butt2;
            $("#user-total").text("Your Number: "+userNum);
            console.log("button one pressed");
            console.log("User total: "+userNum);
            checkWin();
        });

        //USER PRESSED BUTTON 3
        //RANDOM NUMBER ASSIGNED TO BUTTON IS ADDED TO USER TOTAL
        $("#button-3").on("click", function() {
            userNum = userNum + butt3;
            $("#user-total").text("Your Number: "+userNum);
            console.log("button one pressed");
            console.log("User total: "+userNum);
            checkWin();
        });

        //USER PRESSED BUTTON 4
        //RANDOM NUMBER ASSIGNED TO BUTTON IS ADDED TO USER TOTAL
        $("#button-4").on("click", function() {
            userNum = userNum + butt4;
            $("#user-total").text("Your Number: "+userNum);
            console.log("button one pressed");
            console.log("User total: "+userNum);
            checkWin();
        });
        //FUNCTION THAT CHECKS THE USERS WIN/LOSS STATUS
        function checkWin() {
            //IF TOTAL BY USER TOTAL === COMPUTER GUESS.
            if (userNum === compNum) {
                //ADD 1 TO WIN COLUMN AND RESET GAME
                wins++;
                console.log(wins);
                //PUSH WINS TO THE WINS HTML
                $("#wins").text("Wins: "+wins);
                //RESET GAME
                gameStart();
                
            // IF TOTAL BY USER > COMPUTER GUESS
            } else if (userNum > compNum) {
                //ADD 1 TO LOSS COLUMN AND RESET GAME
                losses++;
                console.log(losses);
                //PUSH LOSSES TO THE LOSS HTML
                $("#losses").text("Losses: "+losses);
                //RESET GAME
                gameStart();

            //OTHERWISE DO NOTHING
            } else if(userNum < compNum) {
                //DO NOTHING
                return;
            }
        }
        
        