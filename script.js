document.getElementById("addMoodButton").addEventListener("click", function () {
    const moodInput = document.getElementById("moodInput");
    const moodText = moodInput.value.trim();

    if (moodText) {
        const moodList = document.getElementById("moodList");

        // Create a new mood entry
        const moodEntry = document.createElement("div");
        moodEntry.className = "moodEntry";
        moodEntry.textContent = moodText;

        // Add the new mood entry to the list
        moodList.appendChild(moodEntry);

        // Clear the input
        moodInput.value = "";
    }
});