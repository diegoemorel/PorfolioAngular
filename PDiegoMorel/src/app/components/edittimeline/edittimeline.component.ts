import { PorfolioService } from './../../servicios/porfolio.service';
import { Experience } from './../../Modelo/Experience';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edittimeline',
  templateUrl: './edittimeline.component.html',
  styleUrls: ['./edittimeline.component.css']
})
export class EdittimelineComponent implements OnInit {
 actualizar:Experience= new Experience();
 delete:Experience = new Experience();
 i:number;
  constructor(private datos: PorfolioService) { }



  ngOnInit(): void {
  }

  
actualizarDatos()
{
  this.datos.upDataExp(this.actualizar).subscribe(data =>{alert("Congratulations! UPDATE")},error =>console.log(error));
}

deleteExp()
{
  this.i=this.delete.id_exp;
  this.datos.deleteExp(this.i).subscribe(data =>{alert("Congratulations! DELETED")},error =>console.log(error));
 
}
addExp()
{
  this.datos.addDataExp(this.actualizar).subscribe(data =>{alert("Congratulations! ADD")},error =>console.log(error));
}


 onSubmit()
 {
  this.actualizarDatos();
 }
 onDelet()
 {
   this.deleteExp();
 }
 onADD()
 {
  this.addExp();
 }
}
