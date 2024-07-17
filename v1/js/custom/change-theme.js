var flat = document.querySelector(`#flat`);
var neo = document.querySelector(`#neo`);

var pageBody = document.querySelector(`#page-body`);
var navLinks = document.querySelectorAll(`#main-navbar .nav-item a.nav-link`);
var headerImg = document.querySelector(`header .header-image`);
var btnMore = document.querySelector(`.btn-more`);
var ball1 = document.querySelector(`#ball1`);
var ball2 = document.querySelector(`#ball2`);
var ball3 = document.querySelector(`#ball3`);
var hrContainer = document.querySelectorAll(`hr.container`);

const keyframes = `
  @keyframes gradient {
    0%   { background-position: 0 0; }
    50%  { background-position: -100% 0; }
    100% { background-position: -200% 0; }
  }
`;

const styleElement = document.createElement(`style`);
styleElement.innerHTML = keyframes;
document.head.appendChild(styleElement);

function neoHeader() {
  pageBody.classList.add(`change-body`);

  for (let i = 0; i < navLinks.length; i++) {
    navLinks[i].classList.add(`change-color`);
  }

  headerImg.className = ``;
  headerImg.style.cssText = `
    margin-bottom: 5rem;
    transition: 1s;
    position: relative; 
    display: inline-block; 
    z-index: 1; 
    box-shadow: inset -8px -8px 12px 0 rgba(255, 0, 0, 0.2), inset -16px -16px 24px 0 rgba(150, 25, 255, 0.4), inset 8px 8px 12px 0 rgba(0, 255, 255, 0.5); 
    border-radius: 50%; 
    background: repeating-radial-gradient(circle, #150c0b 0%, #353535 10%,  #150c0b 100%);
    background-size: 50% 200%;
    animation: gradient 3s linear forwards infinite;
    `;

  btnMore.style.cssText = `
    background: #2c2d30; 
    box-shadow: 2px 2px 2px 0px rgb(154, 156, 165), inset 3px 3px 3px 0px #1380b4 ,inset -4px -4px 6px 0 rgba(255, 0, 0, 0.2), inset -8px -8px 12px 0 rgba(150, 25, 255, 0.4), inset 4px 4px 6px 0 rgba(0, 255, 255, 0.5); 
    outline: 1px solid rgb(120,120,120); 
    outline-offset:.2rem;  
    transition: .5s;
    `;

  ball1.classList.add(`change-ball1`);
  ball2.classList.add(`change-ball2`);
  ball3.classList.add(`change-ball3`);

  hrContainer.forEach((i) => {
    i.style.cssText = `color: #e9e8e8;`;
  });
}

function flatHeader() {
  pageBody.classList.remove(`change-body`);

  for (let i = 0; i < navLinks.length; i++) {
    navLinks[i].style.cssText = `transition: 1s;`;
    navLinks[i].classList.remove(`change-color`);
  }

  headerImg.style = `transition: 1s;`;
  headerImg.classList.add(`header-image`);

  btnMore.style = `transition: .5s;`;
  btnMore.classList.add(`btn-more`);

  ball1.classList.remove(`change-ball1`);
  ball2.classList.remove(`change-ball2`);
  ball3.classList.remove(`change-ball3`);

  hrContainer.forEach((i) => {
    i.style.cssText = ``;
  });
}

var aboutImage = document.querySelector(`#about-image`);
var aboutMe = document.querySelector(`#about-me`);
var aboutColor = document.querySelectorAll(`.about-color`);
var btnAbout = document.querySelectorAll(`.btn-about span`);
var progressShadow = document.querySelectorAll(`.progress-shadow`);
var progressBar = document.querySelectorAll(`.progress-bar`);

function neoAbout() {
  aboutImage.style.cssText = `
  padding: 15px;
  background: #2c2d30;
  box-shadow: inset -4px -4px 6px 0 rgba(255, 0, 0, 0.2), inset -8px -8px 12px 0 rgba(150, 25, 255, 0.4), inset 4px 4px 6px 0 rgba(0, 255, 255, 0.5);
  transition: 1s;
  background: repeating-linear-gradient(to right, #2c2d30 0%, rgba(255, 0, 0, 0.2) 25%, rgba(150, 25, 255, 0.4) 50%, rgba(0, 255, 255, 0.5) 75%, #2c2d30 100%);
  background-size: 200% auto;
  filter: hue-rotate(90deg);
  animation: gradient 6s ease-in-out forwards infinite;
`;

  if (neo.click) {
    if (window.innerWidth >= 1200) {
      aboutMe.style.cssText = `
      box-shadow: inset -8px -8px 12px 0 rgba(255, 0, 0, 0.2), inset -16px -16px 24px 0 rgba(150, 25, 255, 0.4), inset 8px 8px 12px 0 rgba(0, 255, 255, 0.5); 
      transition: 1s; 
      background: repeating-radial-gradient(circle, #081516 0%, #321717 40%,  #081516 100%);
      background-size: 200% auto;
      mix-blend-mode: difference;
      animation: gradient 5s linear forwards infinite;
      `;
    }
  } else {
    aboutMe.style.cssText = `transition:1s;`;
  }

  for (let i = 0; i < aboutColor.length; i++) {
    aboutColor[i].classList.add(`change-color`);
  }

  for (let i = 0; i < btnAbout.length; i++) {
    btnAbout[i].style.cssText = `
      background: transparent; 
      box-shadow: 2px 2px 2px 0px rgb(14, 156, 165), inset 3px 3px 3px 0px #1380b4 ,inset -4px -4px 6px 0 rgba(255, 0, 0, 0.2), inset -8px -8px 12px 0 rgba(150, 25, 255, 0.4), inset 4px 4px 6px 0 rgba(0, 255, 255, 0.5); 
      outline: 1px solid rgb(120,120,120); outline-offset:.2rem; color: rgb(240,240,240);
      transition: .5s;`;
  }

  progressShadow.forEach((i) => i.classList.remove(`progress-shadow`));
  progressShadow.forEach((i) => (i.style.cssText = `background: wheat;`));

  progressBar.forEach(
    (i) =>
      (i.style.cssText = `
        background: repeating-linear-gradient(to left, #633070 0%, #252525 50%,  #081516 100%);
        background-size: 25% 200%;
        box-shadow: 2px 2px 5px 0px #633070, inset 3px 3px 3px 0px #1380b4 ,inset -4px -4px 6px 0 rgba(255, 0, 0, 0.2), inset -4px -4px 12px 0 rgba(150, 25, 255, 0.4), inset 1px 1px 3px 0 rgba(0, 255, 255, 0.5);
        transition: 1s;
        animation: gradient 15s linear forwards infinite;
        `)
  );
}

function flatAbout() {
  aboutImage.style = ` transition: .5s;`;
  aboutMe.style = ` transition: 1s;`;

  for (let i = 0; i < aboutColor.length; i++) {
    aboutColor[i].classList.remove(`change-color`);
  }

  for (let i = 0; i < btnAbout.length; i++) {
    btnAbout[i].style.cssText = `transition:.5s;`;
  }

  progressShadow.forEach((i) => (i.style.cssText = ``));
  progressShadow.forEach((i) => i.classList.add(`progress-shadow`));

  progressBar.forEach((i) => (i.style.cssText = `transition: 1s;`));
}

var servicesImage = document.querySelectorAll(`#services .card .animate-image`);
var cardColorN = document.querySelectorAll(`.card-color:nth-of-type(n) .card`);
var cardColor2N = document.querySelectorAll(
  `.card-color:nth-of-type(2n) .card`
);

function neoService() {
  servicesImage.forEach(
    (i) => (i.style.cssText = `mix-blend-mode: difference;`)
  );

  cardColorN.forEach(
    (i) =>
      (i.style.cssText = `
    box-shadow: inset -8px -8px 12px 0 rgba(255, 0, 0, 0.2), inset -16px -16px 24px 0 rgba(150, 25, 255, 0.4), inset 8px 8px 12px 0 rgba(0, 255, 255, 0.5), 4px 4px 4px 0 rgba(160, 160, 160, .5); 
    transition: 1s;
    background: repeating-linear-gradient(to right, #703030 0%, #081516 50%,  #703030 100%);
    background-size: 200% auto;
    animation: gradient 4s linear forwards infinite;
  `)
  );

  cardColor2N.forEach(
    (i) =>
      (i.style.cssText = `
      box-shadow: inset -8px -8px 12px 0 rgba(255, 0, 0, 0.2), inset -16px -16px 24px 0 rgba(150, 25, 255, 0.4), inset 8px 8px 12px 0 rgba(0, 255, 255, 0.5), 4px 4px 4px 0 rgba(160, 160, 160, .5); 
      transition: 1s;
      background: repeating-linear-gradient(to left, #081516 0%, #303070 50%,  #081516 100%);
      background-size: 200% auto;
      animation: gradient 4s linear forwards infinite;
  `)
  );
}

function flatService() {
  servicesImage.forEach((i) => (i.style.cssText = `transition: 1s;`));

  cardColorN.forEach((i) => (i.style.cssText = `transition: 1s;`));
}

var portfolioCard = document.querySelectorAll(`#portfolio .card`);
var portfolioLayer = document.querySelectorAll(`.layer`);
var layerLinks = document.querySelectorAll(`.layer .modal-links a`);
var layerLinksFirstChild = document.querySelectorAll(
  `.layer .modal-links a:first-child`
);
var portfolio3dImage = document.querySelectorAll(
  `#portfolio .card .image-3d img`
);
var modalContent = document.querySelectorAll(`.projects .modal-content`);
var modalImages = document.querySelectorAll(`.project-img `);
var images = document.querySelectorAll(`.images`);

function neoPortfolio() {
  portfolioCard.forEach(
    (i) =>
      (i.style.cssText = `
    background: black;
    transition: 1s;
    box-shadow: inset -8px -8px 12px 0 rgba(255, 0, 0, 0.2), inset -16px -16px 24px 0 rgba(150, 25, 255, 0.4), inset 8px 8px 12px 0 rgba(0, 255, 255, 0.5), 4px 4px 4px 0 rgba(160, 160, 160, .5); 
    background: repeating-radial-gradient(circle, black 0%, #331b3a 50%,  black 100%);
    background-size: 50% auto;
    animation: gradient 6s linear forwards infinite;
  `)
  );

  portfolioLayer.forEach(
    (i) =>
      (i.style.cssText = `
      background: linear-gradient(to bottom left, #994b88 0%, #221a1a 70%);
      `)
  );

  layerLinks.forEach(
    (i) =>
      (i.style.cssText = `
      background-image: linear-gradient(to left, #0829af, #192585, #1e205d, #1c1b37, #141414);
      box-shadow: inset -8px -8px 12px 0 rgba(255, 0, 0, 0.2), inset -16px -16px 24px 0 rgba(150, 25, 255, 0.4), inset 8px 8px 12px 0 rgba(0, 255, 255, 0.5), 1px 1px 2px 0 rgba(160, 160, 160, .5); 

  `)
  );

  layerLinksFirstChild.forEach(
    (i) =>
      (i.style.cssText = `
      background-image: linear-gradient(to right bottom, #fd0404, #ff5280, #ff97d1, #f7d1fc, #ffffff);
      box-shadow: inset -8px -8px 12px 0 rgba(255, 0, 0, 0.2), inset -16px -16px 24px 0 rgba(150, 25, 255, 0.4), inset 8px 8px 12px 0 rgba(0, 255, 255, 0.5), 1px 1px 2px 0 rgba(160, 160, 160, .5); 
  `)
  );

  portfolio3dImage.forEach(
    (i) => (i.style.cssText = `filter: grayscale(20%) invert(15%)`)
  );

  modalContent.forEach(
    (i) =>
      (i.style.cssText = `
      box-shadow: inset -8px -8px 12px 0 rgba(255, 0, 0, 0.2), inset -16px -16px 24px 0 rgba(150, 25, 255, 0.4), inset 8px 8px 12px 0 rgba(0, 255, 255, 0.5); 
      transition: 1s; 
      background: repeating-radial-gradient(circle, #081516 0%, #202020 50%,  #081516 100%);
      background-size: 200% auto;
      mix-blend-mode: difference;
      opacity: 0.9;
      animation: gradient 6s linear forwards infinite;
  `)
  );

  modalImages.forEach(
    (i) =>
      (i.style.cssText = `
      background: #2c2d30;
      box-shadow: inset -4px -4px 6px 0 rgba(255, 0, 0, 0.2), inset -8px -8px 12px 0 rgba(150, 25, 255, 0.4), inset 4px 4px 6px 0 rgba(0, 255, 255, 0.5);
      background-size: 200% auto;
      mix-blend-mode: color-dodge;
  `)
  );

  images.forEach(
    (i) =>
      (i.style.cssText = `
      mix-blend-mode: hard-light;
  `)
  );
}

function flatPortfolio() {
  portfolioCard.forEach((i) => (i.style.cssText = `transition: 1s;`));

  portfolioLayer.forEach((i) => (i.style.cssText = `transition: 1s;`));

  layerLinks.forEach((i) => (i.style.cssText = `transition: 1s;`));

  layerLinksFirstChild.forEach((i) => (i.style.cssText = `transition: 1s;`));

  portfolio3dImage.forEach((i) => (i.style.cssText = `transition: 1s;`));

  modalContent.forEach((i) => (i.style.cssText = `transition: 1s;`));

  modalImages.forEach((i) => (i.style.cssText = `transition: 1s;`));

  images.forEach((i) => (i.style.cssText = `transition: 1s;`));
}

var map = document.querySelector(`iframe`);
var contactInfoLogo = document.querySelectorAll(`.contact-info .pe-1`);
var contactInput = document.querySelectorAll(`#contact input`);
var contactTextarea = document.querySelector(
  `#contact .form-textarea textarea`
);
var socialMediaIcons = document.querySelectorAll(
  `#follow .follow-icons .fa-brands`
);
var toast = document.querySelector(`.toast`);
var toastHeaderButton = document.querySelector(`.toast-header button`);
var toastHeader = document.querySelector(`.toast-header`);

function neoContact() {
  map.style.cssText = `filter: invert(100%);`;

  contactInfoLogo.forEach((i) => (i.style.cssText = `color: #cecdcd`));

  contactInput.forEach(
    (i) =>
      (i.style.cssText = `
      background: transparent;
      color: #cecdcd;
      box-shadow: 2px 2px 5px 0px #633070, inset 3px 3px 3px 0px #1380b4 ,inset -4px -4px 6px 0 rgba(255, 0, 0, 0.2), inset -4px -4px 12px 0 rgba(150, 25, 255, 0.4), inset 1px 1px 3px 0 rgba(0, 255, 255, 0.5);
  `)
  );

  contactTextarea.style.cssText = `
      background: transparent;
      color: #cecdcd;
      box-shadow: 2px 2px 5px 0px #633070, inset 3px 3px 3px 0px #1380b4 ,inset -4px -4px 6px 0 rgba(255, 0, 0, 0.2), inset -4px -4px 12px 0 rgba(150, 25, 255, 0.4), inset 1px 1px 3px 0 rgba(0, 255, 255, 0.5);
  `;

  socialMediaIcons.forEach((i) => (i.style.cssText = `color: #cecdcd;`));

  toastHeaderButton.classList.add(`btn-close-white`);

  toast.classList.remove(`bg-warning`);
  toast.style.cssText = `
      color: #cecdcd;
      background: #081516;
      box-shadow: 2px 2px 5px 0px #633070, inset 3px 3px 3px 0px #1380b4,
      inset -4px -4px 6px 0 rgba(255, 0, 0, 0.2),
      inset 1px 1px 3px 0 rgba(0, 255, 255, 0.5);
  `;

  toastHeader.style.cssText = `
      border-bottom: 1px solid #cecdcd;
      color: #cecdcd;
      background: #081516;
      box-shadow: inset 3px 3px 3px 0px #1380b4,
        inset 1px 1px 3px 0 rgba(0, 255, 255, 0.5);
  `;
}

function flatContact() {
  contactInfoLogo.forEach((i) => (i.style.cssText = `transition: 1s;`));

  contactInput.forEach((i) => (i.style.cssText = `transition: 1s;`));

  contactTextarea.style.cssText = `transition: 1s;`;

  socialMediaIcons.forEach((i) => (i.style.cssText = `transition: 1s;`));

  toastHeaderButton.classList.remove(`btn-close-white`);

  toast.classList.add(`bg-warning`);

  toast.style.cssText = ``;

  toastHeader.style.cssText = ``;
}

neo.addEventListener(`click`, neoHeader);
neo.addEventListener(`click`, neoAbout);

flat.addEventListener(`click`, flatHeader);
flat.addEventListener(`click`, flatAbout);

neo.addEventListener(`click`, neoService);
flat.addEventListener(`click`, flatService);

neo.addEventListener(`click`, neoPortfolio);
flat.addEventListener(`click`, flatPortfolio);

neo.addEventListener(`click`, neoContact);
flat.addEventListener(`click`, flatContact);

window.addEventListener(`resize`, function () {
  if (window.innerWidth <= 1200) {
    aboutMe.style.cssText = ``;
  } else {
    if (!neo.click) {
      aboutMe.style.cssText = `background: #2c2d30; box-shadow: inset -4px -4px 6px 0 rgba(255, 0, 0, 0.2), inset -8px -8px 12px 0 rgba(150, 25, 255, 0.4), inset 4px 4px 6px 0 rgba(0, 255, 255, 0.5);`;
    }
  }
});
