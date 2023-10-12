import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { LoginRoutingModule } from './login-routing.module';
import { LandingModule } from '../../landing/landing/landing.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    LoginRoutingModule,
    LandingModule
    
  ]
})
export class LoginModule { }
