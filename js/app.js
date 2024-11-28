document.addEventListener('DOMContentLoaded', function () {
    const locationDropdown = document.getElementById('location-dropdown');
    const locationBarContainer = document.getElementById('locationBar-container');

    // Handle location dropdown change
    if (locationDropdown && locationBarContainer) {
        locationDropdown.addEventListener('change', function () {
            const selectedValue = locationDropdown.value;

            if (selectedValue === 'current') {
                locationBarContainer.innerHTML = 'You have selected your current location.';
            } else if (selectedValue === 'specific') {
                locationBarContainer.innerHTML = 'Please enter your specific location.';
            } else {
                locationBarContainer.innerHTML = ''; // Clear when no valid option is selected
            }
        });
    }

    // Login Modal functionality
    const loginBtn = document.getElementById('login-btn');
    const loginModal = document.getElementById('login-modal');
    const closeLoginModal = document.getElementById('close-modal');

    if (loginBtn && loginModal && closeLoginModal) {
        loginBtn.addEventListener('click', function () {
            loginModal.style.display = 'flex'; // Show login modal
        });

        closeLoginModal.addEventListener('click', function () {
            loginModal.style.display = 'none'; // Hide login modal
        });

        window.addEventListener('click', function (event) {
            if (event.target === loginModal) {
                loginModal.style.display = 'none'; // Close modal on outside click
            }
        });
    }

    // Sign Up Modal functionality
    const signupBtn = document.getElementById('signup-btn');
    const signupModal = document.getElementById('signup-modal');
    const closeSignupModal = document.getElementById('close-signup-modal');

    if (signupBtn && signupModal && closeSignupModal) {
        signupBtn.addEventListener('click', function () {
            signupModal.style.display = 'flex'; // Show signup modal
        });

        closeSignupModal.addEventListener('click', function () {
            signupModal.style.display = 'none'; // Hide signup modal
        });

        window.addEventListener('click', function (event) {
            if (event.target === signupModal) {
                signupModal.style.display = 'none'; // Close modal on outside click
            }
        });
    }

    // Redirect to Haryana page on image click
    const haryanaImage = document.getElementById('haryana-image');
    if (haryanaImage) {
        haryanaImage.addEventListener('click', function () {
            window.location.href = 'haryana/html/haryana.html';
        });
    }
    

    // Search bar functionality
    const searchBar = document.querySelector('.search-bar'); // Ensure your search bar has this class
    if (searchBar) {
        searchBar.addEventListener('keypress', function (event) {
            if (event.key === 'Enter') { // Check if Enter key is pressed
                const searchTerm = searchBar.value.trim().toLowerCase(); // Get search term
                let targetPage = '';

                // Map state names to their respective pages
                if (searchTerm === 'haryana') {
                    targetPage = 'html/haryana.html';
                }
                // Add more states as needed
                else {
                    alert('State not found!'); // Alert if state is not found
                    return; // Stop further execution
                }

                window.location.href = targetPage; // Redirect to the target page
            }
        });
    }
});
