import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeMasterRoutingModule } from './employee-master-routing.module';
import { SearchEmployeeComponent } from './search-employee/search-employee.component';

import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import { AddEmployeeComponent } from './add-employee/add-employee.component';

import {MatExpansionModule} from '@angular/material/expansion';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { ShowEmployeesComponent } from './show-employees/show-employees.component';

import {MatTableModule} from '@angular/material/table';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';

import {MatStepperModule} from '@angular/material/stepper';

@NgModule({
  declarations: [SearchEmployeeComponent, AddEmployeeComponent, ShowEmployeesComponent, EmployeeDetailsComponent],
  imports: [
    CommonModule,
    EmployeeMasterRoutingModule,
    CommonModule,
    MatSelectModule,
    MatButtonModule,
    MatInputModule,
    MatRadioModule,
    MatCardModule,
    ReactiveFormsModule,
    MatIconModule,
    MatGridListModule,
    MatExpansionModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTableModule,
    MatProgressSpinnerModule,
    MatStepperModule
  ],
  providers:[MatNativeDateModule ]
})
export class EmployeeMasterModule { }
