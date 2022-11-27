"use strict";

const cuerpoPagina = document.querySelector(".cuerpoPagina");
const efecto = document.querySelector(".FX");

const visible = (entradas) => {
    const entrada = entradas[0];
    if (entrada.isIntersecting) {
        efecto.classList.add("active");
        setTimeout(() => {
            efecto.classList.remove("active");
        }, 2000)
    } else {
        efecto.classList.remove("active");

    }
}

const observer = new IntersectionObserver(visible);

observer.observe(cuerpoPagina);

const enviar = document.getElementById("contacto")

enviar.addEventListener("click", () => {
    window.open("https://api.whatsapp.com/send?phone=5493462662288&text=");
    console.log("asd");
})
