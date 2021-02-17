import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';




@Component({
  selector: 'app-show-employees',
  templateUrl: './show-employees.component.html',
  styleUrls: ['./show-employees.component.scss']
})


export class ShowEmployeesComponent implements OnInit {
  ELEMENT_DATA = [];

  displayedColumns: string[] = ['EmployeeCode', 'EmployeeName', 'Department', 'EmailId',
"Designation", "WorkType", "ReportedTo"];
  dataSource : any;
  

  constructor(
    private employeeService: EmployeeService
  ) { }

  ngOnInit(): void {
    this.employeeService.showEmployee().subscribe(data => {
      console.log(data)

      for(let i in data){
        this.ELEMENT_DATA.push({
          EmployeeCode: data[i].EmployeeId,
          EmployeeName: data[i].EmployeeName,
          Department: data[i].Department,
          EmailId: data[i].Email,
          Designation: data[i].Designation,
          WorkType: data[i].WorkType,
          ReportedTo: data[i].ReportingTo,
          // Edit: "flight_land"
          
        });
      }
      console.log(this.ELEMENT_DATA)
  this.dataSource =  this.ELEMENT_DATA;

    })
  }

  editEmployee(){
    console.log("edit")
  }

}
