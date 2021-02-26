import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LeaveRequestRoutingModule } from './leave-request-routing.module';
import { LeaveFormComponent } from './leave-form/leave-form.component';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';


@NgModule({
  declarations: [LeaveFormComponent],
  imports: [
    CommonModule,
    LeaveRequestRoutingModule,
    MatSelectModule,
    MatButtonModule,
    MatInputModule,
    MatRadioModule,
    MatRadioModule,
    ReactiveFormsModule,
    MatIconModule,
    MatGridListModule,
    MatExpansionModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTableModule,
    MatCardModule
  ]
})
export class LeaveRequestModule { }
