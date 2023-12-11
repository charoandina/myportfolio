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

function sendMail () {
    let parms = {
        name : document.getElementById("nombre").value,
        email : document.getElementById("email").value,
        subject : document.getElementById("subject").value,
        message : document.getElementById("mensaje").value
    }

    emailjs.send("service_9enjo9o","template_vpgqin6",parms);

}

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
      }).then(function() {
        location.reload();
    });

});

// LANGUAGE BUTTON

let languageButton = document.getElementById("languageButton");

const spanishText = {
    subtitle: 'Desarrolladora Web',
    aboutMe: 'SOBRE MI',
    aboutMeParagraph: 'Poseo una sólida competencia en el desarrollo con HTML, CSS y JavaScript, respaldada por una experiencia profesional de más de dos años en cada una de estas tecnologías. Mi compromiso con la excelencia se refleja en mi constante búsqueda de aprendizaje para ampliar y perfeccionar mi conjunto de habilidades. Además de mi experiencia en tecnologías web, mi entusiasmo se extiende hacia las tecnologías móviles y el diseño centrado en la experiencia del usuario.',
    projects: 'PROYECTOS',
    popQuiz: 'PREGUNTAS Y RESPUESTAS',
    contactMe: 'CONTACTATE',
    nameForm: 'NOMBRE',
    emailForm: 'CORREO ELECTRONICO',
    subjectForm: 'ASUNTO',
    messageForm: 'MENSAJE',
    sendButtonForm: 'ENVIAR'
}

const englishText = {
    subtitle: 'Web Developer',
    aboutMe: 'ABOUT ME',
    aboutMeParagraph: 'I possess a strong proficiency in development with HTML, CSS, and JavaScript, supported by over two years of professional experience in each of these technologies. My commitment to excellence is reflected in my continuous pursuit of learning to expand and refine my skill set. In addition to my experience in web technologies, my enthusiasm extends to mobile technologies and user-centered design.',
    projects: 'PROJECTS',
    popQuiz: 'POP QUIZ',
    contactMe: 'CONTACT ME',
    nameForm: 'NAME',
    emailForm: 'EMAIL',
    subjectForm: 'SUBJECT',
    messageForm: 'MESSAGE',
    sendButtonForm: 'SEND'
}

let onloadLanguage = 'ES';

function changeLanguage () {
    const elements = document.querySelectorAll('#subtitle, #aboutMe, #aboutMeParagraph, #projects, #popQuiz, #contactMe, #nameForm, #emailForm, #subjectForm, #messageForm, #sendButtonForm');

    if (onloadLanguage === 'ES') {
        elements.forEach(element => {
            element.textContent = englishText[element.id];
        });
        onloadLanguage = 'EN';
        languageButton.textContent = 'ES';
    } else {
        elements.forEach(element => {
            element.textContent = spanishText[element.id];
        });
        onloadLanguage = 'ES';
        languageButton.textContent = 'EN';
    }
}
