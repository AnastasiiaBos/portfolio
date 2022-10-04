let tl = gsap.timeline();

if (document.body.clientWidth > 1000) {
    tl.from('.line', {
        height: '0%',
        duration: 1,
    })
} else {
    tl.from('.line', {
        width: '0%',
        duration: 1,
    })
}

tl.from('.menu', {
    opacity: 0,
    duration: 1.2,
}, '<')

.to('.greetingOne', {
    text: 'Hello.',
    duration: 1.5,
    yoyo:true,
    ease: 'power1.in'
})

.to('.greetingTwo', {
    text: `I'm Anastasiia Bosenko,`,
    duration: 2.5,
    yoyo:true,
    ease: 'power1.in'
})

.to('.greetingThree', {
    text: `frontend developer.`,
    duration: 2.5,
    yoyo: true,
    ease: 'power1.in'
})

.from('.about-me-description', {
    opacity: 0,
    duration: 1
})

.from('.myImage', {
    duration: 0.5,
    opacity: 0
})

let tl2 = gsap.timeline();

tl2.to( '.border-blue', { duration: .5, x: 15, y: -20, opacity: 1 } )
.to( '.border-yel', { duration: .5, x: 40, y: -40, opacity: 1 } )

tl.add(tl2)


const projectNameArray = document.querySelectorAll('.project-name');
const projectDescriptionArray = document.querySelectorAll('.project-description');
const imageBorderArray = document.querySelectorAll('.border-wrap');
const viewArray = document.querySelectorAll('.view');

const borderColors = ['#5073b8', '#1098ad', '#07b39b', '#6fba82','#f79533', '#f37055', '#ef4e7b', '#a166ab', '#5073b8', '#1098ad', '#07b39b', '#6fba82'];


for (let i = 0 ; i < projectNameArray.length; i++) {
    projectNameArray[i].addEventListener('click', () => {
        projectNameArray.forEach(projectName => {
            projectName.classList.remove('current');
        });

        projectDescriptionArray.forEach(projectDescription => {
            projectDescription.classList.add('visually-hidden');
        });

        projectNameArray[i].classList.add('current');
        projectDescriptionArray[i].classList.remove('visually-hidden');

        gsap.from(projectDescriptionArray[i], {
            duration: 1,
            opacity: 0,
            ease: 'power1.in'
        })

        gsap.from(imageBorderArray[i], {
            rotationY: 180,
            duration: 1,
            ease: 'power1.in'
        })

        imageBorderArray[i].style.background = `linear-gradient(60deg, ${borderColors[i]},  ${borderColors[i+1]})`;
        viewArray[i].style.textDecorationColor = `${borderColors[i]}`;
        projectNameArray[i].style.textDecorationColor = `${borderColors[i]}`;
    });
}

const menuArray = document.querySelectorAll('.menu li');

for (let i = 0; i < menuArray.length; i++) {
    menuArray[i].addEventListener('click', () => {
        menuArray.forEach(menuItem => {
            menuItem.classList.remove('active');
        });

        menuArray[i].classList.add('active');
    })
}

const links = document.querySelectorAll('.menu-link');
const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
  let index = sections.length;

  while(--index && window.scrollY + 80 < sections[index].offsetTop) {}
  
  links.forEach((link) => link.classList.remove('active'));
  links[index].classList.add('active');
});
