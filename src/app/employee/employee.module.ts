import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { ProfileComponent } from './profile/profile.component';
import { EmployeeProfileComponent } from './employee-profile/employee-profile.component';
import { EditEmployeeProfileComponent } from './edit-employee-profile/edit-employee-profile.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';

@NgModule({
  declarations: [
    ProfileComponent,
    EmployeeProfileComponent,
    EditEmployeeProfileComponent,
  ],
  imports: [CommonModule, EmployeeRoutingModule, MatListModule,MatToolbarModule],
})
export class EmployeeModule {}
