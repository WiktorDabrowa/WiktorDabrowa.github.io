import anime from '../../../node_modules/animejs/lib/anime.es.js';

function animateElements() {
    const aboutMe = document.querySelector('.about-me-card')
    const imageCard = document.querySelector('.image-card')
    anime({
        targets: aboutMe,
        opacity: [0,1],
        translateX: [-20, 0],
        easing: 'easeOutQuart'
    })
    anime({
        targets: imageCard,
        translateX: ['100vw',0],
        duration:2000,
        rotate: [10, 0],
        delay:1500,
        easing: 'easeOutQuart'
    })
}

function slideInOnScrollAboutMe() {
    let scrollY = window.scrollY;
    const threshold = document.querySelector('.about-me').offsetTop;
    if (scrollY >= threshold - 100) {
        animateElements();
        document.removeEventListener('scroll', slideInOnScrollAboutMe)
    }
}

function addScrollListeners() {
    document.addEventListener('scroll', slideInOnScrollAboutMe);
}

export function initAboutMe() {
    addScrollListeners();
}