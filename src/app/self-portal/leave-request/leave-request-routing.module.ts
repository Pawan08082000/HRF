import { EventCalendarComponent } from './event-calendar/event-calendar.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LeaveFormComponent } from './leave-form/leave-form.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'form',
        component: LeaveFormComponent,
        // canActivate: [LoggedInAuthGuard],
      },
      {
        path: 'calendar',
        component: EventCalendarComponent,
        // canActivate: [LoggedInAuthGuard],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LeaveRequestRoutingModule {}
