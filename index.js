
let music = new Audio("music/bunnuma.mp3");

let playButton = document.getElementById("play");

playButton.addEventListener("click", function(){
    music.play();
    playButton.classList.add("animated");
    setTimeout(function(){
        playButton.classList.remove("animated");
    }, 300);
});

let pauseButton = document.getElementById("pause");

pauseButton.addEventListener("click", function(){
    music.pause();
});

let stopButton = document.getElementById("stop");

stopButton.addEventListener("click", function(){
    music.currentTime = 0;
    music.pause();
});

let stopRestart = document.getElementById("restart");

stopRestart.addEventListener("click", function(){
    music.currentTime = 0;
    music.pause();
    music.play();
});