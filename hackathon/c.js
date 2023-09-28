const bird = document.getElementById("bird");
const pipe = document.getElementById("pipe");
const scoreCount = document.getElementById("score-count"); // Get the score display element

let birdTop = 200;
let birdVelocity = 0;
let gravity = 0.5;
let gameInterval;
let score = 0; 

function jump() {
    birdVelocity = -8;
}

function updateBird() {
    birdVelocity += gravity;
    birdTop += birdVelocity;
    bird.style.top = birdTop + "px";

    if (birdTop <= 0 || birdTop + bird.offsetHeight >= 600) {
        gameOver();
    }
}
function updatePipe() {
    const pipeLeft = parseInt(getComputedStyle(pipe).left);

    if (pipeLeft < -60) {
        pipe.style.left = "400px";
        score++; 
        scoreCount.textContent = score;
    } else {
        pipe.style.left = pipeLeft - 5 + "px";
    }
}

function gameOver() {
    clearInterval(gameInterval);
    alert("Game Over. Your Score: " + score);
    location.reload(); 
}

function checkCollision() {
    const birdRect = bird.getBoundingClientRect();
    const pipesRect = pipe.getBoundingClientRect();

    if (
        birdRect.right > pipesRect.left &&
        birdRect.left < pipesRect.right &&
        birdRect.bottom > pipesRect.top &&
        birdRect.top < pipesRect.bottom
    ) {
        gameOver();
    }
}

document.addEventListener("keydown", jump);

gameInterval = setInterval(function () {
    updateBird();
    updatePipe();
    checkCollision(); 
}, 30);
