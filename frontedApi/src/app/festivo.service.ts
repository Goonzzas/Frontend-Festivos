import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FestivoService {
  private apiUrl = 'http://localhost:8080/festivos';

  constructor(private http: HttpClient) {}

  // Añade tipos explícitos
  verificarFecha(fecha: string): Observable<{ esFestivo: boolean, nombre?: string }> {
    return this.http.get<{ esFestivo: boolean, nombre?: string }>(
      `${this.apiUrl}/verificar?fecha=${fecha}`
    );
  }

  listarFestivosAnio(anio: number): Observable<{ nombre: string, fecha: string }[]> {
    return this.http.get<{ nombre: string, fecha: string }[]>(
      `${this.apiUrl}/listar/${anio}`
    );
  }
}