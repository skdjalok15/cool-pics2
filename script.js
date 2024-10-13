// Menu toggle functionality
const menuButton = document.getElementById('menuButton');
const navItems = document.getElementById('navItems');

menuButton.addEventListener('click', () => {
    navItems.classList.toggle('hide');
});

// Handle window resize to display menu on large screens
function handleResize() {
    if (window.innerWidth > 1000) {
        navItems.classList.remove('hide');
    } else {
        navItems.classList.add('hide');
    }
}

window.addEventListener('resize', handleResize);
window.addEventListener('load', handleResize);

// Image viewer modal
function viewerTemplate(imagePath, altText) {
    return `
        <div class="viewer">
            <button class="close-viewer">X</button>
            <img src="${imagePath}" alt="${altText}">
        </div>
    `;
}

function viewHandler(event) {
    const clickedElement = event.target;
    if (clickedElement.tagName.toLowerCase() === 'img') {
        const src = clickedElement.src;
        const modalContainer = document.getElementById('modalContainer');
        modalContainer.innerHTML = viewerTemplate(src, clickedElement.alt);

        // Add close button functionality
        document.querySelector('.close-viewer').addEventListener('click', closeViewer);
    }
}

function closeViewer() {
    document.getElementById('modalContainer').innerHTML = '';
}

// Attach event listener to gallery section
const gallery = document.querySelector('.gallery');
gallery.addEventListener('click', viewHandler);
