// Sets up an object with properties for wins, losses, score, random number, and each button/crystal. The entire game will be contained within this object.

    var wins = 0
    var losses = 0
    var score = 0
    var randomNumber = Math.floor(Math.random() * 101) +19
    var buttonOne = Math.floor(Math.random() * 11) +1
    var buttonTwo = Math.floor(Math.random() * 11) +1
    var buttonThree = Math.floor(Math.random() * 11) +1
    var buttonFour = Math.floor(Math.random() * 11) +1



    //resets the game
    function reset(){
        randomNumber = Math.floor(Math.random()*101+19)
        console.log(randomNumber)
        $("#randomNumber").text(randomNumber)
        buttonOne= Math.floor(Math.random()*11+1)
        buttonTwo= Math.floor(Math.random()*11+1)
        buttonThree= Math.floor(Math.random()*11+1)
        buttonFour= Math.floor(Math.random()*11+1)
        score= 0
        $("#score").text(score)
    } 


    // Function for winning
    function youWin() {
        wins++
        reset()
        $("#winsLosses").html("You win!<br>Wins: " + wins + "<br>Losses: " +losses) //prints wins and losses to #score dif if you win
       
    }



    //function for losing
    function youLose() {
        losses++
        $("#winsLosses").html("You lose!<br>Wins: " + wins + "<br>Losses: " + losses) // prints wins and losses to #score div if you lose
        reset()
    }


    
    // // prints random number to #randomNumber DIV
    $( document ).ready()
    $("#randomNumber").html(randomNumber) 




// Button One
$("#buttonOne").click(function() {
    score = score + buttonOne // adds value to score
    $("#score").html("Your score is: " + score) //prints new value in scorebox
    
    // if statements for winning and losing
    if (score == randomNumber) {
        youWin()
    }

    if (score > randomNumber) {
        youLose()
    }

    
})

// Button Two
$("#buttonTwo").click(function() {
    score = score + buttonTwo
    $("#score").html("Your score is: " + score)

    randomNumber = randomNumber

    // if statements for winning and losing
    if (score == randomNumber) {
        youWin()
    }

    if (score > randomNumber) {
        youLose()
    }


})

// Button Three
$("#buttonThree").click(function() {
    score = score + buttonThree
    $("#score").html("Your score is: " + score)

    //if statements for winning and losing
    if (score == randomNumber) {
        youWin()
    }

    if (score > randomNumber) {
        youLose()
    }

    
})

// Button Four
$("#buttonFour").click(function() {
    score = score + buttonFour
    $("#score").html("Your score is: " + score)

    // if statements for winning and losing
    if (score == randomNumber) {
        youWin()
    }

    if (score > randomNumber) {
        youLose()
    }

   
})









