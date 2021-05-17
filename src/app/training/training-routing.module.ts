import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TrainingFeedbackComponent } from './training-feedback/training-feedback.component';
import { ViewTrainingComponent } from './view-training/view-training.component';
import { AddTrainingComponent } from './add-training/add-training.component';
import { AuthGuard } from '../auth/auth.guard';


const routes: Routes = [
  {
    path: '',
    children: [
      {
        //this is for lazy loading
        path: 'trainingFeedback/:id',
        // canActivate: [AuthGuard],
        component: TrainingFeedbackComponent
      },
      {
        //this is for lazy loading
        path: 'viewTrainings',
        // canActivate: [AuthGuard],
        component: ViewTrainingComponent
      },
      {
        //this is for lazy loading
        path: 'addTraining',
        canActivate: [AuthGuard],
        component: AddTrainingComponent
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
  exports: [
    RouterModule
  ]
})
export class TrainingRoutingModule { }
