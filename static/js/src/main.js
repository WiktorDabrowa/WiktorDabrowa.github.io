import { initNavigation } from './navigation.js';
import { initIntroduction } from './introduction.js';
import { initProjects } from './projects.js';
import { initAboutMe } from './about-me.js';
import { initContact } from './contact.js';

document.addEventListener('DOMContentLoaded', main);

function main() {
    initNavigation();
    initIntroduction();
    initProjects();
    initAboutMe();
    initContact();
}