function mostrar(id){

    let secciones = document.querySelectorAll(".seccion");

    secciones.forEach(seccion => {
        seccion.classList.remove("activa");
    });

    document.getElementById(id).classList.add("activa");

}



function toggleHorario(){

    let horarios = document.getElementById("horarios");

    if(horarios.style.display === "block"){

        horarios.style.display = "none";

    }else{

        horarios.style.display = "block";

    }

}


const particulas = document.getElementById("particulas");

for(let i = 0; i < 40; i++){

    let p = document.createElement("div");

    p.classList.add("particula");

    p.style.left = Math.random() * 100 + "vw";

    p.style.animationDuration =
    (Math.random() * 10 + 10) + "s";

    p.style.animationDelay =
    Math.random() * 10 + "s";

    p.style.opacity =
    Math.random() * 0.3;

    p.style.width =
    p.style.height =
    (Math.random() * 8 + 4) + "px";

    particulas.appendChild(p);

    /* ABIERTO O CERRADO */

const estado = document.getElementById("estado-local");

const hora = new Date().getHours();

if(hora >= 8 && hora < 22){

    estado.innerHTML = "🟢 ABIERO AHORA";

    estado.style.color = "#00ff88";

}else{

    estado.innerHTML = "🔴 CERRADO";

    estado.style.color = "#ff4d4d";

}

}

