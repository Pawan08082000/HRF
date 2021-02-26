import { EmployeeService } from 'src/app/services/employee.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import * as json_data from '../../../menu-master/employee-master/add-employee/addEmployee.json';

@Component({
  selector: 'app-leave-form',
  templateUrl: './leave-form.component.html',
  styleUrls: ['./leave-form.component.scss']
})
export class LeaveFormComponent implements OnInit {

  empName;
  constructor(private fb : FormBuilder, private empService : EmployeeService) { }

  leaveForm = this.fb.group({
    SelectEmp: [null, Validators.required],
    LeaveApprover: [null, Validators.required],
    LeaveType: [null, Validators.required],
    AvailableBalance: [{value:10, disabled: true}],
    LeaveFor: [null, Validators.required],
    StartDate: [null, Validators.required],
    EndDate: [null, Validators.required],
    StartTime: [null, Validators.required],
    EndTime: [null, Validators.required],
    Days: [{value:10, disabled: true}],
    ReasonForLeave: [null, Validators.required],

  });
  departments = json_data.Department;
  LeaveFor;
  ngOnInit(): void {
    this.empService.getEmployeeName().subscribe((data)=>{
      this.empName = data
      for (var i in this.empName){
        console.log(this.empName[i].EmployeeName)
      }
    },
    (err)=>{
      console.log(err);
    })
  }
  onSubmit(){

  }

}
