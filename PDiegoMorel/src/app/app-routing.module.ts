import { AboutmeComponent } from './components/aboutme/aboutme.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { EditproyectComponent } from './components/editproyect/editproyect.component';
import { EdittimelineComponent } from './components/edittimeline/edittimeline.component';
import { EditdataComponent } from './components/editdata/editdata.component';
import { FormComponent } from './components/form/form.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'editaboutme', component: EditdataComponent },
  { path: 'edittimeline', component: EdittimelineComponent },
  { path: 'editproyect', component: EditproyectComponent }
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
