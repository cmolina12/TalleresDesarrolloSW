import { Component, OnInit } from '@angular/core';
import { SerieService } from '../serie.service';
import { Serie } from '../serie';

@Component({
  selector: 'app-serie-list',
  standalone: false,
  templateUrl: './serie-list.component.html',
  styleUrls: ['./serie-list.component.css']
})
export class SerieListComponent implements OnInit {

  series: Serie[] = [];
  selectedSerie: Serie | null = null;

  constructor(private serieService: SerieService) {}

  ngOnInit(): void {
    this.loadSeries();
  }

  /**
   * Obtiene la lista de series desde el servicio y la guarda en el estado local.
   */
  loadSeries(): void {
    this.serieService.getSeries().subscribe(series => {
      this.series = series;
    });
  }

  /**
   * Maneja la selección de una serie.
   * @param serie Serie seleccionada
   */
  selectSerie(serie: Serie): void {
    console.log('Serie seleccionada:', serie.id);
    this.selectedSerie = serie;
  }

  /**
   * Calcula el promedio de temporadas de las series cargadas.
   * @returns número promedio
   */
  calcularPromedioTemporadas(): number {
    if (this.series.length === 0) return 0;

    const totalTemporadas = this.series
      .map(s => s.seasons)
      .reduce((acc, curr) => acc + curr, 0);

    return totalTemporadas / this.series.length;
  }

}
