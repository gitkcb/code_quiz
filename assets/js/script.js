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
var enterhighscores = document.querySelector('.enterhighscores');
var finalscore = enterhighscores.querySelector('h2');
var alltime = document.querySelector('#alltime');
var incorrect= document.querySelectorAll('.incorrect');
var submit = document.querySelector('.submit');
var retbut= document.querySelector('.return');
var initials= document.querySelector('#textarea')


var secondsLeft = 70;
function startTimer(){
    welcome.style.display ="none";
    first.style.display ='block';
    timerInterval;
    
}
 
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
function myStopFunction() {
    clearInterval(timerInterval);

incorrect.onclick = timeLoss;

}
button.onclick = startTimer;
2
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
let score;
function nextQuestion4(){
    fifth.style.display="none";
    enterhighscores.style.display="block";
    let score = secondsLeft;
    myStopFunction();
    finalscore.innerHTML= "Your final score is: " + score;
    console.log(score);  
}
answer5.onclick = nextQuestion4;
function saveDetails(){
    var highDetails = {
 highInitials:initials.value.trim(),

    }
localStorage.setItem('highDetails', JSON.stringify(highDetails))
};
function renderDetails(){
    var lastGame = JSON.parse(localStorage.getItem("highDetails"));
    if (lastGame !== null) {
        document.getElementById("saved-initials").innerHTML = lastGame + '-' + score;
       
       

    }
        else{
            return;
        }
        console.log( lastGame + score);

}


function scoreboard(){
    enterhighscores.style.display='none';
    alltime.style.display='block';
    saveDetails();
    renderDetails();
    
    

}
submit.onclick = scoreboard;
function homescreen(){
  enterhighscores.style.display='none';
  main.style.display='block';
  
}
retbut.onclick = homescreen;





