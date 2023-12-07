// FUNCTIONS - STACK
//VARIABLES DOM
let figmaIcon = document.getElementById("figmaIcon");
let jsIcon = document.getElementById("jsIcon");
let HTMLIcon = document.getElementById("HTMLIcon");
let gitIcon = document.getElementById("gitIcon");
let cssIcon = document.getElementById("cssIcon");

function changeImageFigma() {
    figmaIcon.src = "img/figma2.png";
}

function backToImageFigma() {
    figmaIcon.src = "img/figma.png";
}


function changeImageJS() {
    jsIcon.src = "img/javascript2.png";
}

function backToImageJS() {
    jsIcon.src = "img/javascript.png";
}


function changeImageHTML() {
    HTMLIcon.src = "img/html2.png";
}

function backToImageHTML() {
    HTMLIcon.src = "img/html.png";
}


function changeImageGit() {
    gitIcon.src = "img/git2.png";
}

function backToImageGit() {
    gitIcon.src = "img/git.png";
}


function changeImageCSS() {
    cssIcon.src = "img/css2.png";
}

function backToImageCSS() {
    cssIcon.src = "img/css3.png";
}

//FORM

document.getElementById("contactForm").addEventListener('submit', function (event) {

    event.preventDefault();

    let nombre = document.getElementById('nombre').value;
    if (nombre.trim() === '') {
        alert('Por favor, ingresa tu nombre.');
        return;
    }

    let email = document.getElementById('email').value;
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Por favor, ingresa una dirección de correo electrónico válida.');
        return;
    }

    Swal.fire({
        title: "¡Mensaje enviado con éxito!",
        text: "¡A la brevedad me contactaré contigo!",
        icon: "success"
      });
});

// LANGUAGE BUTTON

let esButton = document.getElementById("esButton");
let enButton = document.getElementById("enButton");
let aboutMeParagraph = document.getElementById("aboutMeParagraph");
let subtitle = document.getElementById("subtitle");
let aboutMe = document.getElementById("aboutMe");
let proyects = document.getElementById("proyects");
let contactMe = document.getElementById ("contactMe");
let nameForm = document.getElementById ("nameForm");
let emailForm = document.getElementById ("emailForm");
let subjectForm = document.getElementById("subjectForm");
let messageForm = document.getElementById("messageForm");
let sendButtonForm = document.getElementById("sendButtonForm");
let popQuiz = document.getElementById ("popQuiz");

function changeLanguage(){
    aboutMeParagraph.textContent = "I possess a strong proficiency in development with HTML, CSS, and JavaScript, supported by over two years of professional experience in each of these technologies. My commitment to excellence is reflected in my continuous pursuit of learning to expand and refine my skill set. In addition to my experience in web technologies, my enthusiasm extends to mobile technologies and user-centered design."
    subtitle.textContent = "Web Developer";
    aboutMe.textContent = "ABOUT ME";
    proyects.textContent = "PROYECTS";
    contactMe.textContent = "CONTACT ME";
    nameForm.textContent = "NAME";
    emailForm.textContent = "EMAIL";
    subjectForm.textContent = "SUBJECT";
    messageForm.textContent = "MESSAGE";
    sendButtonForm.textContent = "SEND";
    popQuiz.textContent = "POP QUIZ";
    enButton.classList.add("selected-language-button");
    esButton.classList.remove("spanish-button");
}