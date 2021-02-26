import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SearchEmployeeComponent } from './search-employee/search-employee.component';
import { LoggedInAuthGuard } from 'src/app/auth/auth.guard';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { ShowEmployeesComponent } from './show-employees/show-employees.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';


const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'emplSearch',
        component: SearchEmployeeComponent,
        // canActivate: [LoggedInAuthGuard],
        data: {title: 'Search Employee'}
      },
      {
        path: 'addEmployee',
        component: AddEmployeeComponent,
        // canActivate: [LoggedInAuthGuard],
        data: {title: 'Add Employee'}
      },
      {
        path: 'addEmployee/:id',
        component: AddEmployeeComponent,
        // canActivate: [LoggedInAuthGuard],
        data: {title: 'Edit Employee Details'}
      },
      {
        path: 'showEmployee/:q',
        component: ShowEmployeesComponent
      },
      {
        path: 'empDetails/:id',
        component: EmployeeDetailsComponent,
        data: {title: 'Employee Details'}
      },
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
