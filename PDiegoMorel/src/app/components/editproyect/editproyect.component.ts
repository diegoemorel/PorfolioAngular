import { PorfolioService } from './../../servicios/porfolio.service';
import { Proyects } from './../../Modelo/Proyects';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editproyect',
  templateUrl: './editproyect.component.html',
  styleUrls: ['./editproyect.component.css']
})
export class EditproyectComponent implements OnInit {
  actualizar:Proyects= new Proyects();
  delete:Proyects=new Proyects();
  //add:Proyects=new Proyects();
  i:number;

  constructor(private datos: PorfolioService) { }

  ngOnInit(): void {
  }


  actualizarProyect()
  {
    this.datos.upDataMyP(this.actualizar).subscribe(data =>{alert("Congratulations! UPDATE")},error =>console.log(error));
  }


  deleteProyect()
  {
    this.i=this.delete.id;
    this.datos.deleteDataMyp(this.i).subscribe(data =>{alert("Congratulations! DELETED")},error =>console.log(error));
  }
  addProyect()
  {
    this.datos.addDataMyp(this.actualizar).subscribe(data=>{alert("Congratulations! Add")},error =>console.log(error))
  }

  onSubmit()
  {
    this.actualizarProyect();
  }

  onDelete()
  {
    this.deleteProyect()
  }
  onAdd()
  {
    this.addProyect();
  }
}
