import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RequirementStructureService {

  constructor(
    private http: HttpClient

  ) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  
  private API = 'http://127.0.0.1:9000/api/';
  private addJobVacancy = "requirementStructure/addJobVacancy"
  
addJobVacancies(job_details): Observable<any> {
  return this.http.post(this.API + this.addJobVacancy, job_details, this.httpOptions);
}
}
