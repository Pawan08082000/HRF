import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TrainingService {

  constructor(
    private http: HttpClient
  ) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  
  private API = 'https://m2aster.herokuapp.com/api/';
  private putFeedback = "training/addFeedback"

  addFeedback(feedback): Observable<any> {
    return this.http.post(this.API + this.putFeedback, feedback, this.httpOptions);
  }
}
