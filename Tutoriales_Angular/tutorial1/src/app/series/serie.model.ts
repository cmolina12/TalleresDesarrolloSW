// src/app/series/serie.model.ts
export class Serie {
    constructor(
      public id: number,
      public name: string,
      public channel: string,
      public seasons: number,
      public description: string,
      public poster: string,
      public web: string
    ) {}
  }
  