import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../auth/auth.guard';
import { EditPayHeadComponent } from './edit-pay-head/edit-pay-head.component';
import { NoticeComponent } from './notice/notice.component';
import { OrgChartComponent } from './org-chart/org-chart.component';
import { PayHeadListComponent } from './pay-head-list/pay-head-list.component';


const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'payHead',
        component: EditPayHeadComponent,
        canActivate: [AuthGuard],

      },
      {
        path: 'notice',
        component: NoticeComponent,
        canActivate: [AuthGuard],

      },
      {
        path: '**',
        component: OrgChartComponent,
        canActivate: [AuthGuard],

      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrganizationStructureRoutingModule { }
