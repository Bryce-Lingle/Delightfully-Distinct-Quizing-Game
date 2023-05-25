//What do I need? 
//function for starting
//function for selecting the answer
//fucnction for next question
//function for timer
//function for cards to randomize on browser load

var startButton = document.getElementById('start-game-button')
var onStart= document.getElementById('description')
var questions= document.getElementById('question')
var answerButtons = document.getElementById('answer-buttons')
var nextQuestionButton = document.getElementById('next-question-button')
var timerDisplay = document.getElementById('timer-display')
var timer = 300;
var timerContainer = document.getElementById('timer-container');
startButton.addEventListener('click', startQuiz)

function startQuiz(){
        console.log("The game is started");
        startButton.classList.add('hide');
        onStart.classList.add('hide');
        questions.classList.remove('hide');
        answerButtons.classList.remove('hide');
        nextQuestionButton.classList.remove('hide')
        gameStarted= true;
      
    renderTimerToBrowser();
//This is the function for my timer to count down from 300 seconds
    function renderTimerToBrowser(){
        var timerDisplay = document.getElementById('timer-display');
        timerContainer.classList.remove('hide');

        timerDisplay.textContent="Time Left: " + timer;
    
           var interval = setInterval(function() {

                timer --;

                if (timer <= 0) {
                    clearInterval(interval);
                }

                timerDisplay.textContent="Time Left: " + timer;
        
            }, 1000);
            }
      
//I need to be presented with the first question

}

function selectAnser(){
//I need to select the answer and for the background color to stay
}

function nextQuestion(){
//I need the browser to randomly select the next questions with answer choices from a math.random 
}


