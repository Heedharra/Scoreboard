let homeScore = document.getElementById("score1");
let guestScore = document.getElementById("score2");


let score1 = 0;
let score2 = 0;

function plusOneHome() {
    score1 = score1 + 1
    homeScore.innerHTML = score1;
}

function plusTwoHome() {
    score1 = score1 + 2
    homeScore.innerHTML = score1;
}

function plusThreeHome() {
    score1 = score1 + 3
    homeScore.innerHTML = score1;
}


function plusOneAway() {
    score2 = score2 + 1
    guestScore.innerHTML = score2;
}

function plusTwoAway() {
    score2 = score2 + 2
    guestScore.innerHTML = score2;
}

function plusThreeAway() {
    score2 = score2 + 3
    guestScore.innerHTML = score2;
}

function reset() {
    score1 = 0;
    score2 = 0;
    guestScore.innerHTML = score1;
    homeScore.innerHTML = score2;
}

if(score1 > score2) {
    alert("Hello!");
}
