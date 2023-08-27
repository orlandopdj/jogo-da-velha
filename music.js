const audio = new Audio('music.mp3');

function playBackgroundMusic() {
    audio.play();
}

function pauseBackgroundMusic() {
    audio.pause();
}

const playButton = document.getElementById('playButton');
playButton.addEventListener('click', playBackgroundMusic);

const pauseButton = document.getElementById('pauseButton')
pauseButton.addEventListener('click', pauseBackgroundMusic)

