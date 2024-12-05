$(document).ready(function () {
    $("#showContent").click(function () {
        $("#hideContent").show();
        $("#showContent").hide();
        $("#hiddenId").show();
    });

    $("#hideContent").click(function () {
        $("#showContent").show();
        $("#hideContent").hide();
        $("#hiddenId").hide();
    });
});

const audio = document.querySelector("audio");

const playButton = document.getElementById("play-button");
const pauseButton = document.getElementById("pause-button");

playButton.addEventListener("click", () => {
    audio.play();
});

pauseButton.addEventListener("click", () => {
    audio.pause();
});