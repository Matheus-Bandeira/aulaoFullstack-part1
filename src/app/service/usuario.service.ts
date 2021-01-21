import { Usuario } from './../model/usuario';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const URL = 'http://localhost:3000/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) { }

  public findAll() {
    return this.http.get<Usuario[]>(`${URL}`);
  }

  // public create(){

  // }

  // public delete (){}
}
