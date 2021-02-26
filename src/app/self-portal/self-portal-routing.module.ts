import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../auth/auth.guard';


const routes: Routes = [
  {
    path: '',
    children: [
      {
        //this is for lazy loading
        path: 'leaveReq',
        loadChildren: () =>
          import('./leave-request/leave-request.module').then((m) => m.LeaveRequestModule),
        canActivate: [AuthGuard],

      },
    ],
  },
 
  
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SelfPortalRoutingModule { }
