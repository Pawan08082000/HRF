import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AddJobVacancyComponent } from './add-job-vacancy/add-job-vacancy.component';
import { AuthGuard } from '../auth/auth.guard';
import { ViewJobVacancyComponent } from './view-job-vacancy/view-job-vacancy.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'addJobVacancy',
        component: AddJobVacancyComponent,
        canActivate: [AuthGuard],

      },
      {
        path: "viewJobVacancies",
        component: ViewJobVacancyComponent,
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
