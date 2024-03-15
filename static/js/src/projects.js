import anime from '../../../node_modules/animejs/lib/anime.es.js';
// TODO: 
// Project viewing or improve readmes on github and link through cards???

function slideInElements() {
    const text = document.querySelector('.text');
    const cards = document.querySelectorAll('.cards .project-card');
    const arrow = document.querySelectorAll('.pointer svg path')
    const arrowBody = arrow[0];
    const arrowHead = [arrow[1], arrow[2]];
    const arrowDelay = 1000
    anime({
        targets: text,
        opacity: [0,1],
        translateX: [20, 0],
        easing: 'easeOutQuad',
        duration: 1000,

    });
    for (let i = 0; i<=cards.length; i++) {
        anime({
            targets: cards[i],
            opacity: [0,1],
            left: [-500, 0],
            easing: 'easeOutQuad',
            duration: 200,
            delay:function(el, j) {return arrowDelay+1000 + (cards.length-i)*100}
        });
    }
    anime({
        targets: arrowBody,
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: 'easeOutQuad',
        duration: 1500,
        delay:arrowDelay
    });
    anime({
        targets: arrowHead,
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: 'easeInOutQuad',
        duration: 500,
        delay: arrowDelay + 1500
    })
}

function slideInOnScrollProjects() {
    let scrollY = window.scrollY;
    const threshold = document.querySelector('.projects').offsetTop;
    console.log(scrollY)
    if (scrollY >= threshold - 100) {
        slideInElements();
        document.removeEventListener('scroll', slideInOnScrollProjects)
    }
}

function addScrollListeners() {
    document.addEventListener('scroll', slideInOnScrollProjects)
}

export function initProjects() {
    addScrollListeners();
}