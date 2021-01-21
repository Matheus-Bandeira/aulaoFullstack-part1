import { Usuario } from './../model/usuario';
import { UsuarioService } from './../service/usuario.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usuario-list',
  templateUrl: './usuario-list.component.html',
  styleUrls: ['./usuario-list.component.css']
})
export class UsuarioListComponent implements OnInit {


  usuario: Usuario;
  usuarios: Usuario[] = [];

  constructor(private service: UsuarioService) { }

  ngOnInit() {
    this.listar();
  }

  listar() {
    this.service.findAll().subscribe((dados) => {
      this.usuarios = dados;
    })
  }

}
