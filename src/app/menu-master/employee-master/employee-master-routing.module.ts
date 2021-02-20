import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SearchEmployeeComponent } from './search-employee/search-employee.component';
import { LoggedInAuthGuard } from 'src/app/auth/auth.guard';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { ShowEmployeesComponent } from './show-employees/show-employees.component';


const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'emplSearch',
        component: SearchEmployeeComponent,
        // canActivate: [LoggedInAuthGuard],
      },
      {
        path: 'addEmployee',
        component: AddEmployeeComponent,
        // canActivate: [LoggedInAuthGuard],
      },
      {
        path: 'showEmployee/:q',
        component: ShowEmployeesComponent
      }
    ],
  },
  
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class EmployeeMasterRoutingModule { }
