//variables-defined

const lightSideButton = document.getElementsByClassName("light-button");

const darkSideButton = document.getElementsByClassName("dark-button");

const start = document.getElementById("start-container");

const quiz = document.getElementById("quiz");

const mainQuiz = document.getElementById("main-quiz");

const qImg = document.getElementById("quest-img");

const question = document.getElementById("question");

const counter = document.getElementById("counter");

const optionA = document.getElementById("a");
const optionB = document.getElementById("b");
const optionC = document.getElementById("c");
const optionD = document.getElementById("d");

const progress = document.getElementById("progress");

let lightSide;

$(lightSideButton).click(function () {
    debugger;
    if( lightSideButton!= true ) {
    lightSide= true;
    }
});
//light-side-quiz-questions

let lightQuestions = [
    {
        question: "What is the name of Princess Leia's home world?",
        imgSrc: "assets/images/aldy.jpg",
        optionA: "Naboo",
        optionB: "Tatooine",
        optionC: "Alderaan",
        optionD: "Kamino",
        correct: "C",
        icon: document.getElementById("icon1")
    },
    {
        question: "What was the name of this jedi?",
        imgSrc: "assets/images/kit.jpeg",
        optionA: "Kit Fisto",
        optionB: "Ki Adi Mundi",
        optionC: "Shaak Ti",
        optionD: "Plo Koon",
        correct: "A",
        icon: document.getElementById("icon2")
    },
    {
        question: "Which species stole the plans to the Death Star?",
        imgSrc: "assets/images/d-plans.png",
        optionA: "Gungan",
        optionB: "Gorax",
        optionC: "Jawa",
        optionD: "Bothan",
        correct: "D",
        icon: document.getElementById("icon3")
    },
    {
        question: "What odds does C-3P0 give Han for successfully navigating the asteroid field?",
        imgSrc: "assets/images/3po-mil.jpg",
        optionA: "370 to 1",
        optionB: "327,000 to 1",
        optionC: "3,720 to 1",
        optionD: "13,720 to 1",
        correct: "C",
        icon: document.getElementById("icon4")
    },
    {
        question: "Which clone gives the order to fire apon obi-wan on utapau?",
        imgSrc: "assets/images/obi-fall.png",
        optionA: "Captain Rex",
        optionB: "Commander Cody",
        optionC: "Commander Neyo",
        optionD: "Arc trooper Fives",
        correct: "B",
        icon: document.getElementById("icon5")
    },
    {
        question: "Where was Luke Skywalker originally headed to pick up power converters?",
        imgSrc: "assets/images/luke-pc.jpg",
        optionA: "Mos Eisley spaceport",
        optionB: "Tatooine Tavern",
        optionC: "Bestine Point",
        optionD: "Tosche Station",
        correct: "D",
        icon: document.getElementById("icon6")
    },
    {
        question: "What was Anakins Midi-chlorian count per cell?",
        imgSrc: "assets/images/medi.png",
        optionA: "Over 2,000,000",
        optionB: "Over 2,000",
        optionC: "Over 200,000",
        optionD: "Over 20,000",
        correct: "D",
        icon: document.getElementById("icon7")
    },
    {
        question: "Name this character?",
        imgSrc: "assets/images/unky.jpg",
        optionA: "Unkar Plutt",
        optionB: "Razur Froy",
        optionC: "Dobbu Scay",
        optionD: "Nien Nunb",
        correct: "A",
        icon: document.getElementById("icon8")
    },
    {
        question: "Who says the line 'Your focus determines your reality'?",
        imgSrc: "assets/images/luke-rey.jpg",
        optionA: "Obi-wan Kenobi",
        optionB: "Luke Skywalker",
        optionC: "Qui-Gon Jinn",
        optionD: "Mace Windu",
        correct: "C",
        icon: document.getElementById("icon9")
    },
    {
        question: "Finish this line... 'Why, you stuck-up, half-witted, scruffy-looking........!?'",
        imgSrc: "assets/images/leia.jpg",
        optionA: "bantha fodder",
        optionB: "nerf herder",
        optionC: "no-wood swindler",
        optionD: "buckethead",
        correct: "B",
        icon: document.getElementById("icon10")
    },
];

//dark-questions

let darkQuestions = [
    {
        question: "What was the name of Emporer Palpatines master?",
        imgSrc: "assets/images/plag.jpg",
        optionA: "Darth Plagueis",
        optionB: "Darth Plaggmis",
        optionC: "Darth Tyranus",
        optionD: "Darth Tiryan",
        correct: "A",
        icon: document.getElementById("icon1")
    },
    {
        question: "Name this character?",
        imgSrc: "assets/images/nute.jpeg",
        optionA: "Rune Haako",
        optionB: "Darth Bane",
        optionC: "Watto",
        optionD: "Nute Gunray",
        correct: "D",
        icon: document.getElementById("icon2")
    },
    {
        question: "What was Darth Sidious' first name?",
        imgSrc: "assets/images/palps.jpg",
        optionA: "Baaril",
        optionB: "Heeken",
        optionC: "Reeva",
        optionD: "Sheev",
        correct: "D",
        icon: document.getElementById("icon3")
    },
    {
        question: "Name this droid?",
        imgSrc: "assets/images/bb.jpg",
        optionA: "BB-8",
        optionB: "BB-7",
        optionC: "BB-9E",
        optionD: "BB-8E",
        correct: "C",
        icon: document.getElementById("icon4")
    },
    {
        question: "What species is General Grievous?",
        imgSrc: "assets/images/grevy.jpg",
        optionA: "Yuzzum",
        optionB: "Kaleesh",
        optionC: "Chagrian",
        optionD: "Devaronian",
        correct: "B",
        icon: document.getElementById("icon5")
    },
    {
        question: "Which of these is a sith homeworld?",
        imgSrc: "assets/images/sith-home.jpg",
        optionA: "Dantooine",
        optionB: "Dathomir",
        optionC: "Jedha",
        optionD: "Moraband",
        correct: "D",
        icon: document.getElementById("icon6")
    },
    {
        question: "Give the SITH name of this character?",
        imgSrc: "assets/images/count-d.jpeg",
        optionA: "Count Douku",
        optionB: "Darth Bane",
        optionC: "Darth Revan",
        optionD: "Darth Tyranus",
        correct: "D",
        icon: document.getElementById("icon7")
    },
    {
        question: "Out of these ships, which was the biggest?",
        imgSrc: "assets/images/star-d.jpeg",
        optionA: "Executor-class Star Destroyer",
        optionB: "Imperial-class Star Destroyer",
        optionC: "Harrower-class dreadnought",
        optionD: "AT-AT",
        correct: "A",
        icon: document.getElementById("icon8")
    },
    {
        question: "Who was the original commander of the Death Star?",
        imgSrc: "assets/images/d-plans.png",
        optionA: "Darth Vader",
        optionB: "Grand Admiral Thrawn",
        optionC: "Grand Moff Tarkin",
        optionD: "General Hux",
        correct: "C",
        icon: document.getElementById("icon9")
    },
    {
        question: "Finish this line... 'Be careful not to choke on........!?'",
        imgSrc: "assets/images/dv.jpg",
        optionA: "your ego",
        optionB: "your aspirations",
        optionC: "your overconfidence",
        optionD: "your dreams",
        correct: "B",
        icon: document.getElementById("icon10")
    },
];

//change-color-on-hover-of-start-button

$(document).ready(function(){
    $("#start").hover(function(){
        $(this).css("background-color", "#002395");
        $(this).css("color", "white");
    },
    function(){
        $(this).css("background-color", "#feda4a");
        $(this).css("color", "black");
    });
});

let lightLastQuestion = lightQuestions.length - 1;
let darkLastQuestion = darkQuestions.length - 1;
let currentQuestion = 0;

//light-side-question-structure

function lightQuestionStructure() {
    let q = lightQuestions[currentQuestion];
    qImg.innerHTML = "<img src=" + q.imgSrc + ">";
    question.innerHTML = "<p>" + q.question + "</p>";
    optionA.innerHTML = q.optionA;
    optionB.innerHTML = q.optionB;
    optionC.innerHTML = q.optionC;
    optionD.innerHTML = q.optionD;
}

//dark-side-question-structure

function darkQuestionStructure() {
    let q = darkQuestions[currentQuestion];
    qImg.innerHTML = "<img src=" + q.imgSrc + ">";
    question.innerHTML = "<p>" + q.question + "</p>";
    optionA.innerHTML = q.optionA;
    optionB.innerHTML = q.optionB;
    optionC.innerHTML = q.optionC;
    optionD.innerHTML = q.optionD;
}

//progress-structure-function

function lightProgressStructure() {
    let qIndex = currentQuestion;
    if (currentQuestion <= lightLastQuestion, currentQuestion++) {
        progress.innerHTML += "<div class='progr' id=" + qIndex + "><i class='fas fa-jedi'></i></div>";
    }
}

function darkProgressStructure() {
    let qIndex = currentQuestion;
    if (currentQuestion <= darkLastQuestion, currentQuestion++) {
        progress.innerHTML += "<div class='progr' id=" + qIndex + "><i class='fas fa-jedi'></i></div>";
    }
}

//light-questions-progress-icons-function

function lightCorrectAnswer() {
    let qIcon = lightQuestions[currentQuestion].icon;
    $(qIcon).css("color", "blue");
    console.log();
}

function lightWrongAnswer() {
    let qIcon = lightQuestions[currentQuestion].icon;
    $(qIcon).css("color", "red");
    console.log();
}

//dark-questions-progress-icons-function

function darkCorrectAnswer() {
    let qIcon = darkQuestions[currentQuestion].icon;
    $(qIcon).css("color", "blue");
    console.log();
}

function darkWrongAnswer() {
    let qIcon = darkQuestions[currentQuestion].icon;
    $(qIcon).css("color", "red");
    console.log();
}

//define-active-question-variable

let activeLastQuestion;
function activeQuestions(){
    if(lightSide === true) {activeLastQuestion = lightLastQuestion
    } else {activeLastQuestion = darkLastQuestion};
}

//time-limit-function

const questTimeLimit = 0;
let count = 20;
let countTimer = setInterval(1000);
let score = 0;
function counterStructure() {
    if (count >= questTimeLimit) {
        $(counter).text(count);
        count--;
    } else {
        count = 20;
        if(lightSide === true) {lightWrongAnswer()
        } else {darkWrongAnswer();};
        if(currentQuestion < activeLastQuestion) {
            currentQuestion++;
            if(lightSide === true) {lightQuestionStructure()
            } else {darkQuestionStructure()};
        } else {
            clearInterval(countTimer);
            mainQuiz.remove();
            if(lightSide === true) {lightScoreStructure()
            } else {darkScoreStructure()};
        }
    } 
}

//light-side-check-answer-function

let activeQuestion;
function activeQuestions(){
    if(lightSide === true) {activeQuestion = lightQuestions
    } else {activeQuestion = darkQuestions};
}

function checkAnswer(answer) {
    if(activeQuestion[currentQuestion].correct == answer) {
        score++;
        correctAnswer();
        console.log("Correct!");
    } else {
        wrongAnswer();
        console.log("Wrong!");
    }
    if (currentQuestion < activeLastQuestion) {
        count = 20;
        currentQuestion++;
        if(lightSide === true) {lightQuestionStructure()
        } else {darkQuestionStructure()};
    } else {
        clearInterval(countTimer);
        mainQuiz.remove();
        if(lightSide === true) {lightScoreStructure()
        } else {darkScoreStructure()};
    }
}

//start-quiz-button-on-click-function

$(start).click(function() {
    $(start).css('display','none');
    countTimer = setInterval(counterStructure, 1000);
    debugger;
    if(lightSide === "true") {lightQuestionStructure()
    } else {darkQuestionStructure()};
    $(quiz).css('display','block');
    $(progress).css('display');
});

//score-structure-function

function lightScoreStructure() {
    let nextQuiz = document.getElementById("d-quiz");
    let lShare = document.getElementById("l-share");
    let scoreContainer = document.getElementById("score-container");
    let scorePercentage = score + "/10";
    if (score == 10) {var img = "assets/images/smart.jpg";
    } else if (score >= 9) {var img = "assets/images/good.jpg";
    } else if(score >= 7) {var img = "assets/images/mace.jpeg";
    } else if(score >= 5) {var img = "assets/images/average.jpeg";
    } else if(score >= 3) {var img = "assets/images/bad.jpeg";
    } else if(score >= 0) {var img = "assets/images/worst.jpg";}
    $(scoreContainer).css("display", "block");
    $(scoreContainer).html("<p>You are.....</p><img src=" + img + "><p>" + scorePercentage + "</p>");
    $(nextQuiz).css("display", "block");
    $(lShare).css("display", "block");
}

function darkScoreStructure() {
    let lightQuiz = document.getElementById("d-quiz");
    let dShare = document.getElementById("l-share");
    let scoreContainer = document.getElementById("score-container");
    let scorePercentage = score + "/10";
    if (score == 10) {var img = "assets/images/p-best.jpg";
    } else if (score >= 9) {var img = "assets/images/great.jpeg";
    } else if(score >= 7) {var img = "assets/images/count-d.jpeg";
    } else if(score >= 5) {var img = "assets/images/average.jpg";
    } else if(score >= 3) {var img = "assets/images/badish.jpg";
    } else if(score >= 0) {var img = "assets/images/b-droid.jpg";}
    $(scoreContainer).css("display", "block");
    $(scoreContainer).html("<p>You are.....</p><img src=" + img + "><p>" + scorePercentage + "</p>");
    $(lightQuiz).css("display", "block");
    $(dShare).css("display", "block");
}

//hover-over-answers-color-change-function

$(document).ready(function(){
    if ( $(window).width() > 1000) {
    $("#a").hover(function(){
        $(this).css("background-color", "#feda4a");
        $(this).css("color", "#000000");
    },
    function(){
        $(this).css("background-color", "transparent");
        $(this).css("color", "#feda4a");
    });
}
});
$(document).ready(function(){
    if ( $(window).width() > 1000) {
    $("#b").hover(function(){
        $(this).css("background-color", "#feda4a");
        $(this).css("color", "#000000");
    },
    function(){
        $(this).css("background-color", "transparent");
        $(this).css("color", "#feda4a");
    });
}
});
$(document).ready(function(){
    if ( $(window).width() > 1000) {
    $("#c").hover(function(){
        $(this).css("background-color", "#feda4a");
        $(this).css("color", "#000000");
    },
    function(){
        $(this).css("background-color", "transparent");
        $(this).css("color", "#feda4a");
    });
}
});
$(document).ready(function(){
    if ( $(window).width() > 1000) {
    $("#d").hover(function(){
        $(this).css("background-color", "#feda4a");
        $(this).css("color", "#000000");
    },
    function(){
        $(this).css("background-color", "transparent");
        $(this).css("color", "#feda4a");
    });
}
});

//make-answers-vertical-function-smaller-screens

function resize() {
    if ( $(window).width() < 1000) {     
    $(".row").removeClass("flex");
    }
}
$(window).on("resize", resize);
resize();