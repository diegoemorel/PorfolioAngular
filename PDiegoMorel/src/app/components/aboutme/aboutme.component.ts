import { Aboutme } from './../../Modelo/AboutMe';
import { PorfolioService } from './../../servicios/porfolio.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.css']
})
export class AboutmeComponent implements OnInit {
  datas:any;
    constructor(private datos :PorfolioService) { }

  ngOnInit(): void {
      this.datos.getDataAbout().subscribe(data =>{
      console.log(data);
      this.datas=data;
      console.log(this.datas);
      
    })
  }

}
