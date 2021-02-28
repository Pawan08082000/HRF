import { Component, OnInit,ViewChild } from '@angular/core';
import { CalendarOptions, FullCalendarComponent } from '@fullcalendar/angular'; // useful for typechecking


@Component({
  selector: 'app-event-calendar',
  templateUrl: './event-calendar.component.html',
  styleUrls: ['./event-calendar.component.scss']
})
export class EventCalendarComponent implements OnInit {

  @ViewChild('calendar') calendarComponent: FullCalendarComponent;

  constructor(){}

  ngOnInit(){}

  calendarOptions: CalendarOptions = {
    initialView: 'dayGridWeek',
    editable: false,  
    events: [
      { title: 'event 1', date: '2021-02-28' },
      { title: 'event 2', date: '2021-03-02' }
    ]
  };

  handleDateClick(arg) {
    alert('date click! ' + arg.dateStr)
  }

  eventClick(model){
    alert('date click! ' + model.dateStr)
  }
  day(){
    this.calendarOptions = {initialView : 'dayGridWeek'}
  }
}
