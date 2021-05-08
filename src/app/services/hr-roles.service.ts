import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const HRROLE_API = 'https://m2aster.herokuapp.com/api/hrroles';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  
};

@Injectable({
  providedIn: 'root'
})
export class HrRolesService {

  constructor(private http: HttpClient) { }

  gethrRoles(): Observable<Object> {
    return this.http.get(HRROLE_API, httpOptions);
  }
}
