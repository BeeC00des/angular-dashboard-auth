import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login.component';
import { LandingComponent } from '../../landing/landing/landing.component';
import { MainComponent } from 'src/app/dashboard/main/main.component';

const routes: Routes = [
  {
    path: 'login', component: LoginComponent,
    // children: [{path:'login', component:LoginComponent}] 
  },
  {
    path:'', component:LandingComponent
  },
  {
    path:'main', component:MainComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
