document.addEventListener('DOMContentLoaded', main)
const lorem = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis sapiente harum error? Enim delectus recusandae numquam dolores ratione quasi temporibus itaque fuga libero. Optio nihil reiciendis nostrum consectetur eum laborum architecto. Ipsam similique voluptatibus voluptatem sapiente delectus aperiam neque, corrupti aliquid, aut adipisci libero ratione nesciunt veritatis consectetur ullam cupiditate'
function open_hobby(i){
    // i represents index of hobbies array  (which hobby to display)
    const hobbies = document.querySelectorAll('.hobby')
    const active_hobby = hobbies[i]
    hobbies.forEach(hobby => {
        if (hobby === active_hobby) {
            hobby.classList.toggle('active')
        } else {
            hobby.classList.remove('active')
        }
    })
}
function copy_to_clipboard(){
    const e_mail = 'wiktor.dabrowa98@gmail.com'
    const message = document.querySelector('#page-6-message')
    navigator.clipboard.writeText(e_mail);
    message.style.opacity = 1;
    setTimeout(() => {message.style.opacity = 0}, 2000)
}
function animation_skill(element){
    // Animation on Skill Tab
    const skill = element.querySelector('.skill')
    const difference = element.querySelector('.skill-diff')
    setTimeout(() => {
        skill.style.flex = skill.dataset.level;
        skill.style.paddingLeft = '0.5rem';
        difference.style.flex = 6 - skill.dataset.level;
        console.log('Done')
    }, 2000)
    console.log(element)
}
function toggle_project(i){
    const projects = document.querySelectorAll('.project')
    const active_project = projects[i]
    console.log(active_project)
    projects.forEach(project => {
        if (project === active_project) {
            project.classList.toggle('active')
        } else {
            project.classList.remove('active')
            project.style.transform = 'scale(0.2)'
        }
    })

}
function render(element){
    // Starts animations after rotation if page wasn`t shown before
    // Hande page-2
    if (element.id === 'page-2'){
        // Start typing animations for descendants with class 'type'
        const texts_to_type = element.querySelectorAll('.type')
        texts_to_type.forEach(text => {
            setTimeout(() => {
                type(text.innerHTML, text.id, 25)
                text.style.opacity = 1
            },
            3000
            )
        })
        console.log(texts_to_type)
        const photo = element.querySelector('#page-2--photo')
        console.log(photo)
        setTimeout(() => {
            photo.style.opacity = 1
            photo.style.transform = 'translate(0)'
        },
        2000
        )
    }
    // Handle page-3
    if (element.id ==='page-3') {
        lines = element.querySelectorAll('.line')
        console.log(lines)
        lines.forEach(line => {
            animation_skill(line)
        })
        for (i=0; i<lines.length; i++) {
            animation_skill(lines[i])
        }
    }
    // Handle page-4
    if (element.id === 'page-4') {
        const projects = element.querySelectorAll('.project')
        for (let i=0; i<projects.length; i++) {
            projects[i].style.animation = `slide 1s forwards ${ 1.5 + i*0.2}s`;
            console.log(i)
            projects[i].addEventListener('click', () => toggle_project(i))
        }
        
    }
    // Handle page-5
    if (element.id ==='page-5') {
        const hobbies = element.querySelectorAll('.hobby')
        for (let i=0; i<hobbies.length; i++) {
            console.log(hobbies[i])
            setTimeout(() => {
                hobbies[i].style.opacity = '1'
            },
            2000 + i*500
            )
            setTimeout(() => {
                hobbies[i].style.transform = 'scale(1)'
                //hobbies[i].style.margin = '2rem'
            },
            4000)
            setTimeout(() => {
                hobbies[i].style.color = 'white'
            },
            6000
            )
            hobbies[i].addEventListener('click', () => open_hobby(i))
        }
    }

}
function rotate() {
    // Display active page
    const pages = document.querySelectorAll('.page')
    const page = pages[this.dataset.page - 1]
    pages.forEach(page => {
        if (page.classList.contains('rotated')) {
            page.classList.add('post-rotated')
            setTimeout(() => {page.classList.remove('post-rotated')},1500)
        }
        page.classList.remove('rotated')
    })
    page.classList.add('rotated')
    if (!page.hasAttribute('already_shown')) {
        setTimeout(render(page),1000)
        console.log(`${page.id} First Show`)
        page.setAttribute('already_shown', '')
    } else {
        console.log('This page was shown before')
    }
    // Disable Button for the active page
    const buttons = document.querySelectorAll('.button')
    buttons.forEach(button => {
        button.disabled = false
    })
    buttons[this.dataset.page - 1].disabled=true

}
function type(string, element_id, speed) {
    const tag = document.querySelector(`#${element_id}`)
    tag.style.display = 'block'
    for (let i = 0; i < string.length+1 ; i++) {
        setTimeout(() => {tag.innerHTML = string.slice(0,i)}, i*speed)
    }
}
function main() {
    // Add Event Listeners
    document.querySelector('#e-mail-anchor').addEventListener('click',copy_to_clipboard)
    const buttons = document.querySelectorAll('.button')
    buttons.forEach(element => {
        element.addEventListener('click',rotate)
    });
    
    // Animate landing page
    setTimeout(() => type('Hello, my name is Wiktor D??browa, glad to see you here!','page-1--name',100),4000)
    setTimeout(() => type(lorem, 'page-1--text', 25), 10000)
}
