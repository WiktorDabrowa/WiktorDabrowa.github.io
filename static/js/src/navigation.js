
function toggleMenu() {
    const menu = document.querySelector('ul.navigation--links');
    menu.classList.toggle('closed')
}

function listenOnBTN() {
    const btn = document.querySelector('button.burger-menu');
    btn.addEventListener('click', toggleMenu)
}

function addCloseMenuOnClick() {
    const anchors = document.querySelectorAll('.navigation--link');
    anchors.forEach((anchor) => {
        anchor.addEventListener('click', toggleMenu);
    })
}

export function initNavigation() {
    listenOnBTN();
    addCloseMenuOnClick();
} 