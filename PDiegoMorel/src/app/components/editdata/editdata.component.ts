import { Aboutme } from './../../Modelo/AboutMe';
import { PorfolioService } from './../../servicios/porfolio.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editdata',
  templateUrl: './editdata.component.html',
  styleUrls: ['./editdata.component.css']
})
export class EditdataComponent implements OnInit {
  upData:Aboutme = new Aboutme;
  
  constructor(private datos : PorfolioService) { }

  ngOnInit(): void {
    console.log(this.upData)
  }
  updateData()
  {
    console.log("entrando al PUT<<<<<<")
    this.datos.upDate(this.upData).subscribe(data=>{alert("Congratulations! UPDATA!")},error => console.log(error))
   
  }
  onSubmit()
  {
    this.updateData();
    console.log(this.upData)
  }
}
