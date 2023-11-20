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