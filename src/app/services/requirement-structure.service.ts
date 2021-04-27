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
  private getJobVacancy = "requirementStructure/getJobVacancy"
  private fixInterviews = "requirementStructure/fixInterview"
  private interview = "requirementStructure/getInterviews"
  private editJob = "requirementStructure/editJob"
  private editInterview = "requirementStructure/editSchedule"
  private apply = "requirementStructure/apply"


addJobVacancies(job_details): Observable<any> {
  return this.http.post(this.API + this.addJobVacancy, job_details, this.httpOptions);
}

getJobVacancies() {
  return this.http.get(this.API + this.getJobVacancy, this.httpOptions)
}

fixInterview(details): Observable<any> {
  return this.http.post(this.API + this.fixInterviews, details, this.httpOptions);
}
getSchedules(){
  return this.http.get(this.API + this.interview, this.httpOptions)
}

editVacancy(id: string){
  return this.http.get(this.API + this.editJob + `/${id}`, this.httpOptions)
}

editSchedule(id: string){
  return this.http.get(this.API + this.editInterview + `/${id}`, this.httpOptions)
}

jobApply(data): Observable<any>{
  return this.http.post(this.API + this.apply, data, this.httpOptions)
}
}
