import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SearchEmployeeComponent } from './search-employee/search-employee.component';
import { LoggedInAuthGuard } from 'src/app/auth/auth.guard';
import { AddEmployeeComponent } from './add-employee/add-employee.component';


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
