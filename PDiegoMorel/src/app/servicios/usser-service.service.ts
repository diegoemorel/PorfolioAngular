import { Usser } from 'src/app/Modelo/Usser';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsserServiceService {
  private baseURL = "http://localhost:8080/api";
  constructor(private httpCliente: HttpClient) {

  }
  registrerContact(usser: Usser): Observable<Object> {
    return this.httpCliente.post(`${this.baseURL}` + "/contact", usser);
  }
}
