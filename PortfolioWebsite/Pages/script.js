// sidebar functionality
function showSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'flex';
}

function hideSidebar(){
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'none';

}


// Select the content area to blur
const homeContent = document.querySelector('.home-content');
const theHeadShot = document.querySelector('.headshot');
const home2ndSection = document.querySelector('.home-2ndSection');


window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY; // Get current scroll position
    const blurThreshold = 100; // Adjust threshold 
    const secblurThreshold = 360;

    // Apply blur if the scroll is past the threshold
    if (scrollPosition > blurThreshold) {
        homeContent.classList.add('blur-content');
        theHeadShot.classList.add('blur-content');
    } else {
        homeContent.classList.remove('blur-content');
        theHeadShot.classList.remove('blur-content');
    }

    if (scrollPosition > secblurThreshold){
        home2ndSection.classList.remove('blur-content');
    } else {
        home2ndSection.classList.add('blur-content');
    }
});
