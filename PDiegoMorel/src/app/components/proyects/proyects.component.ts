import { PorfolioService } from './../../servicios/porfolio.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-proyects',
  templateUrl: './proyects.component.html',
  styleUrls: ['./proyects.component.css']
})
export class ProyectsComponent implements OnInit {
  datas:any;
  constructor(private datos:PorfolioService) { }

  ngOnInit(): void {
   this.datos.getDataMyP().subscribe( data =>{
    this.datas=data;})
   
  }

}
