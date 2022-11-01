import { Logo } from './../Modelo/Logo';
import { Proyects } from './../Modelo/Proyects';
import { Experience } from './../Modelo/Experience';
import { Aboutme } from './../Modelo/AboutMe';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PorfolioService {
  private baseURL = 'https://bknproyectdm.herokuapp.com/api';
  constructor(private http:HttpClient) { }

  //-----------------///
  getDataAbout():Observable<Aboutme> //aboutMe
  {
    return this.http.get<Aboutme>(`${this.baseURL}`+"/aboutme")

  }

  getDataAboutById():Observable<Aboutme>
  {
    return this.http.get<Aboutme>(`${this.baseURL}`+"/aboutme/1")
  }
 
  upDate(update:Aboutme):Observable<any>
  {
    return this.http.put<any>(`${this.baseURL}`+"/update-aboutme",update);
    //return this.http.put('/api/updata-aboutme',update);
  }

  //-----------------/////experience
  getDataExp(): Observable<Experience>{
    return this.http.get<Experience>(`${this.baseURL}`+"/experience")
  }

   upDataExp(up:Experience):Observable<any>
   {
    return this.http.put<any>(`${this.baseURL}`+"/upexperience",up);

   } 
   deleteExp(i:number):Observable<any>
  {
    return this.http.delete<any>(`${this.baseURL}`+`/deleteexp/${i}`);
  }

  addDataExp(add:Experience):Observable<any>
  {
    return this.http.post<any>(`${this.baseURL}`+"/addexp",add);
  }
    //-----------------/////proyects

  
  
    getDataMyP():Observable<Proyects>{
    return this.http.get<Proyects>(`${this.baseURL}`+"/myproyects")
  } 

  upDataMyP(up:Proyects):Observable<any>
  {
   return this.http.put<any>(`${this.baseURL}`+"/upProyects",up);

  } 

  deleteDataMyp(i:number):Observable<any>
  {
    return this.http.delete<any>(`${this.baseURL}`+`/deleteproyect/${i}`);
  }

  addDataMyp(add:Proyects):Observable<any>
  {
    return this.http.post<any>(`${this.baseURL}`+"/addproyect",add);
  }

  // logo-----
  getDataLogo():Observable<Logo>
  {
    return this.http.get<Logo>(`${this.baseURL}`+"/logo");
  }
  upDataLogo(up:Logo):Observable<any>
  {
    return this.http.put<any>(`${this.baseURL}`+"/uplogo",up);
  }
}
