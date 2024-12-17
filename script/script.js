const showButton = document.getElementById("showContent");
const hideButton = document.getElementById("hideContent");
const hiddenContent = document.getElementById("hiddenId");

showButton.addEventListener("click", () => {
    hiddenContent.classList.remove("hidden");
    hideButton.classList.remove("hidden");
    showButton.classList.add("hidden");
});

hideButton.addEventListener("click", () => {
    hiddenContent.classList.add("hidden");
    hideButton.classList.add("hidden");
    showButton.classList.remove("hidden");
});


const audio = document.getElementById("audio-player");
const playPauseButton = document.getElementById("play-pause-button");

playPauseButton.addEventListener("click", () => {
    if (audio.paused) {
        audio.play();
        audio.controls = false; // Hide controls
        playPauseButton.textContent = "Pause"; // Update button text
    } else {
        audio.pause();
        playPauseButton.textContent = "Play Me"; // Revert button text
    }
});