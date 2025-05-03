import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.development';
import { Observable } from 'rxjs';
import { Serie } from './serie';

@Injectable({
  providedIn: 'root'
})
export class SerieService {

  /** URL base de la API, definida en environment */
  private readonly apiUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) {}

  /**
   * Obtiene la lista de series desde el backend (formato JSON).
   * @returns Observable con arreglo de objetos Serie
   */
  getSeries(): Observable<Serie[]> {
    return this.http.get<Serie[]>(this.apiUrl);
  }

}
