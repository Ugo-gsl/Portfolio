let menuVisible = false;
//Función que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}
//Funcion que aplica las animaciones de las habilidades
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("htmlcss");
        habilidades[2].classList.add("photoshop");
        habilidades[3].classList.add("wordpress");
        habilidades[4].classList.add("drupal");
        habilidades[5].classList.add("comunicacion");
        habilidades[6].classList.add("trabajo");
        habilidades[7].classList.add("creatividad");
        habilidades[8].classList.add("dedicacion");
        habilidades[9].classList.add("proyect");
    }
}


//detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function(){
    efectoHabilidades();
} 


let popup = document.querySelector('.island-popup');
popup.onclick = function() {
    popup.classList.toggle('active');
    }


let sobremi = document.querySelector('.sobremi') ;
let about = document.querySelector('.abouteme');
about.onclick = function() {
    $('.active').removeClass('active');;
    sobremi.classList.add('active');
    }

let skill = document.querySelector('.skills') ;
let skillbuton = document.querySelector('.skilll');
skillbuton.onclick = function() {
    $('.active').removeClass('active');;
    skill.classList.add('active');
    }

let contact = document.querySelector('.contacto') ;
let contactbuton = document.querySelector('.contact');
contactbuton.onclick = function() {
    $('.active').removeClass('active');;
    contact.classList.add('active');
    }

let xp = document.querySelector('.curriculum') ;
let xpbuton = document.querySelector('.xp');
xpbuton.onclick = function() {
    $('.active').removeClass('active');;
    xp.classList.add('active');
    }

let edu = document.querySelector('.curriculum') ;
let edubuton = document.querySelector('.edu');
edubuton.onclick = function() {
    $('.active').removeClass('active');;
    edu.classList.add('active');
    }

let home = document.querySelector('.homee') ;
let homebuton = document.querySelector('.program-bottom');
homebuton.onclick = function() {
    $('.active').removeClass('active');;
    home.classList.add('active');
    }