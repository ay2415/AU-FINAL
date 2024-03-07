//dropdown
document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.getElementById('toggleButton');
    const navbar = document.querySelector('nav');
    const dropdownButton = document.getElementById('dropdown-button');
    const dropdownContent = document.getElementById('dropdown-content');
  
    // Function to toggle between horizontal and vertical layout
    toggleButton.addEventListener('click', function() {
        navbar.classList.toggle('vertical');
        toggleButton.classList.toggle('horizontal');
    });
  
    // Function to toggle dropdown content visibility
    dropdownButton.addEventListener('click', function() {
        dropdownContent.classList.toggle('show');
    });
  });

  var dropdownMenu = [].slice.call(document.querySelectorAll('.dropdown-toggle'));
    if (dropdownMenu.length > 0) {
        dropdownMenu.forEach(function (dropdownToggleEl) {
            dropdownToggleEl.addEventListener('click', function (e) {
                var parentDropdown = dropdownToggleEl.closest('.dropdown');
                if (!parentDropdown.classList.contains('show')) {
                    var dropdowns = [].slice.call(document.querySelectorAll('.dropdown'));
                    dropdowns.forEach(function (dropdownEl) {
                        dropdownEl.classList.remove('show');
                    });
                }
                parentDropdown.classList.toggle('show');
                e.preventDefault();
                e.stopPropagation();
            });
        });
    }

    // Close dropdowns when clicking outside
    window.addEventListener('click', function (e) {
        var dropdowns = [].slice.call(document.querySelectorAll('.dropdown'));
        dropdowns.forEach(function (dropdownEl) {
            if (!dropdownEl.contains(e.target)) {
                dropdownEl.classList.remove('show');
            }
        });
    });
    document.addEventListener("DOMContentLoaded", function () {
        var navbarToggler = document.querySelector(".navbar-toggler");
        var navbarCollapse = document.querySelector("#navbarSupportedContent");

        navbarToggler.addEventListener("click", function () {
            if (navbarCollapse.classList.contains("show")) {
                navbarCollapse.classList.remove("show");
            } else {
                navbarCollapse.classList.add("show");
            }
        });
    });


  // DarkMode

  document.addEventListener('DOMContentLoaded', function() {
    // Get the dark mode toggle button
    var darkModeToggle = document.getElementById('toggle-dark-mode');
  
    // Add a click event listener to toggle dark mode
    darkModeToggle.addEventListener('click', function() {
      // Toggle the dark mode class on the body
      document.body.classList.toggle('dark-mode');
    });
  });

  //Font Size

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


//////Tamil Conversion

function googleTranslateElementInit() {
    new google.translate.TranslateElement({ pageLanguage: 'en', includedLanguages: 'en,ta', layout: google.translate.TranslateElement.InlineLayout.HORIZONTAL }, 'google_translate_element');
}

document.getElementById('decrease-font').addEventListener('click', function () {
    // Trigger Google Translate dialog
    var googleTranslateElement = document.getElementById('google_translate_element');
    if (googleTranslateElement) {
        googleTranslateElement.click();
    }
});