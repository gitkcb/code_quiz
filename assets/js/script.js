var main = document.querySelector(".main");
var timeEl = document.querySelector(".time");
var button = document.querySelector(".button");
var welcome = document.querySelector(".welcome");
var first= document.querySelector(".first");
var answer1= document.querySelector('ul');
var second= document.querySelector(".second");
var answer2= second.querySelector('ul');
var third= document.querySelector(".third");
var answer3= third.querySelector('ul');
var fourth=document.querySelector('.fourth');
var answer4= fourth.querySelector('ul');
var fifth= document.querySelector('.fifth');
var answer5= fifth.querySelector('ul');
var highscores = document.querySelector('#highscores');
var incorrect= document.getElementsByClassName('.incorrect');

var secondsLeft = 70;
function startTimer(){
    welcome.style.display ="none";
    first.style.display ='block';
 
var timerInterval = setInterval(function(){
    secondsLeft--;
    timeEl.textContent= "Time:" + secondsLeft;
    if (secondsLeft===0){
        clearInterval(timerInterval);
        loss();

    }
function loss (){
    main.innerHTML ='You ran out of time!'
}
},1000)
function timeLoss(){
    secondsLeft -=10;
}
incorrect.onclick = timeLoss;
};

button.onclick = startTimer;
function nextQuestion(){
    first.style.display="none";
    second.style.display="block";
  }
answer1.onclick = nextQuestion;
function nextQuestion1(){
    second.style.display="none";
    third.style.display="block";
}
answer2.onclick = nextQuestion1;
function nextQuestion2(){
    third.style.display="none";
    fourth.style.display="block";
}
answer3.onclick = nextQuestion2;
function nextQuestion3(){
    fourth.style.display="none";
    fifth.style.display="block";
}
answer4.onclick = nextQuestion3;
function nextQuestion4(){
    fifth.style.display="none";
    highscores.style.display="block";
    
    let score = secondsLeft
    console.log(score);  
}
answer5.onclick = nextQuestion4



