import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrainingRoutingModule } from './training-routing.module';
import { TrainingFeedbackComponent } from './training-feedback/training-feedback.component';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [TrainingFeedbackComponent],
  imports: [
    CommonModule,
    TrainingRoutingModule,
    MatCardModule,
    MatInputModule,
    MatSelectModule,
    ReactiveFormsModule,



  ]
})
export class TrainingModule { }
