import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'kata1';
  usuario: any;

  public agregarUsuario(nuevoNombre: string): void {
    this.usuario.push({
      nombre: nuevoNombre,
      apellido: 'Garcia',
      telefono: 99,
      direccion: 'Angel'
    });

  }
}
