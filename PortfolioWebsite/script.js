function showSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'flex';
}

function hideSidebar(){
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'none';

}
// Select the content area you want to blur
const homeContent = document.querySelector('.home-content');

window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY; // Get current scroll position
    const blurThreshold = 90; // Adjust this threshold as needed

    // Apply blur if the scroll is past the threshold
    if (scrollPosition > blurThreshold) {
        homeContent.classList.add('blur-content');
    } else {
        homeContent.classList.remove('blur-content');
    }
});
