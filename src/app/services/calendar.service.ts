import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CalendarService {

  constructor(
    private http: HttpClient

  ) { }

  private API = 'https://m2aster.herokuapp.com/api/';
  private addEvent = "eventCalendar/postEvent";
  private showEvent = "eventCalendar/showEvents"
  private delEvent = "eventCalendar/deleteEvent"
  
 httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

  addEvents(events): Observable<any> {
    return this.http.post(this.API + this.addEvent, events, this.httpOptions);
  }
  showEvents(){
    return this.http.get(this.API + this.showEvent, this.httpOptions)
  }
  deleteEvent(event){
    return this.http.delete(this.API + this.delEvent + `/${event}`, this.httpOptions )
  }
}
