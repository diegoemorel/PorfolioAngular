import { UsserServiceService } from './../../servicios/usser-service.service';
//import { ServiceService } from './../../servicios/service.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usser } from 'src/app/Modelo/Usser';
import { ColdObservable } from 'rxjs/internal/testing/ColdObservable';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
 
  
})
export class FormComponent implements OnInit {

  usser: Usser = new Usser();
  constructor(private usserServ: UsserServiceService){}

  ngOnInit(): void {
    console.log(this.usser);
  }
  addContact()  //nuevooooooo
  {
    this.usserServ.registrerContact(this.usser).subscribe(dato=>{alert(" ¡ You message has been recived ! ")
    },error => console.log(error))
     // 
    }
 
  onSubmit()
  {
    this.addContact();
    console.log(this.usser);
  }
  

}
