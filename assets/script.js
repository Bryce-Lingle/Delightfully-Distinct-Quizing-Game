var body = document.querySelector('body')
var startButton = document.getElementById('start-game-button')
var onStart= document.getElementById('description')
var question= document.getElementById('question')
var answerButtons = document.getElementById('answer-buttons')
var nextQuestionButton = document.getElementById('next-question-button')
var timerDisplay = document.getElementById('timer-display')
var timer = 90;
var timerContainer = document.getElementById('timer-container');
var youLose = document.getElementById('you-lose-container')
var currentQuestionIndex= 0
var currentSelectedAnswer =''
var correctAnswers=0
var scoreCard= document.getElementById('correctAnswerScore')
var scoreBox= document.getElementById('final-scorebox-container')
var gameOver =false;
var container = document.getElementById('container')
var yourScoreIs = document.getElementById('yourScoreIs')
var initialsInput = document.getElementById('initials');
var saveButton = document.getElementById('saveScoreButton')
var highScoresList = document.getElementById('highScoresList')
var initialsGroup = document.getElementById('initials-group')
var buttonSeeHighScores = document.getElementById('see-highscores')

var nextButton = document.getElementById('next-question-button')

startButton.addEventListener('click', startQuiz)

//My function for the quiz starting and the elements that will be shown or not
function startQuiz(){
        console.log("The game is started");
        startButton.classList.add('hide');
        onStart.classList.add('hide');
        question.classList.remove('hide');
        answerButtons.classList.remove('hide');
        nextQuestionButton.classList.remove('hide')
        scoreCard.classList.remove('hide')
        scoreCard.textContent=correctAnswers
        scoreBox.classList.remove('hide')
        scoreBox.classList.add('hide')
        nextQuestion()
        scoreCard.textContent = "Your score = " + correctAnswers;
        buttonSeeHighScores.classList.add('hide')
        
      
    renderTimerToBrowser();
//This is the function for my timer to count down from 90 seconds
    function renderTimerToBrowser(){
        var timerDisplay = document.getElementById('timer-display');
        timerContainer.classList.remove('hide');
//Code for timer box 
        timerDisplay.textContent="Time Left: " + timer;
//Code for scorecard
        scoreCard.textContent = "Your score =  "
        scoreCard.textContent = "Your score = " + correctAnswers;
           var interval = setInterval(function() {

                timer --;
                scoreCard.textContent = "Your score = " + correctAnswers;
                if (timer <= 0 || currentQuestionIndex>=questions.length) {
                    clearInterval(interval);
                    container.classList.add('hide');
                    scoreBox.classList.remove('hide');
                    yourScoreIs.textContent = 'Your Score Is ' + correctAnswers;
                }
               
                timerDisplay.textContent='Time Left: ' + timer;
            }, 1000);
            } 
}

//this function call the next question in the list
function nextQuestion(){
    if(currentQuestionIndex>=questions.length){
        container.classList.add('hide');
        scoreBox.classList.remove('hide');
        yourScoreIs.textContent = 'Your Score Is ' + correctAnswers;
    } else{
        question.textContent=questions[currentQuestionIndex].question;

        for(var i = 0; i<questions[currentQuestionIndex].answers.length; i++){
          var choice= document.createElement('button')
          choice.classList.add('answer')
          choice.classList.add('btn')
          choice.textContent=questions[currentQuestionIndex].answers[i]
          answerButtons.appendChild(choice)
        }
    }
}

//function for subtracting time
function subtractTime(){
    var timeToSubtract = 5;
    timer -= timeToSubtract;
}


//function for saving the highscores that you input 
function saveHighScore(event){
    event.preventDefault()
    var initials = initialsInput.value
    var highScores = getHighScores()
    var currentScore = {
        initials: initials, 
        score: correctAnswers
    }
    highScores.push(currentScore)
    localStorage.setItem('highScores', JSON.stringify(highScores)) 
    displayHighScores()
    initialsGroup.classList.add('hide')
    saveButton.classList.add('hide')
}

//function for getting all the high scores from local storage
function getHighScores(){
    var json = localStorage.getItem('highScores');
    if(json !== null) {
        var highScores = JSON.parse(json);

        return highScores
    } else {
        return [];
    }
}


// function for displaying the new score that is put into the list
function displayHighScores(){
    var highScores = getHighScores()
    for(var i=0; i<highScores.length; i++){
        var score = document.createElement('li')
        score.textContent = 'name: ' + highScores[i].initials + ' score: ' + highScores[i].score
        highScoresList.appendChild(score)
    }
}

//cuntion for when you press the see high scres button, it will hide eerything and show the scorebox with the most up to date high scores
function seeHighScores(){
    container.classList.add('hide');
    scoreBox.classList.remove('hide');
    initialsGroup.classList.add('hide')
    saveButton.classList.add('hide');

    displayHighScores()
}


//list of questions for the quiz
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

//eventlistener for when you click an answer before you press the next button
answerButtons.addEventListener('click', function(event){
    var buttonClicked= event.target
    currentSelectedAnswer=buttonClicked.textContent
})

// event listener for when you press the next button
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

//event listener for when you press the save button
saveButton.addEventListener('click',saveHighScore)

// event listener for when you press the see highscore button
buttonSeeHighScores.addEventListener('click', seeHighScores)



