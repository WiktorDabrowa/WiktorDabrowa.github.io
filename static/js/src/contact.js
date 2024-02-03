import anime from '../../../node_modules/animejs/lib/anime.es.js';
// Rotate arrow on screen size change

function animateElements() {
    const caption = document.querySelector('.contact .caption h2');
    const arrow = document.querySelectorAll('.contact .caption svg path');
    const linkCards = document.querySelectorAll('.contact-card');
    const arrowBody = arrow[0];
    const arrowHead = [arrow[1], arrow[2]];
    console.log('Reached the end')
    anime({
        targets: caption,
        opacity: [0,1],
        translateX: [-20, 0],
        easing:'easeOutQuad',
    });
    anime({
        targets: arrowBody,
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: 'easeOutQuad',
        duration: 1000,
        delay:1000
    });
    anime({
        targets: arrowHead,
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: 'easeInOutQuad',
        duration: 500,
        delay: 2000
    })
    anime({
        targets: linkCards,
        translateY: ['15rem', '8.1rem'],
        delay: anime.stagger(200, {start:2500}),
        duration:100,
    })
}

function slideInOnScrollContact() {
    let scrollY = window.scrollY;
    const maxScrollY = document.documentElement.scrollHeight - document.documentElement.clientHeight -10
    if (scrollY >= maxScrollY) {
        animateElements();
        document.removeEventListener('scroll', slideInOnScrollContact)
    }
}

function setInitValueOfSvg() {
    anime.set('.contact .caption svg path', {strokeDashoffset: anime.setDashoffset})
}

function addScrollListeners() {
    setInitValueOfSvg();
    document.addEventListener('scroll', slideInOnScrollContact);
}


export function initContact() {
    addScrollListeners();
}