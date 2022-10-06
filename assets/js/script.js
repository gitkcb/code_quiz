var main = document.querySelector(".main");
var timeEl = document.querySelector(".time");
var button = document.querySelector(".button");
var welcome = document.querySelector(".welcome");
var first= document.querySelector(".first");
var second= document.querySelector(".second");
var third= document.querySelector(".third");
var fourth=document.querySelector('.fourth');
var fifth= document.querySelector('.fifth');
var highscore = document.querySelector('#highscore');
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
},1000)};

button.onclick = startTimer;

