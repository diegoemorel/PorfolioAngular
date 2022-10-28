import { Aboutme } from './../Modelo/AboutMe';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PorfolioService {
  private baseURL = "http://localhost:8080/api"
  constructor(private http:HttpClient) { }

  //-----------------///
  getDataAbout():Observable<any> //aboutMe
  {
    return this.http.get(`${this.baseURL}`+"/aboutme")

  }

  getDataAboutById():Observable<Object>
  {
    return this.http.get(`${this.baseURL}`+"/aboutme/1")
  }
 
  upDate(update:Aboutme)
  {
    return this.http.put(`${this.baseURL}`+"/update-aboutme",update);
  }

  //-----------------/////experience
  getDataExp(){
    return this.http.get(`${this.baseURL}`+"/experience")
    //-----------------/////proyects

  } 
  getDataMyP(){
    return this.http.get(`${this.baseURL}`+"/myproyects")
  } 
}
