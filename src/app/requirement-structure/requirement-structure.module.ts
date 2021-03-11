import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RequirementStructureRoutingModule } from './requirement-structure-routing.module';
import { AddJobVacancyComponent } from './add-job-vacancy/add-job-vacancy.component';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';



@NgModule({
  declarations: [AddJobVacancyComponent],
  imports: [
    CommonModule,
    RequirementStructureRoutingModule,

    MatSelectModule,
    MatButtonModule,
    MatInputModule,
    MatRadioModule,
    MatCardModule,
    ReactiveFormsModule,
    MatFormFieldModule 
  ]
})
export class RequirementStructureModule { }
