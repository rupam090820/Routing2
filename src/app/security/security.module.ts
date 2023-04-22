import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecurityRoutingModule } from './security-routing.module';
import { SecurityComponent } from './security.component';
import { CourseComponent } from './component/course/course.component';
import { FeesComponent } from './component/fees/fees.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    SecurityComponent,
    CourseComponent,
    FeesComponent
  ],
  imports: [
    CommonModule,
    SecurityRoutingModule,
    RouterModule,  // add router module step 1
  ]
})
export class SecurityModule { }  // step 2:- copy SecurityModule and past into app.module.ts
