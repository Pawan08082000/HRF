import { EventCalendarComponent } from './event-calendar/event-calendar.component';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
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
import { FullCalendarModule,  } from '@fullcalendar/angular'; // for FullCalendar
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin
import interactionPlugin from '@fullcalendar/interaction'
import timegridPlugin from '@fullcalendar/timegrid'
import listgridPlugin from '@fullcalendar/list'


FullCalendarModule.registerPlugins([ // register FullCalendar plugins
  dayGridPlugin,
  interactionPlugin,
  timegridPlugin,
  listgridPlugin
]);
@NgModule({
  declarations: [EventCalendarComponent,LeaveFormComponent],
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
    MatCardModule,
    FullCalendarModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
})
export class LeaveRequestModule { }
