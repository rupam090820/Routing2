import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupComponent } from './component/signup/signup.component';
import { AuthComponent } from './auth.component';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './component/header/header.component';



@NgModule({
  declarations: [
   
    SignupComponent,
    AuthComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class AuthModule { }
