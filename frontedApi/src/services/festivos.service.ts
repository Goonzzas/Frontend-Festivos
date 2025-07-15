import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Festivo } from '../models/festivo.model';

@Injectable({ providedIn: 'root' })
export class FestivosService {
  private baseUrl = 'http://localhost:8080/api/festivos';

  constructor(private http: HttpClient) {}

  getFestivosPorAnio(anio: number): Observable<Festivo[]> {
    return this.http.get<Festivo[]>(`${this.baseUrl}/anio/${anio}`);
  }

  validarSiEsFestivo(fecha: string): Observable<boolean> {
    return this.http.get<boolean>(`${this.baseUrl}/validar?fecha=${fecha}`);
  }
}
