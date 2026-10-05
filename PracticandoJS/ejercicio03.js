const tecnologias = [
  { nombre: "HTML", descripcion: "Lenguaje que da estructura a las paginas web.", tipo: "Frontend" },
  { nombre: "CSS", descripcion: "Lenguaje que da estilo y diseno a las paginas.", tipo: "Frontend" },
  { nombre: "Git", descripcion: "Sistema para guardar el historial de un proyecto.", tipo: "Herramienta" },
  { nombre: "Node.js", descripcion: "Entorno para ejecutar JavaScript en el servidor.", tipo: "Backend" },
  { nombre: "JavaScript", descripcion: "Lenguaje que da interactividad a las paginas.", tipo: "Lenguaje" },
];


const contenedorTarjetas = document.createElement("div");
contenedorTarjetas.id = "tarjetas";

tecnologias.forEach((tec) => {
  const tarjeta = document.createElement("div");
  tarjeta.style.border = "2px solid black";
  tarjeta.style.margin = "10px";
  tarjeta.style.padding = "10px";

  const nombreTec = document.createElement("h3");
  nombreTec.textContent = tec.nombre;

  const descripcionTec = document.createElement("p");
  descripcionTec.textContent = tec.descripcion;

  const tipoTec = document.createElement("p");
  tipoTec.textContent = "Tipo: " + tec.tipo;

  tarjeta.appendChild(nombreTec);
  tarjeta.appendChild(descripcionTec);
  tarjeta.appendChild(tipoTec);

  contenedorTarjetas.appendChild(tarjeta);
});

document.body.appendChild(contenedorTarjetas);