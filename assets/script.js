//What do I need? 
//function for starting
//function for selecting the answer
//fucnction for next question
//function for timer
//function for cards to randomize on browser load

var startButton = document.getElementById('start-game-button')
var onStart= document.getElementById('description')
var question= document.getElementById('question')
var answerButtons = document.getElementById('answer-buttons')
var nextQuestionButton = document.getElementById('next-question-button')
var timerDisplay = document.getElementById('timer-display')
var timer = 10;
var timerContainer = document.getElementById('timer-container');
var youLose = document.getElementById('you-lose-container')
var currentQuestionIndex= 0
var currentSelectedAnswer =''

var nextButton = document.getElementById('next-question-button')

startButton.addEventListener('click', startQuiz)

function startQuiz(){
        console.log("The game is started");
        startButton.classList.add('hide');
        onStart.classList.add('hide');
        question.classList.remove('hide');
        answerButtons.classList.remove('hide');
        nextQuestionButton.classList.remove('hide')
        gameStarted= true;
        nextQuestion()
        
      
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
                    youLose.classList.remove('hide');
                }
               

                timerDisplay.textContent='Time Left: ' + timer;
        
            }, 1000);
            }
      
//I need to be presented with the first question

}

function selectAnwser(){

//I need to select the answer and for the background color to stay
}

function nextQuestion(){
      question.textContent=questions[currentQuestionIndex].question;

      for(var i = 0; i<questions[currentQuestionIndex].answers.length; i++){
        var choice= document.createElement('button')
        choice.classList.add('answer')
        choice.classList.add('btn')
        choice.textContent=questions[currentQuestionIndex].answers[i]
        answerButtons.appendChild(choice)
      }
//I need the browser to randomly select the next questions with answer choices from a math.random 
}

//This is the question that is being shown after I press start
function showQuestion(question){
}



var questions = [
    {
        question: 'Who is the coolest person in our family?',
        answers: ['Bryce', 'Morgan', 'Nya', 'Winnie'],
        correctAnswer: 'Winnie'
    },

    {
        question: 'Who is the best dog in the world',
        answers: [
            { text: 'Nya', correct: true},
            { text: 'Morgan', correct: false}
        ]
    }
   
]



answerButtons.addEventListener('click', function(event){
    var buttonClicked= event.target
    currentSelectedAnswer=buttonClicked.textContent
    if(currentSelectedAnswer===questions[currentQuestionIndex].correctAnswer){
        console.log('correctAnswer')
    }
    else{
        console.log('incorrect answer')
    }
})

