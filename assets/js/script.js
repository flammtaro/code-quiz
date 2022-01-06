var countdownTimer = document.getElementById("countdown-timer");
var finalScore = document.getElementById("final-score");
var quizTitleText = document.getElementById("quiz-title-text");
var quizBody = document.getElementById("quiz-body");

var playerInitials = document.getElementById("initials");

var question = document.getElementById("question");

var startButton = document.getElementById("start-button");

var buttonOne = document.getElementById("button1");
var buttonTwo = document.getElementById("button2");
var buttonThree = document.getElementById("button3");
var buttonFour = document.getElementById("button4");

var timer = 60;
var score = 0;
var wins = 0;
var losses = 0;

var highScores = [];

countdownTimer.textContent = "Countdown: " + timer;

// finalScore.textContent = "Score: " + score;

//Loads the startGame function as soon as the index.html page is loaded
window.onload = function()
{
    if(window.location.href.indexOf('game.html') > -1)
    {
        startGame();
    }
}
//startGame function that begins the timer, and sets the first question
function startGame()
{
    startTimer();
    console.log("Start Game");
    iterate("0");
}

//Function that runs the timer, and ultimately leads to the GameOver screen if it reaches 0
function startTimer()
{
    console.log("TIMER");
    var timeInterval = setInterval(function()
    {
        timer--;
        countdownTimer.textContent = "Countdown: " + timer;
        if(timer === 0)
        {
            window.location.assign("gameover.html");
        }
    },1000);
}

//Organized container for the questions
const Questions = [{
        id:0,
        q: "Which band made the hit song: 'Stairway to Heaven",
        a: [{text: "Rush", isCorrect:false},
        {text: "Led Zeppelin", isCorrect:true},
        {text: "The Beatles", isCorrect:false},
        {text: "Pink Floyd", isCorrect:false},
        ]
    },
    {
        id:1,
        q: "Who is the lead singer of Paramore?",
        a: [{text: "Selena Gomez", isCorrect:false},
        {text: "Adele", isCorrect: false},
        {text: "Taylor Swift", isCorrect: false},
        {text: "Hayley Williams", isCorrect: true},
        ]
    },
    {
        id:2,
        q: "What is the top selling album of all time?",
        a: [{text: "Thriller", isCorrect:true},
        {text: "Dark Side of the Moon", isCorrect: false},
        {text: "Hotel California", isCorrect: false},
        {text: "Abbey Road", isCorrect: false},
        ]
    },
    {
        id:3,
        q: "Who is the lead guitarist in Pink Floyd?",
        a: [{text: "Brian May", isCorrect:false},
        {text: "Pete Townshend", isCorrect: false},
        {text: "David Gilmore", isCorrect: true},
        {text: "Slash", isCorrect: false},
        ]
        },
    ]

function iterate(id){
    //Acquire the question from the HTML
     const question = document.getElementById("question");

    //Set the text for the questions
    question.innerText = Questions[id].q;

    //Acquire the options
    const op1 = document.getElementById('option1');
    const op2 = document.getElementById('option2');
    const op3 = document.getElementById('option3');
    const op4 = document.getElementById('option4');

    //Giving the different options text
    op1.innerText = Questions[id].a[0].text;
    op2.innerText = Questions[id].a[1].text;
    op3.innerText = Questions[id].a[2].text;
    op4.innerText = Questions[id].a[3].text;

    // Giving the questions the true or false value to the options
    op1.value = Questions[id].a[0].isCorrect;
    op2.value = Questions[id].a[1].isCorrect;
    op3.value = Questions[id].a[2].isCorrect;
    op4.value = Questions[id].a[3].isCorrect;

    var selected = "";

    // Show selection for op1
    op1.addEventListener("click", () => {
        console.log(op1.value);
        selected = op1.value;
        if(selected == "true")
        {
            score++;
            id = 1;
            iterate(id);
            console.log("score: " + score);
        }
        if(selected == "false")
        {
            timer -= 10;
        }
    })
    
    // Show selection for op2
    op2.addEventListener("click", () => {
        selected = op2.value;
        if(selected == "true")
        {
            if(id < 3)
            {
                score++;
                id = 2;
                iterate(id);
                console.log("score: " + score);
            }
        }
        if(selected == "false")
        {
            timer -= 10;
        }
    })
    
    // Show selection for op3
    op3.addEventListener("click", () => {
        selected = op3.value;
        if(selected == "true")
        {
            if(id < 3)
            {
                score++;
                id = 3;
                iterate(id);
                console.log("score: " + score);
            }
        }
        if(selected == "false")
        {
            timer -= 10;
        }
    })
    
    // Show selection for op4
    op4.addEventListener("click", () => {
        selected = op4.value;
        if(selected == "true")
        {
            score++;
            wins++;
            window.location.assign("winscreen.html");
            finalScore.textContent = "Score: " + score;
            
        }
        if(selected == "false")
        {
            timer -= 10;
        }
    })
//Beginning steps for the save functionality. Could not get it to work properly ultimately.
    function saveScore()
    {
        localStorage.setItem("playerInitials"), JSON.stringify(playerInitials);
        localStorage.setItem("finalScore"), JSON.stringify(finalScore);
    }
    window.onload = function()
{
    if(window.location.href.indexOf('highscore.html') > -1)
    {
        var storedScores = JSON.parse(localStorage.getItem("highScores"));
        if(storedScores !== null)
        {
            highScores = storedScores;
        }
    }
}

}
    
