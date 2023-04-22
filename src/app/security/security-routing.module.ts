import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseComponent } from './component/course/course.component';
import { FeesComponent } from './component/fees/fees.component';
import { SecurityComponent } from './security.component';

const routes: Routes = [{ path: '', component: SecurityComponent,children:[
  {path:'fees',component:FeesComponent},
  {path:'course',component:CourseComponent},  // add childer of security module
] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SecurityRoutingModule { }
