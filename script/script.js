const ham = document.querySelector('.ham');
const navbar = document.querySelector('.navbar-hide');
const closeMenu = document.querySelector('.change');

ham.addEventListener('click', () => {
  navbar.classList.add('navbar');
  navbar.classList.toggle('navbar-hide');
});

function openCloseMenu() {
  ham.classList.toggle('change');
}

ham.addEventListener('click', openCloseMenu);

const speakers = [
  {
    image: '../instructors/b1.jpg',
    imageAlt: 'Picture of Ben Parker',
    name: 'Ben Parker',
    position: 'Design Director at University of London',
    description:
      'Started in this field 10 years a good, wrote a book about website design patterns',
  },
  {
    image: '../instructors/g1.jpg',
    imageAlt: 'Picture of zoe Fernandez',
    name: 'Zoe Fernandez',
    position: 'Web Application Developer at Facebook',
    description:
      'Full stack web developer since 2001, computer science instructor at university of London',
  },
  {
    image: '../instructors/g2.jpg',
    imageAlt: 'Picture of Edward Cisneros',
    name: 'Edward Cisneros',
    position: 'SEO Specialist at Google',
    description:
      'Over 25 years of experience  in dealing with big industry companies, speacialist in advertising',
    show: 'no',
  },
  {
    image: '../instructors/b2.jpg',
    imageAlt: 'Picture of May Gauthier',
    name: 'May Gauthier',
    position: 'Interaction Designer at Lenovo',
    description: 'A super talanted desinger with huge experience in web design',
    show: 'no',
  },
  {
    image: '../instructors/b3.jpg',
    imageAlt: 'Picture of Vince Veras',
    name: 'Vince Veras',
    position: 'Visual Designer at Microverse',
    description:
      'Best design winner of Paris university for 5 years, specialist in web design',
    show: 'no',
  },
  {
    image: '../instructors/g3.jpg',
    imageAlt: 'Picture of Chris Powel',
    name: 'Chris Powel',
    position: 'JavaScript Engineer at Apple',
    description:
      'A pro developer for more than 20 years, Chris has great expirience in delivering new info to beginners',
    show: 'no',
  },
];

const speakerSection = document.querySelector('.instructors');
if (speakerSection) {
  speakerSection.innerHTML = speakers
    .map(
      (speaker) => `
      <article class="instructor ${speaker.show}">
      <img src="${speaker.image}" alt="${speaker.imageAlt}" />
      <div>
        <h5>${speaker.name}</h5>
        <p class="position">${speaker.position}</p>
        <hr />
        <p>${speaker.description}</p>
      </div>
    </article>`
    )
    .join('');
}
