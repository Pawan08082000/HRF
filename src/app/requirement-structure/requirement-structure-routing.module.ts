import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AddJobVacancyComponent } from './add-job-vacancy/add-job-vacancy.component';
import { AuthGuard } from '../auth/auth.guard';
import { ViewJobVacancyComponent } from './view-job-vacancy/view-job-vacancy.component';
import { FixingInterviewComponent } from './fixing-interview/fixing-interview.component';
import { ViewInterviewsComponent } from './view-interviews/view-interviews.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'addJob',
        component: AddJobVacancyComponent,
        canActivate: [AuthGuard],

      },
      {
        path: "viewJobVacancies",
        component: ViewJobVacancyComponent,
      },
      {
        path: "fixInterview",
        component: FixingInterviewComponent,
        canActivate: [AuthGuard]
      },
      {
        path: "interviews",
        component: ViewInterviewsComponent,
        canActivate: [AuthGuard]
      },
      {
        path: "editJob/:id",
        component: AddJobVacancyComponent,
        canActivate: [AuthGuard]
      },
      {
        path: "editSchedule/:id",
        component: FixingInterviewComponent,
        canActivate: [AuthGuard]
      }
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)

  ],
  exports: [RouterModule]
})
export class RequirementStructureRoutingModule { }
