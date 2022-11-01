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
  //aboutGet: any;
  //id:number;
  
  constructor(private datos : PorfolioService) { }

  ngOnInit(): void {
    //console.log(this.upData)
  }
  /*buscarporID()
  {
    console.log("entro al seach")
     this.aboutGet=this.datos.getDataAboutById();
     //console.log(this.aboutGet);
     this.upData=this.aboutGet.id;
     this.updateData();
  }*/
  updateData()
  {
    
    console.log("entrando al PUT<<<<<<")
    this.upData.id=1;
    this.datos.upDate(this.upData).subscribe(data=>{alert("Congratulations! UPDATA!")},error => console.log(error))
   
  }
  onSubmit()
  {
    this.updateData();
   // this.buscarporID;
   // console.log(this.upData)
  }
}
