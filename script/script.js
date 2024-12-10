document.addEventListener("DOMContentLoaded", () => {
    const showButton = document.getElementById("showContent");
    const hideButton = document.getElementById("hideContent");
    const hiddenContent = document.getElementById("hiddenId");

    showButton.addEventListener("click", () => {
        hideButton.style.display = "inline-block";
        showButton.style.display = "none";
        hiddenContent.style.display = "block";
    });

    hideButton.addEventListener("click", () => {
        showButton.style.display = "inline-block";
        hideButton.style.display = "none";
        hiddenContent.style.display = "none";
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