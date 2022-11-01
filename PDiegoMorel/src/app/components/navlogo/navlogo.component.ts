import { PorfolioService } from './../../servicios/porfolio.service';
import { Logo } from './../../Modelo/Logo';
import { TokenService } from './../../servicios/token.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navlogo',
  templateUrl: './navlogo.component.html',
  styleUrls: ['./navlogo.component.css']
})
export class NavlogoComponent implements OnInit {
  datas:any;
  actualizar:Logo = new Logo();
  isLogged = false;

  constructor(private router: Router, private TokenService: TokenService,private datos:PorfolioService) { }

  ngOnInit(): void {
    if(this.TokenService.getToken())
    {
      this.isLogged=true;
    }else{
      this.isLogged= false;
    }
    this.datos.getDataLogo().subscribe(data =>{
      console.log(data);
     this.datas=data;
  })
}
  onLogOut():void{

    this.TokenService.logOut();
    this.router.navigate(['/login']);
   // window.location.reload();
    

  }
  login()
  {
    this.router.navigate(["/login"])
  }

}
