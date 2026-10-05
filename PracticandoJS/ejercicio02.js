const tituloEj2 = document.querySelector("h1");
tituloEj2.textContent = "NUEVO TITULO :v";
tituloEj2.id = "titulo02";

const parrafos = document.querySelectorAll("p");
parrafos.forEach((p) => {
  p.classList.add("parrafo02");
});



// esto si es sacado de ia, no sabía na' de esto. 
tituloEj2.style.color = "darkblue";
tituloEj2.style.fontSize = "48px";
tituloEj2.style.textAlign = "center";