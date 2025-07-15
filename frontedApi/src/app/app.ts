import { Component } from '@angular/core';
import { FestivosService } from './services/festivos.service';
import { Festivo } from './models/festivo.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent {
  anio: number;
  fecha: string;
  festivos: Festivo[] = [];
  esFestivo: string = '';

  constructor(private festivoService: FestivosService) {}

  buscarFestivos(): void {
    if (!this.anio) return;
    this.festivoService.getFestivosPorAnio(this.anio).subscribe(data => {
      this.festivos = data;
    });
  }

  validarFecha(): void {
    if (!this.fecha) return;
    this.festivoService.validarSiEsFestivo(this.fecha).subscribe(data => {
      this.esFestivo = data ? 'Sí es festivo 🎉' : 'No es festivo 😐';
    });
  }
}
