import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrgsStructService {

  constructor(private http : HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  
  private API = 'http://127.0.0.1:9000/api';
  private addNotice = "/orgsStruct/insertNotice"
  private insertPayHead = "/orgsStruct/addPayHead"

  insertNotice(noticeDetails): Observable<any>{
    return this.http.post(this.API + this.addNotice, noticeDetails, this.httpOptions);
  }

  addPayHead(payHeadDetails): Observable<any>{
    return this.http.post(this.API + this.insertPayHead, payHeadDetails, this.httpOptions);

  }
}
