import { Component, OnInit } from '@angular/core';
import { Usuario } from './usuario';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.sass']
})
export class UsuarioComponent implements OnInit {
  public usuario: Usuario;

  constructor() {
    this.usuario = {
      nombre: 'Paula',
      apellido: 'Garcia',
      telefono: 99999,
      direccion: 'calle la Luna'
    };
    /* this.usuario.nombre = 'Paula';
    this.usuario.apellido = 'Garcia';
    this.usuario.telefono = 99999;
    this.usuario.direccion = 'calle la Luna'; */
   }

  ngOnInit() {
  }

}
