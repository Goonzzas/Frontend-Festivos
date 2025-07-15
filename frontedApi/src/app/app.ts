import { Component } from '@angular/core';
import { FestivoService } from './services/festivo.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [FormsModule, MatDatepickerModule, MatNativeDateModule]
})
export class App {
  fechaSeleccionada: Date = new Date();
  resultadoValidacion: { esFestivo: boolean, nombre?: string } | null = null;
  anioConsulta: number = new Date().getFullYear();
  festivos: { nombre: string, fecha: string }[] = [];

  constructor(
    private festivoService: FestivoService,
    private snackBar: MatSnackBar
  ) {}

  validarFecha() {
    const fechaFormateada = this.formatDate(this.fechaSeleccionada);
    this.festivoService.verificarFecha(fechaFormateada).subscribe({
      next: (res: any) => this.resultadoValidacion = res,
      error: (err: any) => this.snackBar.open('Error al validar fecha', 'Cerrar')
    });
  }

  listarFestivos() {
    this.festivoService.listarFestivosAnio(this.anioConsulta).subscribe({
      next: (res: any) => this.festivos = res,
      error: (err: any) => this.snackBar.open('Error al obtener festivos', 'Cerrar')
    });
  }

  private formatDate(date: Date): string {
    return date.toISOString().split('T')[0];
  }
}