"use strict";
const enviar = document.getElementById("contacto")

enviar.addEventListener("click", () => {
    window.open("https://api.whatsapp.com/send?phone=5493462662288&text=");
})
