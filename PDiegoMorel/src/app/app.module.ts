import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AboutmeComponent } from './components/aboutme/aboutme.component';
import { FormComponent } from './components/form/form.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProyectsComponent } from './components/proyects/proyects.component';
import { TimelineComponent } from './components/timeline/timeline.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import {EditdataComponent} from './components/editdata/editdata.component';
import { NavlogoComponent } from './components/navlogo/navlogo.component';
import { EdittimelineComponent } from './components/edittimeline/edittimeline.component';
import { EditproyectComponent } from './components/editproyect/editproyect.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { interceptorProvider } from './servicios/interceptor.service';
import { UpdateSettingComponent } from './components/update-setting/update-setting.component';
import { SkillsComponent } from './components/skills/skills.component';


@NgModule({
  declarations: [
    AppComponent,
    AboutmeComponent,
    FormComponent,
    FooterComponent,
    ProyectsComponent,
    TimelineComponent,
    NavbarComponent,
    EditdataComponent,
    NavlogoComponent,
    EdittimelineComponent,
    EditproyectComponent,
    LoginComponent,
    HomeComponent,
    UpdateSettingComponent,
    SkillsComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    interceptorProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
