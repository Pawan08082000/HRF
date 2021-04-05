import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    //this is for lazy loading
    path: 'auth',
    loadChildren: () =>
      import('./auth/auth.module').then((m) => m.AuthModule),
  },
  {
    //this is for lazy loading
    path: 'home',
    loadChildren: () =>
      import('./global/global.module').then((m) => m.GlobalModule),
  },
  {
    //this is for lazy loading
    path: 'emp',
    loadChildren: () =>
      import('./employee/employee.module').then((m) => m.EmployeeModule),
  },
  {
    //this is for lazy loading
    path: 'menuMaster',
    loadChildren: () =>
      import('./menu-master/menu-master.module').then((m) => m.MenuMasterModule),
  },
  {
    //this is for lazy loading
    path: 'selfPortal',
    loadChildren: () =>
      import('./self-portal/self-portal.module').then((m) => m.SelfPortalModule),
  },
  {
    //this is for lazy loading
    path: 'reqStr',
    loadChildren: () =>
      import('./requirement-structure/requirement-structure.module').then(
        (m) => m.RequirementStructureModule),
  },
  {
    path: 'training',
    loadChildren: () =>
      import('./training/training.module').then(
        (m) => m.TrainingModule
      ),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
