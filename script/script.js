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

document.addEventListener("DOMContentLoaded", () => {
    const audio = document.getElementById("audio-player");
    const playPauseButton = document.getElementById("play-pause-button");

    playPauseButton.addEventListener("click", () => {
        if (audio.paused) {
            audio.play();
            audio.controls = false; // Hide controlls
            playPauseButton.textContent = "Pause"; // Update button text
        } else {
            audio.pause();
            playPauseButton.textContent = "Play Me"; // Revert button text
        }
    });
});