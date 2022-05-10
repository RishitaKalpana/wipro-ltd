import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { UtilityComponent } from './utility/utility.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { EmployeeComponent } from './employee/employee.component';
import { TeamComponent } from './team/team.component';
const routes: Routes = [
  { path:'',component:HomeComponent},
  { path:'util',component:UtilityComponent},
  {path:'kal',component:AboutComponent},
  {path:'contact',component:ContactComponent},
  {path:'employee',component:EmployeeComponent},
  {path:'team',component:TeamComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
