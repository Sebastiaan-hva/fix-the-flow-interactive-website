// functie gebruikt jquery daar staat die $ voor.

// functie om het programma te tonen

$(document).ready(function () {
    $("#showContent").click(function () {
        $("#hideContent").show();
        $("#showContent").hide();
        $("#hiddenId").show();
    });

// functie om het programma te verstoppen

    $("#hideContent").click(function () {
        $("#showContent").show();
        $("#hideContent").hide();
        $("#hiddenId").hide();
    });
});


// functie gedefineerd
const audio = document.querySelector("audio");

// play & pause button
const playButton = document.getElementById("play-button");
const pauseButton = document.getElementById("pause-button");

// event listener voor click event om audio te starten
playButton.addEventListener("click", () => {
    audio.play();
});

// event listener voor click event om audio te stoppen
pauseButton.addEventListener("click", () => {
    audio.pause();
});