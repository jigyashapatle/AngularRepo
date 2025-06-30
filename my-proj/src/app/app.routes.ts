import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { CareerComponent } from './career/career.component';
import { NotmatchComponent } from './notmatch/notmatch.component';
import { EmployeelistComponent } from './employeelist/employeelist.component';
import { EmployeeComponent } from './employee/employee.component';

export const routes: Routes = [
    {path:'home',component:HomeComponent,pathMatch:'full'},
    {path:'aboutus',component:AboutusComponent},
    {path:'career',component:CareerComponent},
    {path:'emplist',component:EmployeelistComponent},
    {path:'emp/:id',component:EmployeeComponent},
    {path:'**',component:NotmatchComponent}
];
