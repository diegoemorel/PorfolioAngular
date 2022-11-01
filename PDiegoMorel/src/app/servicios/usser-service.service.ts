import { Usser } from 'src/app/Modelo/Usser';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsserServiceService {
  private baseURL = 'https://bknproyectdm.herokuapp.com/auth';
  constructor(private httpCliente: HttpClient) {

  }
  registrerContact(usser: Usser): Observable<any> {
    return this.httpCliente.post<any>(`${this.baseURL}` + '/contact', usser);
  }
}
