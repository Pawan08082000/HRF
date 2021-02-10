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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
