const ham = document.querySelector('.ham');
const navbar = document.querySelector('.navbar');

function openCloseMenu() {
  ham.classList.toggle('change');
  if ((navbar.style.display = 'none')) {
    navbar.style.display = 'flex';
  } else if ((navbar.style.display = 'flex')) {
    navbar.style.display = 'none';
  }
}

ham.addEventListener('click', openCloseMenu);

const speakers = [
  {
    image: '../css/images/instructors/b1.jpg',
    imageAlt: 'Picture of Ben Parker',
    name: 'Ben Parker',
    position: 'Design Director at University of London',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque labore ex ad impedit, mollitia rerum et non',
  },
  {
    image: '../css/images/instructors/g1.jpg',
    imageAlt: 'Picture of zoe Fernandez',
    name: 'Zoe Fernandez',
    position: 'Web Application Developer at Facebook',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque labore ex ad impedit, mollitia rerum et non',
  },
  {
    image: '../css/images/instructors/g2.jpg',
    imageAlt: 'Picture of Edward Cisneros',
    name: 'Edward Cisneros',
    position: 'SEO Specialist at Google',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque labore ex ad impedit, mollitia rerum et non',
  },
  {
    image: '../css/images/instructors/b2.jpg',
    imageAlt: 'Picture of May Gauthier',
    name: 'May Gauthier',
    position: 'Interaction Designer at Lenovo',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque labore ex ad impedit, mollitia rerum et non',
  },
  {
    image: '../css/images/instructors/b3.jpg',
    imageAlt: 'Picture of Vince Veras',
    name: 'Vince Veras',
    position: 'Visual Designer at Microverse',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque labore ex ad impedit, mollitia rerum et non',
  },
  {
    image: '../css/images/instructors/g3.jpg',
    imageAlt: 'Picture of Chris Powel',
    name: 'Chris Powel',
    position: 'JavaScript Engineer at Apple',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque labore ex ad impedit, mollitia rerum et non',
  },
];

const speakerSection = document.querySelector('.instructors');
if (speakerSection) {
  speakerSection.innerHTML = speakers
    .map(
      (speaker) => `
      <article class="instructor">
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
