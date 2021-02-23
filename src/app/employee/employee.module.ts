import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { ProfileComponent } from './profile/profile.component';
import { EmployeeProfileComponent } from './employee-profile/employee-profile.component';
import { EditEmployeeProfileComponent } from './edit-employee-profile/edit-employee-profile.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import {MatDatepickerModule} from '@angular/material/datepicker';  
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    ProfileComponent,
    EmployeeProfileComponent,
    EditEmployeeProfileComponent,
  ],
  imports: [CommonModule,    MatButtonModule,MatDatepickerModule,
    MatCardModule,MatIconModule,
    EmployeeRoutingModule, MatListModule,MatToolbarModule,    MatSelectModule,
    MatButtonModule,
    MatInputModule,],
})
export class EmployeeModule {}
