import { Component, OnInit,ViewChild } from '@angular/core';
import { CalendarOptions, DateSelectArg, EventApi, EventClickArg, FullCalendarComponent } from '@fullcalendar/angular'; // useful for typechecking
import { CalendarService } from 'src/app/services/calendar.service';


@Component({
  selector: 'app-event-calendar',
  templateUrl: './event-calendar.component.html',
  styleUrls: ['./event-calendar.component.scss']
})
export class EventCalendarComponent implements OnInit {

  @ViewChild('calendar') calendarComponent: FullCalendarComponent;

  constructor(
    private calendarService: CalendarService
  ){}

  ngOnInit(){
  //   this.http.get('http://localhost/mypage.php').subscribe(data => {
  //      this.posts.push(data);
  //      console.log(this.posts);
  // });

  }

  calendarOptions: CalendarOptions = {
    initialView: 'dayGridWeek',
    editable: true,  
    headerToolbar: {
      left: 'prev,next today',
    center: 'title',
    right: 'dayGridMonth,timeGridWeek,timeGridDay'
    },
    dayMaxEvents: true,
    select: this.handleDateSelect.bind(this),
    selectable: true,
    eventClick: this.handleEventClick.bind(this),
    eventsSet: this.handleEvents.bind(this),
    // events: []
  };

  handleDateSelect(selectInfo: DateSelectArg) {
    const title = prompt('Please enter a new title for your event');
    const calendarApi = selectInfo.view.calendar;

    calendarApi.unselect(); // clear date selection

    if (title) {
      let eventInfo =  {
        // id: createEventId(),
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        allDay: selectInfo.allDay
      }
      calendarApi.addEvent(eventInfo);
      

      this.calendarService.addEvents(eventInfo).subscribe(data => {
        console.log("inserted")
      })
    }
  }

  currentEvents: EventApi[] = [];

  handleEvents(events: EventApi[]) {
    this.currentEvents = events;
    console.log(this.currentEvents)
  }

  handleEventClick(clickInfo: EventClickArg) {
    if (confirm(`Are you sure you want to delete the event '${clickInfo.event.title}'`)) {
      clickInfo.event.remove();
    }
  }
  
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
