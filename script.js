//your JS code here. If required.
// Array of all sound names
const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong'];

// Get the buttons container
const buttonsDiv = document.getElementById('buttons');

// Function to stop all currently playing sounds
function stopSounds() {
    sounds.forEach(sound => {
        const audio = document.getElementById(sound);
        // Pause the sound
        audio.pause();
        // Reset playback to the beginning
        audio.currentTime = 0;
    });
}

// Attach event listeners to the buttons
buttonsDiv.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', () => {
        const soundName = button.innerText.toLowerCase();

        // If the stop button is pressed, stop all sounds
        if (soundName === 'stop') {
            stopSounds();
        } else {
            // 1. Stop any currently playing sound before starting a new one
            stopSounds(); 

            // 2. Play the selected sound
            const audio = document.getElementById(soundName);
            if (audio) {
                audio.play();
            } else {
                console.error(`Audio element for '${soundName}' not found.`);
            }
        }
    });
});