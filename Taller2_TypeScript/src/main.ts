import { series } from "./data.js";

const tablaSeries = document.getElementById("tablaSeries")!.getElementsByTagName("tbody")[0];
const detalleDiv = document.getElementById("detalleSerie")!;
const promedioElemento = document.getElementById("promedioTemporadas");

series.forEach((serie) => {
  const fila = document.createElement("tr");

  fila.innerHTML = `
    <td>${serie.id}</td>
    <td style="color:blue; cursor:pointer;">${serie.name}</td>
    <td>${serie.channel}</td>
    <td>${serie.seasons}</td>
  `;

  // 👇 Evento para mostrar detalles
  fila.addEventListener("click", () => {
    mostrarDetalleSerie(serie);
  });

  tablaSeries.appendChild(fila);
});

function calcularPromedioTemporadas(): number {
  let total = series.reduce((acc, serie) => acc + serie.seasons, 0);
  return total / series.length;
}

if (promedioElemento) {
  promedioElemento.textContent = `Promedio de temporadas: ${calcularPromedioTemporadas().toFixed(2)}`;
}

function mostrarDetalleSerie(serie: any): void {
  detalleDiv.innerHTML = `
    <div class="card">
      <img src="${serie.image}" class="card-img-top" alt="${serie.name}">
      <div class="card-body">
        <h5 class="card-title">${serie.name}</h5>
        <p class="card-text">${serie.description}</p>
        <a href="${serie.link}" target="_blank" class="btn btn-primary">Ver más</a>
      </div>
    </div>
  `;
}