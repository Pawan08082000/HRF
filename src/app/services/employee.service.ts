import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(
    private http: HttpClient
  ) { }

  API = 'http://127.0.0.1:9000/api/';
  addEmpl = "menuMaster/insert";
  
 httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

addEmployee(empl_details): Observable<any> {
  return this.http.post(this.API + this.addEmpl, empl_details, this.httpOptions);
}


}
