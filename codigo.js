"use strict";

const cuerpoPagina = document.querySelector(".cuerpoPagina");
const efecto = document.querySelector(".FX");

const visible = (entradas) => {
    const entrada = entradas[0];
    if (entrada.isIntersecting) {
        efecto.classList.add("active");
    } else {
        efecto.classList.remove("active");

    }
}

const observer = new IntersectionObserver(visible);

observer.observe(cuerpoPagina);