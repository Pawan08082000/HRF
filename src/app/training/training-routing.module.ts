import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TrainingFeedbackComponent } from './training-feedback/training-feedback.component';


const routes: Routes = [
  {
    path: '',
    children: [
      {
        //this is for lazy loading
        path: 'trainingFeedback',
        // canActivate: [AuthGuard],
        component: TrainingFeedbackComponent
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
