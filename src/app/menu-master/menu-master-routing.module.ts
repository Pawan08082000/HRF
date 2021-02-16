import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth/auth.guard';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        //this is for lazy loading
        path: 'emplMaster',
        loadChildren: () =>
          import('./employee-master/employee-master.module').then((m) => m.EmployeeMasterModule),
        canActivate: [AuthGuard],

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
export class MenuMasterRoutingModule { }
