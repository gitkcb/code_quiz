// Query selectors
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
var initials= document.querySelector('#textarea');
//selects incorrect answers
var firincorrect=first.querySelector('.incorrect');
var firincorrect1=first.querySelector('.incorrect1');
var firincorrect2=first.querySelector('.incorrect2');
var secincorrect= second.querySelector('.incorrect');
var secincorrect1=second.querySelector('.incorrect1');
var secincorrect2=second.querySelector('.incorrect2');
var thiincorrect= third.querySelector('.incorrect');
var thiincorrect1=third.querySelector('.incorrect1');
var thiincorrect2=third.querySelector('.incorrect2');
var fouincorrect= fourth.querySelector('.incorrect');
var fouincorrect1=fourth.querySelector('.incorrect1');
var fouincorrect2=fourth.querySelector('.incorrect2');
var fifincorrect= fifth.querySelector('.incorrect');
var fifincorrect1=fifth.querySelector('.incorrect1');
var fifincorrect2=fifth.querySelector('.incorrect2');
//return button 
var goToHighscore=document.querySelector('.left');

//Timer function 
var timerInterval;
var secondsLeft = 70;
function startTimer(){
    welcome.style.display ="none";
    first.style.display ='block'; 

    timerInterval = setInterval(function(){
    
    secondsLeft--;
    timeEl.textContent= "Time:" + secondsLeft;
    if (secondsLeft<1){
        clearInterval(timerInterval);
        main.innerHTML ='You ran out of time!';
}
    },1000)
    }
//Start quiz function
function startQuiz(){
    startTimer(); 

} 
// Time reduction function
function timeLoss(){
    secondsLeft -= 10;
}

button.addEventListener("click",startQuiz);
// Scroll through questions functions
function nextQuestion(){
    first.style.display="none";
    second.style.display="block";
 }
answer1.onclick = nextQuestion;
firincorrect.onclick= timeLoss;
firincorrect1.onclick= timeLoss;
firincorrect2.onclick= timeLoss;
function nextQuestion1(){
    second.style.display="none";
    third.style.display="block";
  
}
answer2.onclick = nextQuestion1;
secincorrect.onclick = timeLoss;
secincorrect1.onclick= timeLoss;
secincorrect2.onclick= timeLoss;
function nextQuestion2(){
    third.style.display="none";
    fourth.style.display="block";
}
answer3.onclick = nextQuestion2;
thiincorrect.onclick= timeLoss;
thiincorrect1.onclick= timeLoss;
thiincorrect2.onclick= timeLoss;
function nextQuestion3(){
    fourth.style.display="none";
    fifth.style.display="block";
   
}
answer4.onclick = nextQuestion3;
fouincorrect.onclick= timeLoss;
fouincorrect1.onclick= timeLoss;
fouincorrect2.onclick= timeLoss;
let score;
function nextQuestion4(){
    fifth.style.display="none";
    enterhighscores.style.display="block";
    let score = secondsLeft;
    finalscore.innerHTML= "Your final score is: " + score;
    console.log(score);  
}
//couldn't figure out how to incorporate a stoptimer function that worked
answer5.onclick = nextQuestion4;
fifincorrect.onclick= timeLoss;
fifincorrect1.onclick= timeLoss;
fifincorrect2.onclick= timeLoss;

// Adding initials to local storage function- couldn't store or render score or create a list of previous games
function saveDetails(){
    var highDetails = {
 highInitials:initials.value.trim() 
 
 };
localStorage.setItem('highDetails', JSON.stringify(highDetails));
renderDetails();
}

function renderDetails(){
    var lastGame = JSON.parse(localStorage.getItem("highDetails"));
    if (lastGame !== null) {
        document.getElementById("saved-initials").innerHTML = lastGame.highInitials;} 
       else{
            return;
        }
    }
submit.addEventListener("click", function(event){
    event.preventDefault();
    saveDetails();
    renderDetails();
    enterhighscores.style.display='none';
    alltime.style.display='block';

})
//function that brings you to main screen
function mainScreen(){
    alltime.style.display="none";
    welcome.style.display='block';
}
retbut.onclick = mainScreen;
function goTo(){
    alltime.style.display="block";
    welcome.style.display="none";
    first.style.display="none";
    second.style.display="none";
    third.style.display="none";
    fourth.style.display="none";
    fifth.style.display="none";

}
goToHighscore.onclick = goTo;







