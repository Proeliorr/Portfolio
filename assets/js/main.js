/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
    const scrollDown = window.scrollY

  sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id'),
              sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')
        
        if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
            sectionsClass.classList.add('active-link')
        }else{
            sectionsClass.classList.remove('active-link')
        }                                                    
    })
}
window.addEventListener('scroll', scrollActive)

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2000,
  delay: 200,
  // reset: true
});

sr.reveal('.home__data, .about__img, .about__img2,.about__img3, .skills__subtitle, .skills__text',{}); 
sr.reveal('.home__img, .about__subtitle, .about__text, .about__text2, .about__text3, .skills__img',{delay: 400}); 
sr.reveal('.home__social-icon',{ interval: 200}); 
sr.reveal('.button__button2, .row',{ delay: 300}); 
sr.reveal('.skills__data, .work__img, .contact__input, .uia-timeline__container',{interval: 200}); 


/*===== EMAIL JS =====*/

const   contactForm = document.getElementById('contact__form'),
 contactMessage = document.getElementById('contact-message')

function sendEmail(e) {
    e.preventDefault()

    // serviceID - templateID - #form - publicKey
    emailjs.sendForm('service_7f9bfkv', 'template_zbtbo6g', contactForm, 'o5-GnSwjEXQSu7bNk')
        .then((result) => {
            //show sent message
            contactMessage.textContent = 'Message sent successfully ✅'

        }, () =>{
            //show error message
            contactMessage.textContent = 'Message not sent ❗'
        })
}
contactForm.addEventListener('submit', sendEmail)

/*===== MODAL =====*/

// Open the Modal
function openModal() {
    document.getElementById("myModal").style.display = "block";
    document.getElementsByClassName("l-header")[0].style.display = "none"; // hide the header
  }
  
// Close the Modal
function closeModal() {
  document.getElementById("myModal").style.display = "none";
  document.getElementsByClassName("l-header")[0].style.display = ""; // show the header
  var secondHeader = document.getElementById("2header");
  if (secondHeader) {
    secondHeader.style.display = "flex"; // show the 2ndheader
  }
}

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}


