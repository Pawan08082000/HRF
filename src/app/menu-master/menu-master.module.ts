import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuMasterRoutingModule } from './menu-master-routing.module';
import {EmployeeMasterModule} from './employee-master/employee-master.module'
import { Routes } from '@angular/router';



const routes: Routes = [
  {
    //this is for lazy loading
    path: 'employeeMaster',
    loadChildren: () =>
      import('./employee-master/employee-master.module').then((m) => m.EmployeeMasterModule),
  },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MenuMasterRoutingModule,
    EmployeeMasterModule,
    
  ]
})

export class MenuMasterModule { }
