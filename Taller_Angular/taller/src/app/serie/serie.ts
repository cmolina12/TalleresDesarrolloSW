// src/app/series/serie.model.ts

/**
 * Modelo que representa una serie de televisión.
 */
export class Serie {
  constructor(
    public readonly id: number,
    public name: string,
    public channel: string,
    public seasons: number,
    public description: string,
    public webpage: string,
    public poster: string
  ) {}

  /**
   * Devuelve el nombre de la serie seguido del número de temporadas.
   * Ejemplo: "Breaking Bad (5 temporadas)"
   */
  get titleWithSeasons(): string {
    return `${this.name} (${this.seasons} temporadas)`;
  }
}
