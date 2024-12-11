// Initial goal state
let currentProgress = 0;
const maxGoal = 500; // Max membership goal
const goalText = document.getElementById('goal-text');
const progressBar = document.getElementById('progress');

// Function to update the progress bar
function updateProgress() {
    // Calculate the progress percentage
    let progressPercent = (currentProgress / maxGoal) * 100;

    // Update the progress bar width and text
    progressBar.style.width = progressPercent + '%';
    goalText.textContent = `${currentProgress} / ${maxGoal}`;
}

// Simulate progress updates (this can be replaced with actual dynamic data)
setInterval(() => {
    if (currentProgress < maxGoal) {
        currentProgress++;
        updateProgress();
    }
}, 1000); // Update every 1 second (simulating goal updates)
