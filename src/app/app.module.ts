import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { ForgotPasswordComponent } from './component/forgot-password/forgot-password.component';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';
import { AuthModule } from './auth/auth.module';

import { SecurityModule } from './security/security.module';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ForgotPasswordComponent,
    PageNotFoundComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SecurityModule,  // step 1 for security module
    AuthModule,  // step 1 for set auth module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
