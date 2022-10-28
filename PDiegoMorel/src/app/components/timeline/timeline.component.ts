import { PorfolioService } from './../../servicios/porfolio.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent implements OnInit {
  datas:any;
  constructor(private datos :PorfolioService) { }

  ngOnInit(): void {
    this.datos.getDataExp().subscribe(data =>{
      console.log("estoy en exp")
      console.log(data)
      this.datas=data;
    })
  }

}
