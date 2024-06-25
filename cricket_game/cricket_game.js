var score = 0;
var wicket_count = 0;
var overs = 0;
var ball_count = 0;
var inningsCount = 1;
var innings1Score = 0;
var innings2Score = 0;

function scoreTrack(para, para1, para2) {
    var scoreCard = document.getElementById('scoreCard')
    scoreCard.textContent = "Score: " + para + " / " + para1 + " (" + para2 + ")";
}

function updateScore(message) {
    var scoresDiv = document.getElementById('scores_div');
    scoresDiv.textContent = message;
}

function innings(count) {
    var scoreCard = document.getElementById('scores_div')
    scoreCard.textContent = count;
    var btn = document.createElement("button");
    btn.textContent = "Start New Innings";
    btn.className = "btn px-10 py-5 my-2 bg-red-500 text-white";
    btn.onclick = function () {
        startNewInnings();
    };
    scoreCard.appendChild(btn);

    // Disable all buttons
    disableAllButtons();
}

function disableAllButtons() {
    var buttons = document.querySelectorAll('button.run-button');
    buttons.forEach(function(button) {
        button.disabled = true;
        button.classList.add('disabled');
    });
}

function enableAllButtons() {
    var buttons = document.querySelectorAll('button.run-button');
    buttons.forEach(function(button) {
        button.disabled = false;
        button.classList.remove('disabled');
    });
}

function startNewInnings() {
    if (inningsCount === 1) {
        innings1Score = score;
        inningsCount++;
    } else if (inningsCount === 2) {
        innings2Score = score;
        compareScores();
        return; // No need to start a new innings after the second innings
    }

    score = 0;
    wicket_count = 0;
    overs = 0;
    ball_count = 0;
    updateScore("New innings started");
    scoreTrack(score, wicket_count, overs + "." + ball_count);
    enableAllButtons();
}

function compareScores() {
    var resultMessage = '';
    if (innings1Score > innings2Score) {
        resultMessage = 'Innings 1 wins!';
    } else if (innings2Score > innings1Score) {
        resultMessage = 'Innings 2 wins!';
    } else {
        resultMessage = 'It\'s a tie!';
    }
    updateScore(resultMessage);
}

function checkSecondInningsScore() {
    if (inningsCount === 2 && score > innings1Score) {
        innings2Score = score;
        compareScores();
        disableAllButtons();
    }
}

function run_one() {
    if (wicket_count < 10) {
        console.log('clicked one');
        updateScore('You scored 1 run');
        score++;
        ball_count++;
        if (ball_count < 6) {
            scoreTrack(score, wicket_count, overs + "." + ball_count);
        } else {
            overs++;
            ball_count = 0;
            scoreTrack(score, wicket_count, overs);
        }
        checkSecondInningsScore();
    } else {
        scoreTrack(score, wicket_count, overs + "." + ball_count);
        innings('Innings has been ended.');
    }
}

function run_two() {
    if (wicket_count < 10) {
        console.log('clicked two');
        updateScore('You scored 2 runs');
        score += 2;
        ball_count++;
        if (ball_count < 6) {
            scoreTrack(score, wicket_count, overs + "." + ball_count);
        } else {
            overs++;
            ball_count = 0;
            scoreTrack(score, wicket_count, overs);
        }
        checkSecondInningsScore();
    } else {
        scoreTrack(score, wicket_count, overs + "." + ball_count);
        innings('Innings has been ended.');
    }
}

function run_three() {
    if (wicket_count < 10) {
        console.log('clicked three');
        updateScore('You scored 3 runs');
        score += 3;
        ball_count++;
        if (ball_count < 6) {
            scoreTrack(score, wicket_count, overs + "." + ball_count);
        } else {
            overs++;
            ball_count = 0;
            scoreTrack(score, wicket_count, overs);
        }
        checkSecondInningsScore();
    } else {
        scoreTrack(score, wicket_count, overs + "." + ball_count);
        innings('Innings has been ended.');
    }
}

function run_four() {
    if (wicket_count < 10) {
        console.log('clicked four');
        updateScore('You hit a 4!');
        score += 4;
        ball_count++;
        if (ball_count < 6) {
            scoreTrack(score, wicket_count, overs + "." + ball_count);
        } else {
            overs++;
            ball_count = 0;
            scoreTrack(score, wicket_count, overs);
        }
        checkSecondInningsScore();
    } else {
        scoreTrack(score, wicket_count, overs + "." + ball_count);
        innings('Innings has been ended.');
    }
}

function run_six() {
    if (wicket_count < 10) {
        console.log('clicked six');
        updateScore('You hit a 6!');
        score += 6;
        ball_count++;
        if (ball_count < 6) {
            scoreTrack(score, wicket_count, overs + "." + ball_count);
        } else {
            overs++;
            ball_count = 0;
            scoreTrack(score, wicket_count, overs);
        }
        checkSecondInningsScore();
    } else {
        scoreTrack(score, wicket_count, overs + "." + ball_count);
        innings('Innings has been ended.');
    }
}

function wicket() {
    if (wicket_count < 10) {
        updateScore('You are out! Wicket');
        wicket_count++;
        ball_count++;
        if (ball_count < 6) {
            scoreTrack(score, wicket_count, overs + "." + ball_count);
        } else {
            overs++;
            ball_count = 0;
            scoreTrack(score, wicket_count, overs);
        }
        checkSecondInningsScore();
    } else {
        scoreTrack(score, wicket_count, overs + "." + ball_count);
        innings('Innings has been ended.');
    }
}

function dot() {
    if (wicket_count < 10) {
        updateScore('Dot ball');
        console.log('clicked dot');
        ball_count++;
        if (ball_count < 6) {
            scoreTrack(score, wicket_count, overs + "." + ball_count);
        } else {
            overs++;
            ball_count = 0;
            scoreTrack(score, wicket_count, overs);
        }
        checkSecondInningsScore();
    } else {
        scoreTrack(score, wicket_count, overs + "." + ball_count);
        innings('Innings has been ended.');
    }
}

function wide() {
    if (wicket_count < 10) {
        updateScore('Wide ball');
        console.log('clicked wide');
        score++;
        if (ball_count < 6) {
            scoreTrack(score, wicket_count, overs + "." + ball_count);
        } else {
            overs++;
            ball_count = 0;
            scoreTrack(score, wicket_count, overs);
        }
        checkSecondInningsScore();
    } else {
        scoreTrack(score, wicket_count, overs + "." + ball_count);
        innings('Innings has been ended.');
    }
}

function no_ball() {
    if (wicket_count < 10) {
        updateScore('No-ball');
        console.log('clicked no-ball');
        score++;
        if (ball_count < 6) {
            scoreTrack(score, wicket_count, overs + "." + ball_count);
        } else {
            overs++;
            ball_count = 0;
            scoreTrack(score, wicket_count, overs);
        }
        checkSecondInningsScore();
    } else {
        scoreTrack(score, wicket_count, overs + "." + ball_count);
        innings('Innings has been ended.');
    }
}
