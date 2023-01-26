var menuVisible = false;
//Función que oculta o muestra el menu
function mostrarOcultarMenu() {
	if (menuVisible) {
		document.getElementById("nav").classList = "";
		menuVisible = false;
	} else {
		document.getElementById("nav").classList = "responsive";
		menuVisible = true;
	}
}

function seleccionar() {
	//oculto el menu una vez que selecciono una opcion
	document.getElementById("nav").classList = "";
	menuVisible = false;
}
//Funcion que aplica las animaciones de las habilidades
function efectoHabilidades() {
	var skills = document.getElementById("skills");
	var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
	if (distancia_skills >= 300) {
		var habilidades = document.getElementsByClassName("progreso");
		habilidades[0].classList.add("javascript");
		habilidades[1].classList.add("htmlcss");
		habilidades[2].classList.add("photoshop");
		habilidades[3].classList.add("wordpress");
		habilidades[4].classList.add("drupal");
		habilidades[5].classList.add("comunicacion");
		habilidades[6].classList.add("trabajo");
		habilidades[7].classList.add("dedicacion2");
		habilidades[8].classList.add("dedicacion");
		habilidades[9].classList.add("proyect");
	}
}
//detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function() {
	efectoHabilidades();
}






var popup = document.getElementById("island-popup");
popup.onclick = function() {
	popup.classList.toggle('active');
}

document.querySelectorAll('.abouteme').forEach(button => {
    button.addEventListener('click', function() {
        const activeSection = document.querySelector('.active');
        if (activeSection) {
            activeSection.classList.remove('active');
        }
        const currentSection = document.getElementById('sobremi');
        currentSection.classList.add('active');
    });
});

document.querySelectorAll('.skilll').forEach(button => {
    button.addEventListener('click', function() {
        const activeSection = document.querySelector('.active');
        if (activeSection) {
            activeSection.classList.remove('active');
        }
        const currentSection = document.getElementById('skills');
        currentSection.classList.add('active');
    });
});

document.querySelectorAll('.contact').forEach(button => {
    button.addEventListener('click', function() {
        const activeSection = document.querySelector('.active');
        if (activeSection) {
            activeSection.classList.remove('active');
        }
        const currentSection = document.getElementById('contacto');
        currentSection.classList.add('active');
    });
});

document.querySelectorAll('.xp').forEach(button => {
    button.addEventListener('click', function() {
        const activeSection = document.querySelector('.active');
        if (activeSection) {
            activeSection.classList.remove('active');
        }
        const currentSection = document.getElementById('curriculum');
        currentSection.classList.add('active');
    });
});

document.querySelectorAll('.edu').forEach(button => {
    button.addEventListener('click', function() {
        const activeSection = document.querySelector('.active');
        if (activeSection) {
            activeSection.classList.remove('active');
        }
        const currentSection = document.getElementById('curriculum2');
        currentSection.classList.add('active');
    });
});

document.querySelectorAll('.program-bottom').forEach(button => {
    button.addEventListener('click', function() {
        const activeSection = document.querySelector('.active');
        if (activeSection) {
            activeSection.classList.remove('active');
        }
        const currentSection = document.getElementById('homee');
        currentSection.classList.add('active');
    });
});



