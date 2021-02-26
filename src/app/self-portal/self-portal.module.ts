import { LeaveRequestModule } from './leave-request/leave-request.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelfPortalRoutingModule } from './self-portal-routing.module';
import { Routes } from '@angular/router';


const routes: Routes = [
  {
    //this is for lazy loading
    path: 'leaveReq',
    loadChildren: () =>
      import('./leave-request/leave-request.module').then((m) => m.LeaveRequestModule),
  },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SelfPortalRoutingModule,
    LeaveRequestModule
  ]
})
export class SelfPortalModule { }
