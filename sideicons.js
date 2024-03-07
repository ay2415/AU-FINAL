document.addEventListener("DOMContentLoaded", function () {
    // Initial font size (you can set it to your desired value)
    let currentFontSize = 16;

    // Function to increase font size
    document.getElementById("increase-font").addEventListener("click", function () {
        currentFontSize += 2;
        updateFontSize();
    });

    // Function to reset font size
    document.getElementById("reset-font").addEventListener("click", function () {
        currentFontSize = 16; // Set it to your default font size
        updateFontSize();
    });

    // Function to decrease font size
    document.getElementById("decrease-font").addEventListener("click", function () {
        currentFontSize -= 2;
        updateFontSize();
    });

    // Function to update font size across the entire document
    function updateFontSize() {
        document.body.style.fontSize = currentFontSize + "px";
    }
});

document.addEventListener('DOMContentLoaded', function() {
    // Get the dark mode toggle button
    var darkModeToggle = document.getElementById('toggle-dark-mode');
  
    // Add a click event listener to toggle dark mode
    darkModeToggle.addEventListener('click', function() {
      // Toggle the dark mode class on the body
      document.body.classList.toggle('dark-mode');
    });
  });