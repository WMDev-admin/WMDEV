
function openNav() {
    const sidenav = document.getElementById("mySidenav");
    sidenav.style.width = "250px";
    document.querySelector('[data-action="open-nav"]').style.display = "none";
}

function closeNav() {
    const sidenav = document.getElementById("mySidenav");
    sidenav.style.width = "0";
    document.querySelector('[data-action="open-nav"]').style.display = "block";
}

function toggleTutorial() {
    const tutorialLinks = document.querySelector('.tutorial-links');
    const arrow = document.querySelector('.toggle-tutorial .arrow');
    
    // Toggle the 'active' class to expand/collapse the links
    if (tutorialLinks.classList.contains('active')) {
        tutorialLinks.classList.remove('active');
        arrow.innerHTML = '&#9662;';  // Down arrow
    } else {
        tutorialLinks.classList.add('active');
        arrow.innerHTML = '&#9652;';  // Up arrow
    }
}

document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('[data-action="open-nav"]').addEventListener('click', openNav);
    document.querySelector('[data-action="close-nav"]').addEventListener('click', closeNav);
    
    // Ensure the tutorial toggle link works properly
    const toggleTutorialButton = document.querySelector('[data-action="toggle-tutorial"]');
    if (toggleTutorialButton) {
        toggleTutorialButton.addEventListener('click', function (e) {
            e.preventDefault();  // Prevent the link from scrolling to top
            toggleTutorial();
        });
    }
});
