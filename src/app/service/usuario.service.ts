import { Usuario } from './../model/usuario';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

// const URL = 'http://localhost:3000/usuario';
const URL = 'http://localhost:3002';

// CRUD

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) { }

  public findAll() {
    return this.http.get<Usuario[]>(`${URL}`);
  }

  public create(usuario: Usuario) {
    return this.http.post<Usuario>(`${URL}`, usuario);
  }

  public findById(id: number) {
    return this.http.get<Usuario>(`${URL}/${id}`);
  }


  public update(id: number, usuario: Usuario) {
    return this.http.patch<Usuario>(`${URL}/${id}`, usuario);
  }

  public delete (id: number) {
    // return this.http.delete<Usuario>('http://localhost:3000/usuario/' + id);

    return this.http.delete<Usuario>(`${URL}/${id}`);
  }
}
