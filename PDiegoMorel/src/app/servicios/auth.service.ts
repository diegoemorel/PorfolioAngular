import { JwtDto } from './../Modelo/jwt-dto';
import { LoginUsuario } from './../Modelo/login-usuario';
import { Observable } from 'rxjs';
import { NuevoUsuario } from './../Modelo/nuevo-usuario';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authURL = 'https://bknproyectdm.herokuapp.com/auth/';

  constructor(private httpClient : HttpClient) { }

  public nuevo(nuevoUsuario: NuevoUsuario):Observable<any>
  {
    return this.httpClient.post<any>(this.authURL+ "nuevo", nuevoUsuario);
  }
  public login(loginUsuario : LoginUsuario): Observable<JwtDto>
  {
    return this.httpClient.post<JwtDto>(this.authURL+ "login" , loginUsuario);
  }
}
