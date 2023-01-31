/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu')
      navToggle = document.getElementById('nav-toggle')
      navClose = document.getElementById('nav-close')

/*===== MENU SHOW ====*/
if (navToggle) {
  navToggle.addEventListener('click', () =>{
    navMenu.classList.add('show-menu')
  })
}

/*===== MENU HIDDEN ====*/
if (navClose) {
  navClose.addEventListener('click', ()=>{
    navMenu.classList.remove('show-menu')
  })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav-link')

function linkAction() {
  const navMenu = document.getElementById('nav-menu')
  // When we click on each nav-link, we remove the show-menu class.
  navMenu.classList.remove('show-menu')
}
  navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== GSAP ANIMATION ===============*/
TweenMax.from('.home-title', 1, {delay: .2, opacity: 0, y: 20, ease: Expo.easeInOut})
TweenMax.from('.home-description', 1, {delay: .3, opacity: 0, y: 20, ease: Expo.easeInOut})
TweenMax.from('.home-button', 1, {delay: .4, opacity: 0, y: 20, ease: Expo.easeInOut})
TweenMax.from('.home-liquid', 1, {delay: .7, opacity: 0, y: 200, ease: Expo.easeInOut})
TweenMax.from('.home-juice-animate', 1, {delay: 1.2, opacity: 0, y: -800, ease: Expo.easeInOut})
TweenMax.from('.home-apple1', 1, {delay: 1.5, opacity: 0, y: -800, ease: Expo.easeInOut})
TweenMax.from('.home-apple2', 1, {delay: 1.6, opacity: 0, y: -800, ease: Expo.easeInOut})
TweenMax.from('.home-leaf:nth-child(1)', 2, {delay: 1.3, opacity: 0, y: -800, ease: Expo.easeInOut})
TweenMax.from('.home-leaf:nth-child(2)', 2, {delay: 1.4, opacity: 0, y: -800, ease: Expo.easeInOut})
TweenMax.from('.home-leaf:nth-child(3)', 2, {delay: 1.5, opacity: 0, y: -800, ease: Expo.easeInOut})
TweenMax.from('.home-leaf:nth-child(4)', 2, {delay: 1.6, opacity: 0, y: -800, ease: Expo.easeInOut})
TweenMax.from('.home-leaf:nth-child(5)', 2, {delay: 1.7, opacity: 0, y: -800, ease: Expo.easeInOut})
TweenMax.from('.home-leaf:nth-child(6)', 2, {delay: 1.8, opacity: 0, y: -800, ease: Expo.easeInOut})
