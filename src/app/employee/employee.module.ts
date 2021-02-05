import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { ProfileComponent } from './profile/profile.component';
import { EmployeeProfileComponent } from './employee-profile/employee-profile.component';
import { EditEmployeeProfileComponent } from './edit-employee-profile/edit-employee-profile.component';

@NgModule({
  declarations: [
    ProfileComponent,
    EmployeeProfileComponent,
    EditEmployeeProfileComponent,
  ],
  imports: [CommonModule, EmployeeRoutingModule],
})
export class EmployeeModule {}
