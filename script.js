let currentMembers = 100;  // Start with 100 members
let goalMembers = 500;      // Set the goal to 50 (or any other number)

// Function to update progress bar and text
function updateProgressBar(current, goal) {
    let progressElement = document.getElementById("progress");
    let goalTextElement = document.getElementById("goal-text");

    // Calculate percentage
    let percentage = (current / goal) * 100;

    // Update progress bar width
    progressElement.style.width = percentage + "%";

    // Update goal text
    goalTextElement.textContent = current + " / " + goal;
}

// Call the function initially to set the progress to the starting point
updateProgressBar(currentMembers, goalMembers);

// Example: Update after a new member joins
function addMember() {
    currentMembers++;
    updateProgressBar(currentMembers, goalMembers);
}

// This can be triggered by a button or other event, for example:
document.getElementById("addMemberButton").addEventListener("click", addMember);
