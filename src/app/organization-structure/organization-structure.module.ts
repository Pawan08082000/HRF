import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatCardModule } from '@angular/material/card';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { OrganizationStructureRoutingModule } from './organization-structure-routing.module';
import { PayHeadListComponent } from './pay-head-list/pay-head-list.component';
import { NoticeComponent } from './notice/notice.component';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSortModule } from '@angular/material/sort';
import { MatIconModule } from '@angular/material/icon';
import { EditPayHeadComponent } from './edit-pay-head/edit-pay-head.component';
import { OrgChartComponent } from './org-chart/org-chart.component';
import { DiagramModule, HierarchicalTreeService, DataBindingService } from '@syncfusion/ej2-angular-diagrams';


@NgModule({
  declarations: [PayHeadListComponent, NoticeComponent, EditPayHeadComponent, OrgChartComponent],
  imports: [
    CommonModule,
    OrganizationStructureRoutingModule,
    MatCardModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatIconModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatDatepickerModule,
    FormsModule,
    ReactiveFormsModule,
    DiagramModule
  ],
  providers: [HierarchicalTreeService, DataBindingService],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
})
export class OrganizationStructureModule { }
