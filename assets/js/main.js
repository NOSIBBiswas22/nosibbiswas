/*===== key contorls=====*/ 
document.addEventListener("keydown", (e) => {
    if (e.ctrlKey || e.keyCode==123) {
        e.stopPropagation();
        e.preventDefault();
    }
});

document.addEventListener("contextmenu", (e) => {
 e.preventDefault();
}, false);


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


/*===== changing the menu icon on clik =====*/
function changeMenuBtn(){
    const menu = document.getElementById('menu_btn');
    menu.classList.toggle('bx-x')
}



/*===== REMOVE MENU MOBILE =====*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*===== SCROLL SECTIONS ACTIVE LINK =====*/
const sections = document.querySelectorAll('section[id]')

window.addEventListener('scroll', scrollActive)

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active')
        }
    })
}

/*===== SCROLL UP BTN FUNCTION =====*/
$(window).scroll(function(){
    
    // scroll-up button show/hide script
    if(this.scrollY > 500){
        $('.scroll-up-btn').addClass("show");
    }else{
        $('.scroll-up-btn').removeClass("show");
    }
});

// slide-up script
$('.scroll-up-btn').click(function(){
    $('html').animate({scrollTop: 0});
    // removing smooth scroll on slide-up button click
    $('html').style("scrollBehavior", "auto");
});

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 1500,
    reset: false
})

/*SCROLL HOME*/
sr.reveal('.home__title', {})
sr.reveal('.home__scroll', {delay: 200})
sr.reveal('.home__img', {origin:'right', delay: 400})

/*SCROLL ABOUT*/
sr.reveal('.about__img', {delay: 500})
sr.reveal('.about__subtitle', {delay: 300})
sr.reveal('.about__profession', {delay: 400})
sr.reveal('.about__text', {delay: 500})
sr.reveal('.about__social-icon', {delay: 600, interval: 200})

/*SCROLL SKILLS*/
sr.reveal('.skills__subtitle', {})
sr.reveal('.skills__name', {distance: '20px', delay: 50, interval: 100})
sr.reveal('.skills__img', {delay: 400})

/*SCROLL PORTFOLIO*/
sr.reveal('.portfolio__img', {interval: 200})

/*SCROLL CONTACT*/
sr.reveal('.contact__subtitle', {interval:60})
sr.reveal('.contact__icon', {interval: 100}, {delay:50})
sr.reveal('.contact__text', {interval: 100})
sr.reveal('.contact__p', {delay: 500})
sr.reveal('.contact__name', {interval: 100})
sr.reveal('.contact__input', {delay: 400})
sr.reveal('.contact__button', {delay: 600})

// typing text animation script
var typed = new Typed(".typing", {
    strings: ["Student", "Enthusiastic Programmer", "Freelancer", "Graphics Designer", "UI/UX Designer", "Full Stack Web Developer", "Ethical Hacker" ],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});

// about button toggle function

function toggle__about__Btn() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("about__more");
    var btnText = document.getElementById("about__Btn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less";
      moreText.style.display = "inline";
    }
  }
 
// contact form validation

var nameError = document.getElementById('name-error');
var phoneError = document.getElementById('phone-error');
var emailError = document.getElementById('email-error');
var messageError = document.getElementById('message-error');
var submitError = document.getElementById('submit-error');

function validateName(){
    var name = document.getElementById('Name').value;

    if(name.length == 0){
        nameError.innerHTML = 'Name is required';
        return false;
    }    
    if(name.match(' '+' ')){
        nameError.innerHTML = "<i class='bx bxs-x-circle'></i>";
        return false;
    }
    if((!name.match(/^[a-zA-Z ]*$/))||((name.length >=30) || (name.length <3))){
        nameError.innerHTML = "<i class='bx bxs-x-circle'></i>";
        return false;
    }
    nameError.innerHTML = "<i class='bx bxs-check-circle'></i>";
    return true;
}

function validatePhone(){
    var phone = document.getElementById('Phone').value;

    var valueLength = 11;

    if(phone.length == 0){
        phoneError.innerHTML = 'Phone no. is required';
        return false;
    }
    if(phone.match(' ')){
        phoneError.innerHTML = "<i class='bx bxs-x-circle'></i>";
        return false;
    }
    if(phone.match('-')){
        phoneError.innerHTML = "<i class='bx bxs-x-circle'></i>";
        return false;
    }
    if(isNaN(phone)){
        phoneError.innerHTML = "<i class='bx bxs-x-circle'></i>";
        return false;

    }
    if(phone.charAt(0)=='+'){
        valueLength = 14;
    }
    if(phone.charAt(0)==8){
        valueLength = 13;
    }
    if((phone.length <10) || (phone.length > valueLength)){
        phoneError.innerHTML = "<i class='bx bxs-x-circle'></i>";
        return false;
    }

    // // 01704485771
    // if(valueLength=11){
    //     if(((phone.charAt(0)!= 0) || (phone.charAt(1)!=1) || ( (phone.charAt(2)!=1) && (phone.charAt(2)!=3) && (phone.charAt(2)!=4) && (phone.charAt(2)!=5) && (phone.charAt(2)!=6) && (phone.charAt(2)!=7) && (phone.charAt(2)!=8) && (phone.charAt(2)!=9)))){
    //         phoneError.innerHTML = "<i class='bx bxs-x-circle'></i>";
    //         return false;
    //     }
    //     else{
    //         phoneError.innerHTML = "<i class='bx bxs-check-circle'></i>";
    //         return true;
    //     }
    // }

    // // +8801704485771
    // if(valueLength=14){
    //     if(((phone.charAt(0)!= '+') || (phone.charAt(1)!=8) || (phone.charAt(2)!=8) || (phone.charAt(3)!=0) || (phone.charAt(4)!=1) ||( (phone.charAt(5)!=1) && (phone.charAt(5)!=3) && (phone.charAt(5)!=4) && (phone.charAt(5)!=5) && (phone.charAt(5)!=6) && (phone.charAt(5)!=7) && (phone.charAt(5)!=8) && (phone.charAt(5)!=9)))){
    //         phoneError.innerHTML = "<i class='bx bxs-x-circle'></i>";
    //         return false;
    //     }
    //     else{
    //         phoneError.innerHTML = "<i class='bx bxs-check-circle'></i>";
    //         return true;
    //     }
    // }
    
    phoneError.innerHTML = "<i class='bx bxs-check-circle'></i>";
    return true;
}

function validateEmail(){
    var email = document.getElementById('Email').value;

    if(email.length == 0){
        emailError.innerHTML = 'Email is required';
        return false;
    }
    if(email.length > 50){
        emailError.innerHTML = "<i class='bx bxs-x-circle'></i>";
        return false;
    }
    //(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/))
    if(!email.match(/^[a-z\._\-[0-9]*[@][a-z]*[\.][a-z]{2,4}$/)){
        emailError.innerHTML = "<i class='bx bxs-x-circle'></i>";
        return false;
    }
    emailError.innerHTML = "<i class='bx bxs-check-circle'></i>";
    return true;
}

function validateMessage(){
    var message = document.getElementById('contact__message').value;

    var required = 30;
    var left = required - message.length;

    if(message.length == 0){
        messageError.innerHTML = 'Message no. is required';
        return false;
    }
    if(message.length > 300){
        messageError.innerHTML = "<i class='bx bxs-x-circle'></i>";
        return false;
    }
    if(left > 0){
        messageError.innerHTML = left +' more characters required';
        return false;
    }
    messageError.innerHTML = "<i class='bx bxs-check-circle' ></i>";
    return true;
}

function validateForm(){
    var name = document.getElementById('Name').value;
    var phone = document.getElementById('Phone').value;
    var email = document.getElementById('Email').value;
    var message = document.getElementById('contact__message').value;

    let formVale = (name+phone+email+message);

    if(formVale.length == 0){
        submitError.classList.add("submit-fail");
        submitError.style.display = 'block';
        submitError.innerHTML = 'Please Fill Details To Submit !';
        setTimeout(function(){
            submitError.style.display = 'none'
        }, 3000);
        return false;
    }
    if((name.length <1) || (phone.length <1) || (email.length <1) || (message.length <1)){
        submitError.classList.add("submit-fail");
        submitError.style.display = 'block';
        submitError.innerHTML = 'Please Fill All Details !';
        setTimeout(function(){
            submitError.style.display = 'none'
        }, 3000);
        return false;
    }
    if(!validateName() || !validatePhone() || !validateEmail() || !validateMessage()){
        submitError.classList.add("submit-fail");
        submitError.style.display = 'block';
        submitError.innerHTML = 'Please Enter Valid Details !';
        setTimeout(function(){
            submitError.style.display = 'none'
        }, 3000);
        return false;
    }
    if(validateName() || validatePhone() || validateEmail() ||  validateMessage()){
        return true;
    }
}

// contact form save to googel sheets
const submitBtn = document.querySelector('#submitBtn');

function removeIcon() {
    nameError.innerHTML = '';
    phoneError.innerHTML = '';
    emailError.innerHTML = '';
    messageError.innerHTML = '';
}

function wating() {
    submitBtn.disabled = true;
    submitError.classList.remove("submit-fail");
    submitError.classList.add("submit-success");
    submitError.style.display = 'block';
    submitError.innerHTML = ('Sending...!');
};

function onSucessResponse(response) {
    document.getElementById("contact_form").reset();
    removeIcon();
    
    submitError.classList.remove("submit-fail");
    submitError.classList.add("submit-success");
    submitError.style.display = 'block';
    submitError.innerHTML = ('Successfully Sent !');
    setTimeout(function(){
        submitError.style.display = 'none'
    }, 4000);
    submitBtn.disabled = false;
};

function onFailedResponse(error) {
    removeIcon();
    
    submitError.classList.add("submit-fail");
    submitError.classList.remove("submit-success");
    submitError.style.bottom = '0';
    submitError.style.display = 'block';
    submitError.innerHTML = ('Unable to send details.<br> Please try again!');
    setTimeout(function(){
        submitError.style.display = 'none'
    }, 5000);
    submitBtn.disabled = false;
};

const _0x837e=["\x68\x74\x74\x70\x73\x3A\x2F\x2F\x73\x63\x72\x69\x70\x74\x2E\x67\x6F\x6F\x67\x6C\x65\x2E\x63\x6F\x6D\x2F\x6D\x61\x63\x72\x6F\x73\x2F\x73\x2F\x41\x4B\x66\x79\x63\x62\x7A\x53\x65\x67\x49\x73\x33\x36\x70\x57\x30\x64\x57\x6E\x45\x54\x75\x30\x71\x52\x4A\x5A\x77\x35\x39\x56\x6C\x6A\x52\x53\x35\x67\x41\x61\x55\x58\x57\x67\x48\x5F\x6F\x79\x71\x70\x4E\x62\x65\x61\x6D\x32\x30\x63\x73\x7A\x36\x79\x39\x4B\x34\x65\x62\x64\x6C\x42\x67\x71\x75\x67\x2F\x65\x78\x65\x63"];const scriptURL=_0x837e[0]

const _0xa09a=["\x63\x6F\x6E\x74\x61\x63\x74\x5F\x5F\x64\x65\x74\x61\x69\x6C\x73","\x66\x6F\x72\x6D\x73"];const form=document[_0xa09a[1]][_0xa09a[0]]
    
form.addEventListener('submit',async (event) =>{
    event.preventDefault()
    wating();
    await fetch(scriptURL, { method: 'POST', body: new FormData(form)})
            .then(response => onSucessResponse(response))
            .catch(error => onFailedResponse(error));
    })

//changing the inner html of the span with "footer_year" id to the given year(2022)

function getCurrentYear() {
    return new Date().getFullYear(); // returns the year via local timing
  }
  
  document.getElementById("footer_year").innerHTML = getCurrentYear();
