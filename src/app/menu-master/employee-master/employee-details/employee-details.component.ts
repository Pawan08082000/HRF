import { TokenStorageService } from './../../../services/token-storage.service';
import { Component, OnInit } from '@angular/core';
import {EmployeeService, } from '../../../services/employee.service'
@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.scss']
})
export class EmployeeDetailsComponent implements OnInit {

  employee;
  constructor(private empService : EmployeeService, private tokenStorage: TokenStorageService) { }

  ngOnInit(): void {
    const user = this.tokenStorage.getUser()
    this.empService.getEmployee(user.id).subscribe(
      (data) =>{
        this.employee = data;
      },
      (err)=>{
      }
    )
  }

}
