const panels = document.querySelectorAll('.panel'); // Returns a NodeList of all the panels
function toggleOpen() {
    this.classList.toggle('open');
}
function toggleActive(e) {
    if (e.propertyName.includes('flex')) {
        this.classList.toggle('open-active');
    }
}
panels.forEach(panel => panel.addEventListener('click', toggleOpen))
panels.forEach(panel => panel.addEventListener('transitionend', toggleActive))