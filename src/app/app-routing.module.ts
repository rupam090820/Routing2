import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { HeaderComponent } from './auth/component/header/header.component';
import { SignupComponent } from './auth/component/signup/signup.component';
import { ForgotPasswordComponent } from './component/forgot-password/forgot-password.component';
import { LoginComponent } from './component/login/login.component';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  
  { path: 'auth', component: AuthComponent,children: [
      
      { path: 'signup', component: SignupComponent },
      { path:'header',component:HeaderComponent },
      
    ]
  },
  { path: 'security', loadChildren: () => import('./security/security.module').then(m => m.SecurityModule) },

  { path: '**', component: PageNotFoundComponent },  // for if wrong typing in the URL
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
