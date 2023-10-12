import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './loginpage/login/login.component';
import { MainComponent } from './dashboard/main/main.component';
import { LandingComponent } from './landing/landing/landing.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./loginpage/login/login.module').then((m) => m.LoginModule),
  },
  {
    path:'login',
    component: LoginComponent
  },
  {
    path:'',
    component: LandingComponent
  },
  {
    path:'main',
    component: MainComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
