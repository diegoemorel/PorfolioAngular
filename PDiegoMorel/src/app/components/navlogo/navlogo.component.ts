import { TokenService } from './../../servicios/token.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navlogo',
  templateUrl: './navlogo.component.html',
  styleUrls: ['./navlogo.component.css']
})
export class NavlogoComponent implements OnInit {

  isLogged = false;

  constructor(private router: Router, private TokenService: TokenService) { }

  ngOnInit(): void {
    if(this.TokenService.getToken())
    {
      this.isLogged=true;
    }else{
      this.isLogged= false;
    }
  }
  onLogOut():void{

    this.TokenService.logOut();
    window.location.reload();

  }
  login()
  {
    this.router.navigate(["/login"])
  }

}
