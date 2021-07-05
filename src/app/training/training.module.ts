import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrainingRoutingModule } from './training-routing.module';
import { TrainingFeedbackComponent } from './training-feedback/training-feedback.component';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';
import { ViewTrainingComponent } from './view-training/view-training.component';
import { AddTrainingComponent } from './add-training/add-training.component';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { DisplayFeedbackComponent } from './display-feedback/display-feedback.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';



@NgModule({
  declarations: [TrainingFeedbackComponent, ViewTrainingComponent, AddTrainingComponent, DisplayFeedbackComponent],
  imports: [
    CommonModule,
    TrainingRoutingModule,
    MatCardModule,
    MatInputModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatIconModule,
    MatExpansionModule,
    MatDividerModule,
    MatListModule
  ]
})
export class TrainingModule { }
