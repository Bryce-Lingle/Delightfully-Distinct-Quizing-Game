//What do I need? 
//function for starting
//function for selecting the answer
//fucnction for next question
//function for timer
//function for cards to randomize on browser load
var body = document.querySelector('body')
var startButton = document.getElementById('start-game-button')
var onStart= document.getElementById('description')
var question= document.getElementById('question')
var answerButtons = document.getElementById('answer-buttons')
var nextQuestionButton = document.getElementById('next-question-button')
var timerDisplay = document.getElementById('timer-display')
var timer = 300;
var timerContainer = document.getElementById('timer-container');
var youLose = document.getElementById('you-lose-container')
var currentQuestionIndex= 0
var currentSelectedAnswer =''
var correctAnswers=0
var scoreCard= document.getElementById('correctAnswerScore')
var scoreBox= document.getElementById('final-scorebox-container')



var nextButton = document.getElementById('next-question-button')

startButton.addEventListener('click', startQuiz)

function startQuiz(){
        console.log("The game is started");
        startButton.classList.add('hide');
        onStart.classList.add('hide');
        question.classList.remove('hide');
        answerButtons.classList.remove('hide');
        nextQuestionButton.classList.remove('hide')
        scoreCard.classList.remove('hide')
        gameStarted= true;
        scoreCard.textContent=correctAnswers
        scoreBox.classList.remove('hide')
        nextQuestion()
        
      
    renderTimerToBrowser();
//This is the function for my timer to count down from 300 seconds
    function renderTimerToBrowser(){
        var timerDisplay = document.getElementById('timer-display');
        timerContainer.classList.remove('hide');

        timerDisplay.textContent="Time Left: " + timer;
    
           var interval = setInterval(function() {

                timer --;

                if (timer <= 0 || currentQuestionIndex>=questions.length) {
                    clearInterval(interval);
                    body.innerHTML=''
                }
               
                
                timerDisplay.textContent='Time Left: ' + timer;
                
            }, 1000);
            } 


//I need to be presented with the first question
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
}

var questions = [
    {
        question: 'How do you comment a single line of code in JS?',
        answers: ['// comment', '/* comment */', '<!-- comment -->', '# comment'],
        correctAnswer: '// comment'
    },
    {
        question: 'How do you access the length of a string in JS?',
        answers: ['string.size', 'string.length', 'string.count', 'strong.length()'],
        correctAnswer: 'string.length'
    },
    {
        question: 'What does the NaN keyword represent in JS?',
        answers: ['Numbers are Null', 'Numbers are Negative', 'Not a Number', 'New array Name'],
        correctAnswer: 'Not a Number'
    },
    {
        question: 'Which method is used to add an element to the end of an array?',
        answers: ['push()', 'pop()', 'shift()', 'unshift()'],
        correctAnswer: 'push()'
    },
    {
        question: 'Which CSS property is used to change the text color of an element',
        answers: ['text-color', 'color', 'font-color', 'text-style'],
        correctAnswer: 'color'
    },
    {
        question: 'How do you include an external CSS file in an HTML document?',
        answers: ['<style src="style.css">', '<css src="style.css">', '<link rel="stylesheet" href="style.css">', '<script src="style.css">'],
        correctAnswer: '<link rel="stylesheet" href="style.css">'
    },
    {
        question: 'How do you change the background color of an element in CSS?',
        answers: ['background-color', 'background', 'color', 'bgcolor'],
        correctAnswer: 'background-color'
    },
    {
        question: 'Which CSS property is used to add space between the content and the border of an element?',
        answers: ['margin', 'padding', 'border-spacing', 'spacing'],
        correctAnswer: 'padding'
    },
    {
        question: 'How do you center an element horizontally in CSS?',
        answers: ['postition: center', 'text-align: center', 'float: center', 'margin: auto'],
        correctAnswer: 'margin: auto'
    },
    {
        question: 'How do you round the corners of a box in CSS?',
        answers: ['corner-curves:', 'border-left: rounded:', 'border-radius:', 'corners:'],
        correctAnswer: 'border-radius'
    },

  
]

answerButtons.addEventListener('click', function(event){
    var buttonClicked= event.target
    currentSelectedAnswer=buttonClicked.textContent
})

nextQuestionButton.addEventListener('click', function(event){
    if(currentSelectedAnswer===questions[currentQuestionIndex].correctAnswer){
     correctAnswers++
     scoreCard.textContent=correctAnswers
     currentQuestionIndex++
     answerButtons.innerHTML=''
     nextQuestion()
    }
    else{
    currentQuestionIndex++
    answerButtons.innerHTML=''
    subtractTime()
    nextQuestion()
    console.log("incorrect")
  
    } 
})

function subtractTime(){
    var timeToSubtract = 5;
    timer -= timeToSubtract;
}




