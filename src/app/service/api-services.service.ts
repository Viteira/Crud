import { Usuario } from './../models/usuario.interface';
import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map, take} from 'rxjs';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ApiServicesService {
  serve:  string = 'http://localhost:56097';
  endPointUser: string ='/Usuarios'
  constructor(private http:HttpClient) { }

  getUsers(): Observable<Usuario[]>{    
    return this.http.get(this.serve + this.endPointUser) as Observable<Usuario[]>;   
  }
  postUsers(newUser: Usuario){        
    return this.http.post<Usuario>(this.serve + this.endPointUser, newUser);
  }
  putUsers(editUser: Usuario){    
    return this.http.put<Usuario>(`${this.serve}${this.endPointUser}/${editUser.usuarioId}`, editUser);
  }
  deleteUser(userId: number){
    return this.http.delete<Usuario>(`${this.serve}${this.endPointUser}/${userId}`);
  }
}
