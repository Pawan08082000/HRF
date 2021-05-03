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

  private API = 'http://127.0.0.1:9000/api/';
  private addEmpl = "menuMaster/insert";
  private showEmpl = "menuMaster/show";
  private searchEmpl = "menuMaster/search";
 private getEmpl = "menuMaster/emp/";
 private getEmplName = "menuMaster/empName/";
 private getDep = "menuMaster/department"

 httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

addEmployee(empl_details): Observable<any> {
  return this.http.post(this.API + this.addEmpl, empl_details, this.httpOptions);
}

showEmployee(): Observable<any>{
  return this.http.get(this.API+this.showEmpl, this.httpOptions)
}

searchEmployee(searchData):Observable<any>{
  return this.http.get(`${this.API}${this.searchEmpl}/${searchData}`, this.httpOptions)
}

getEmployee(id:string):Observable<any>{
  return this.http.get(this.API+this.getEmpl+id, this.httpOptions)
}

getEmployeeName(department: string):Observable<any>{
  return this.http.get(this.API + this.getEmplName + department, this.httpOptions);
}

getDepartment():Observable<any>{
  return this.http.get(this.API + this.getDep, this.httpOptions);
}
}
